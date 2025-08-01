// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Typewriter Effect ---
    const typewriterElement = document.getElementById('typewriter');
    const words = ["innovators.", "builders.", "dreamers.", "engineers."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        // Ensure the typewriter element exists
        if (!typewriterElement) return;

        const currentWord = words[wordIndex];
        let typeSpeed = 150; // Speed of typing

        // Logic for typing or deleting text
        if (isDeleting) {
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 75; // Speed of deleting
        } else {
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        // --- State changes for the typewriter ---

        // If word is fully typed, pause and then start deleting
        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, 2000); // Pause at end of word
        } 
        // If word is fully deleted, move to the next word
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Loop back to the first word
        }

        // Call the type function again after a delay
        setTimeout(type, typeSpeed);
    }

    // Start the typewriter effect
    type();


    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (name && email && message) {
                // Success message
                formStatus.textContent = "Thank you for your message! We'll get back to you soon.";
                formStatus.className = 'text-green-600 font-medium';
                contactForm.reset(); // Clear the form fields
            } else {
                // Error message
                formStatus.textContent = "Please fill out all fields.";
                formStatus.className = 'text-red-600 font-medium';
            }

            // Clear the status message after 5 seconds
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        });
    }

});
