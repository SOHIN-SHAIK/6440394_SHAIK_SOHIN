// Filename: jqueryTasks.js

$(document).ready(function() {
  // Click handler using jQuery for Register button
  $('#registerBtn').click(function() {
    alert('Register button clicked!');
  });

  // Fade in all event cards on page load
  $('.eventCard').fadeIn(1000);

  // Example: Fade out event cards on button click
  $('#hideEventsBtn').click(function() {
    $('.eventCard').fadeOut(800);
  });
});

/* 
Benefit of moving to frameworks like React or Vue:
They provide efficient state management, reusable components, and a virtual DOM for faster, scalable UI development.
*/
