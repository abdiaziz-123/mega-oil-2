

// FORM FUNTIONALITY
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");
    const consentCheckbox = form.querySelector('input[type="checkbox"]');

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting

        // Clear previous error messages
        clearErrors();

        // Validate the form fields
        let isValid = validateForm();

        if (isValid) {
            // If the form is valid, display a success message (or proceed with form submission)
            alert("Form submitted successfully!");
            form.reset(); // Clear the form fields after submission
        }
    });

    function validateForm() {
        let isValid = true;

        // Validate Name
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required.");
            isValid = false;
        }

        // Validate Email
        if (emailInput.value.trim() === "") {
            showError(emailInput, "Email address is required.");
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            showError(emailInput, "Please enter a valid email address.");
            isValid = false;
        }

        // Validate Phone Number
        if (phoneInput.value.trim() === "") {
            showError(phoneInput, "Phone number is required.");
            isValid = false;
        } else if (!/^\d+$/.test(phoneInput.value)) {
            showError(phoneInput, "Phone number must contain only numbers.");
            isValid = false;
        } else if (phoneInput.value.length < 10) {
            showError(phoneInput, "Phone number must be at least 10 digits.");
            isValid = false;
        }

        // Validate Checkbox Consent
        if (!consentCheckbox.checked) {
            showError(consentCheckbox, "You must allow us to store your submission.");
            isValid = false;
        }

        return isValid;
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function showError(input, message) {
        const errorElement = document.createElement("div");
        errorElement.classList.add("error-message");
        errorElement.textContent = message;
        input.parentElement.appendChild(errorElement);
        input.classList.add("error-border");
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(error => error.remove());

        const inputs = document.querySelectorAll(".error-border");
        inputs.forEach(input => input.classList.remove("error-border"));
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");
    const menuIconBar = document.getElementById("menu-icon-bar");

    menuIcon.addEventListener("click", function() {
        navLinks.classList.toggle("show");

        // Toggle icon between bars and close
        if (navLinks.classList.contains("show")) {
            menuIconBar.classList.replace("fa-bars", "fa-times");
        } else {
            menuIconBar.classList.replace("fa-times", "fa-bars");
        }
    });
});
