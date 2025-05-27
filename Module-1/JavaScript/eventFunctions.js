// eventFunctions.js

// Closure to track total registrations per category
function registrationTracker() {
  let totalRegistrations = 0;
  return function () {
    totalRegistrations++;
    return totalRegistrations;
  };
}

const trackCategoryRegistrations = registrationTracker();

// Add a new event
function addEvent(events, event) {
  events.push(event);
}

// Register a user for an event
function registerUser(event) {
  if (event.seats > 0) {
    event.seats--;
    trackCategoryRegistrations();
    console.log(`User registered for ${event.name}. Seats left: ${event.seats}`);
  } else {
    throw new Error('No seats available');
  }
}

// Filter events by category using a callback
function filterEventsByCategory(events, category, callback) {
  return events.filter(event => callback(event, category));
}

// Example usage of callback for filtering
const isCategoryMatch = (event, category) => event.category === category;
