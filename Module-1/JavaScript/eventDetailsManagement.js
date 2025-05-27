/**
 * eventDetailsManagement.js
 * Task: Syntax, Data Types, and Operators
 * Description: Manage event details and seat availability using const, let, and template literals.
 */

// Event constants
const EVENT_NAME = "Spring Festival";
const EVENT_DATE = "2025-06-15";

// Mutable seat count
let availableSeats = 50;

// Log initial event info
console.log(`Event: ${EVENT_NAME} on ${EVENT_DATE} | Seats available: ${availableSeats}`);

// Simulate one registration (decrement seats)
availableSeats--;
console.log(`Seats available after registration: ${availableSeats}`);

// Simulate one cancellation (increment seats)
availableSeats++;
console.log(`Seats available after cancellation: ${availableSeats}`);
