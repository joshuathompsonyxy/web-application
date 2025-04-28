document.addEventListener('DOMContentLoaded', function() { //wait until entire page has loaded
    const form = document.getElementById('myForm'); //form element
    const usernameInput = document.getElementById('username'); //username input box
    const notFoundSection = document.getElementById('notFoundSection'); //the hidden 404 error
    const formContainer = document.getElementById('formContainer'); //the container that holds the form
  
    form.addEventListener('submit', function(event) { // add an event listener that runs when the form is submitted
      event.preventDefault(); // stop the form from actually submitting and refreshing the page
      const username = usernameInput.value; // get the test that the user entered
  
      if (username.toLowerCase() === "notfound") { // check if the user type notfound
        formContainer.style.display = 'none'; // Hide the form
        notFoundSection.style.display = 'block'; // Show the "Not Found" section
      } else {
        const messageElement = document.createElement('p'); //create a new p element
        messageElement.textContent = `You entered: ${username}`; // set the text to show waht the user entered
        formContainer.appendChild(messageElement); // Add message to the form container
        usernameInput.value = ''; //clear the input box for next entry
      }
    });
  });
