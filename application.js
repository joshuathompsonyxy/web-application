document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const usernameInput = document.getElementById('username');
    const notFoundSection = document.getElementById('notFoundSection');
    const formContainer = document.getElementById('formContainer');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = usernameInput.value;
  
      if (username.toLowerCase() === "notfound") {
        formContainer.style.display = 'none'; // Hide the form
        notFoundSection.style.display = 'block'; // Show the "Not Found" section
      } else {
        const messageElement = document.createElement('p');
        messageElement.textContent = `You entered: ${username}`;
        formContainer.appendChild(messageElement); // Add message to the form container
        usernameInput.value = '';
      }
    });
  });