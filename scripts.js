// JS form Validation

// Get the form element by its ID
const form = document.getElementById('contactForm');

// Get the div where we will show messages (errors or success)
const messages = document.getElementById('formMessages');

// Add an event listener for when the form is submitted
form.addEventListener('submit', function (e) {
  // Prevent the default action (submitting the form and refreshing the page)
  e.preventDefault();

  // Clear any previous messages
  messages.textContent = '';
  // Set the message text color to red (default for errors)
  messages.style.color = 'red';

  // Get and trim the value of the name input field
  const name = form.name.value.trim();

  // Get and trim the value of the email input field
  const email = form.email.value.trim();

  // Get and trim the value of the age input field, then convert to number
  const age = parseInt(form.age.value.trim());

  // Get and trim the value of the subject input field
  const subject = form.subject.value.trim();

  // Get and trim the value of the message textarea
  const message = form.message.value.trim();

  // Check if the name is at least 3 characters long
  if (name.length < 3) {
    // Show error message if name is too short
    messages.textContent = 'Name must be at least 3 characters long.';
    // Stop further validation
    return;
  }

  // Define a simple regular expression pattern for validating email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test if the email matches the pattern
  if (!emailPattern.test(email)) {
    // Show error message if email is invalid
    messages.textContent = 'Please enter a valid email address.';
    // Stop further validation
    return;
  }

  // Check if age is a number and between 18 and 100
  if (isNaN(age) || age < 18 || age > 100) {
    // Show error message if age is not valid
    messages.textContent = 'Age must be a number between 18 and 100.';
    // Stop further validation
    return;
  }

  // Check if the subject is at least 3 characters long
  if (subject.length < 3) {
    // Show error message if subject is too short
    messages.textContent = 'Subject must be at least 3 characters.';
    // Stop further validation
    return;
  }

  // Check if the message is at least 10 characters long
  if (message.length < 10) {
    // Show error message if message is too short
    messages.textContent = 'Message must be at least 10 characters.';
    // Stop further validation
    return;
  }

  // If all validations pass, set the message color to green (success)
  messages.style.color = 'green';

  // Show a success message to the user
  messages.textContent = 'Form submitted successfully!';

  // Here you can add code to actually submit the form or send data to a server
});


// MINI GAME (GUESS THE NUMBER)

// Get game elements by ID
const guessButton = document.getElementById("guessButton");
const guessInput = document.getElementById("guessInput");
const gameMessage = document.getElementById("gameMessage");

// Run game only if elements exist
if (guessButton && guessInput && gameMessage) {
  // Pick a random number between 1 and 10
  let randomNumber = Math.floor(Math.random() * 10) + 1;

  // Listen for button click
  guessButton.addEventListener("click", () => {
    const guess = parseInt(guessInput.value);

    // Validate guess input
    if (isNaN(guess) || guess < 1 || guess > 10) {
      gameMessage.textContent = "Enter a number between 1 and 10!";
      gameMessage.style.color = "orange";
    } 
    // Check if guess is correct
    else if (guess === randomNumber) {
      gameMessage.textContent = "Correct! You win!";
      gameMessage.style.color = "green";
      // Reset random number for next round
      randomNumber = Math.floor(Math.random() * 10) + 1;
    } 
    // Wrong guess
    else {
      gameMessage.textContent = "Wrong! Try again!";
      gameMessage.style.color = "red";
    }
  });
}