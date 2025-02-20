addEventListener("DOMContentLoaded", function () {
    const form = this.document.getElementById('form');

    function handleSubmit(event) {
        event.preventDefault() // prevent default behavior of form element

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        // Validate Form 
        const emailInput = document.getElementById('email');
        const emailError = document.querySelector('#email + span.error');

        emailInput.addEventListener('input', (event) => {
            if (emailError.validity.valid) {
                emailError.textContent = ""; //Remove the message content
                emailError.className = "error"; //Remove the error class
                console.log('Input is valid');
            } else {
                // If there is still an error, show the correct error message
                showError();
            }
        });

        form.addEventListener("submit", (event) => {
            // if the email field is invalid
            if (!emailInput.validity.valid) {
                // display an appropiate error message
                showError();
                event.preventDefault() ;
            } else {
                // If the email is valid, show the success message
                showSuccess();
            }
        });

        addEventListener('click', function (event) {
            if (event.target.id === 'overlay' || event.target.id === 'dismissButton') {
                // If the user clicks outside the overlay, close it
                const overlay = document.getElementById('overlay');
                overlay.classList.remove('active');
                // Reset the form
                emailInput.value = '';
                emailInput.classList.remove('touched');
                emailError.textContent = '';
            }
        })

        function showError() {
            if (emailInput.validity.valueMissing) {
                // if empty
                emailError.textContent = "You need to enter an email address.";
            } else if (emailInput.validity.typeMismatch) {
                // if it's not an email
                emailError.textContent = "Entered value needs to be an email address.";
            } else if (emailInput.validity.tooShort) {
                // if the value is too short
                emailError.textContent = `Email should be at least 4 characters long. You entered ${emailInput.value.length} characters.`;
            }
            // Add the 'active' class to the error message
            emailError.className = "error active";
        }

        function showSuccess() {
            // Show the success message
            const overlay = document.getElementById('overlay');
            overlay.classList.toggle('active');
        }
    }

    form.addEventListener('submit', handleSubmit)
});