// eventArrays.js

// Array to store events
const communityEvents = [
  { name: 'Spring Festival', category: 'Festival', date: '2025-04-10' },
  { name: 'Charity Run', category: 'Sports', date: '2025-05-01' },
  { name: 'Music Concert', category: 'Music', date: '2025-06-20' }
];

// Add a new event
function addEvent(event) {
  communityEvents.push(event);
}

// Filter music events
function getMusicEvents() {
  return communityEvents.filter(event => event.category === 'Music');
}

// Map to formatted display strings
function getEventCards() {
  return communityEvents.map(event => `${event.name} - ${event.category}`);
}

// Usage
addEvent({ name: 'Workshop on Baking', category: 'Workshop', date: '2025-07-15' });

console.log(getMusicEvents());
console.log(getEventCards());
