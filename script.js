

// Get the "Enroll Now" button element
const enrollButton = document.querySelector('.btn');

// Add a click event listener to the button
enrollButton.addEventListener('click', () => {
  // Display a confirmation message
  const confirmationMessage = "You are now enrolled in the course!";
  alert(confirmationMessage);
});
