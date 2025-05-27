

const events = [
  { id: 1, name: 'Music Festival', date: '2025-07-20', category: 'music' },
  { id: 2, name: 'Art Workshop', date: '2025-08-15', category: 'art' },
  { id: 3, name: 'Food Expo', date: '2025-09-10', category: 'food' }
];

// Function with default parameter and destructuring
const filterEventsByCategory = (eventList = [], category = '') => {
  const filteredEvents = [...eventList].filter(({ category: cat }) => cat === category);
  return filteredEvents;
};

// Function to clone and add new event using spread operator
const addEvent = (eventList, newEvent) => [...eventList, newEvent];

// Usage
const musicEvents = filterEventsByCategory(events, 'music');

const newEvent = { id: 4, name: 'Tech Meetup', date: '2025-10-05', category: 'tech' };
const updatedEvents = addEvent(events, newEvent);

console.log('Music Events:', musicEvents);
console.log('Updated Events:', updatedEvents);
