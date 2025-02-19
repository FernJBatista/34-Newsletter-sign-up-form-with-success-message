addEventListener("DOMContentLoaded", function () {
    const form = this.document.getElementById('form');

    function handleSubmit(event) {
        event.preventDefault() // prevent default behavior of form element

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        // Validate Form 
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('#mail + span.error');
        /* emailInput.reportValidity();

        //Validate with the built-it contraints
        if (!emailInput.validity.valid) {
            return;
        } */

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
    }

    
    form.addEventListener('submit', handleSubmit)
});