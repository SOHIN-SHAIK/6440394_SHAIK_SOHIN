// domManipulation.js

const events = [
  { id: 1, name: 'Spring Festival', seats: 50 },
  { id: 2, name: 'Charity Run', seats: 0 }, // Full
  { id: 3, name: 'Music Concert', seats: 30 }
];

const eventsContainer = document.querySelector('#eventsContainer');

function createEventCard(event) {
  const card = document.createElement('div');
  card.className = 'event-card';
  card.innerHTML = `
    <h3>${event.name}</h3>
    <p>Seats available: <span id="seats-${event.id}">${event.seats}</span></p>
    <button ${event.seats === 0 ? 'disabled' : ''} onclick="register(${event.id})">
      Register
    </button>
  `;
  return card;
}

function renderEvents() {
  eventsContainer.innerHTML = '';
  events.forEach(event => {
    const card = createEventCard(event);
    eventsContainer.appendChild(card);
  });
}

function register(eventId) {
  const event = events.find(e => e.id === eventId);
  try {
    if (event.seats <= 0) throw new Error('No seats available');
    event.seats--;
    document.getElementById(`seats-${eventId}`).textContent = event.seats;
    if (event.seats === 0) {
      renderEvents(); // Re-render to disable button
    }
    alert(`Registered for ${event.name}`);
  } catch (error) {
    alert(error.message);
  }
}

// Initial render
renderEvents();
