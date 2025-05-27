/**
 * eventValidationAndRegistration.js
 * Task: Conditionals, Loops, and Error Handling
 * Description: Validate upcoming events, limit registrations, handle errors gracefully.
 */

// Sample event list
const events = [
  { name: "Spring Festival", date: "2025-06-15", seats: 5 },
  { name: "Summer Concert", date: "2024-05-01", seats: 0 },  // Past or full event
  { name: "Food Fair", date: "2025-08-10", seats: 20 },
];

// Function to check if event is upcoming
function isUpcoming(date) {
  const today = new Date();
  return new Date(date) > today;
}

// Display valid events
console.log("Available Events:");
events.forEach(event => {
  if (isUpcoming(event.date) && event.seats > 0) {
    console.log(`- ${event.name} on ${event.date} | Seats: ${event.seats}`);
  }
});

// Registration function with error handling
function registerEvent(eventName) {
  try {
    const event = events.find(e => e.name === eventName);
    if (!event) throw new Error("Event not found.");
    if (!isUpcoming(event.date)) throw new Error("Cannot register for past events.");
    if (event.seats <= 0) throw new Error("No seats available.");

    event.seats--;
    console.log(`Registration successful for ${event.name}. Seats left: ${event.seats}`);
  } catch (error) {
    console.error(`Registration failed: ${error.message}`);
  }
}

// Test registrations
registerEvent("Spring Festival"); // valid
registerEvent("Summer Concert");  // past/full
registerEvent("Nonexistent Event"); // invalid
