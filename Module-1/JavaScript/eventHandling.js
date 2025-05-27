// eventHandling.js

const events = [
  { id: 1, name: 'Spring Festival', category: 'Festival', seats: 50 },
  { id: 2, name: 'Charity Run', category: 'Sports', seats: 20 },
  { id: 3, name: 'Music Concert', category: 'Music', seats: 30 },
  { id: 4, name: 'Art Workshop', category: 'Art', seats: 15 }
];

const eventsContainer = document.querySelector('#eventsContainer');
const filterSelect = document.querySelector('#categoryFilter');
const searchInput = document.querySelector('#searchInput');

function createEventCard(event) {
  const card = document.createElement('div');
  card.className = 'event-card';
  card.innerHTML = `
    <h3>${event.name}</h3>
    <p>Category: ${event.category}</p>
    <p>Seats: ${event.seats}</p>
    <button ${event.seats === 0 ? 'disabled' : ''} onclick="register(${event.id})">Register</button>
  `;
  return card;
}

function renderEvents(filteredEvents) {
  eventsContainer.innerHTML = '';
  filteredEvents.forEach(event => {
    const card = createEventCard(event);
    eventsContainer.appendChild(card);
  });
}

function register(eventId) {
  const event = events.find(e => e.id === eventId);
  if (event.seats > 0) {
    event.seats--;
    alert(`Registered for ${event.name}`);
    applyFilters();
  } else {
    alert('No seats available');
  }
}

function applyFilters() {
  const category = filterSelect.value;
  const searchTerm = searchInput.value.toLowerCase();
  let filtered = events;

  if (category !== 'all') {
    filtered = filtered.filter(e => e.category === category);
  }
  if (searchTerm) {
    filtered = filtered.filter(e => e.name.toLowerCase().includes(searchTerm));
  }
  renderEvents(filtered);
}

// Event listeners
filterSelect.onchange = applyFilters;
searchInput.onkeydown = (e) => {
  if (e.key === 'Enter') applyFilters();
};

// Initial render
renderEvents(events);
