// eventObjects.js

// Event class definition
class Event {
  constructor(name, date, seats, category) {
    this.name = name;
    this.date = new Date(date);
    this.seats = seats;
    this.category = category;
  }

  // Method to check seat availability
  checkAvailability() {
    return this.seats > 0 ? 'Seats Available' : 'Sold Out';
  }
}

// Example: list keys and values of an event object
function listEventDetails(event) {
  return Object.entries(event).map(([key, value]) => `${key}: ${value}`);
}

// Usage
const sampleEvent = new Event('Tech Meetup', '2025-06-15', 50, 'Technology');
console.log(sampleEvent.checkAvailability());
console.log(listEventDetails(sampleEvent));
