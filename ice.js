document.addEventListener("DOMContentLoaded", function() {
    // Toggle the 'clicked' class on the image when clicked
    const flavorImages = document.querySelectorAll('.flavor-item img');
    
    flavorImages.forEach(function(image) {
        image.addEventListener('click', function() {
            image.classList.toggle('clicked');
        });
    });

    // Special Offer Section
    const offerButton = document.getElementById('offer-button');
    offerButton.addEventListener('click', function() {
        alert("Congrats! You've claimed the 20% discount offer. Use code SCOOP20!");
    });

    // Form Validation & Handling
    const orderForm = document.getElementById('order-form');
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the values of the form fields
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const phoneNumber = document.getElementById('phone-number').value;
        const email = document.getElementById('email').value;
        const flavor = document.getElementById('flavor').value;
        const message = document.getElementById('message').value;
        const location = document.getElementById('location').value;

        // Basic validation
        if (!firstName || !lastName || !phoneNumber || !email || !flavor || !location) {
            alert("Please fill in all the required fields.");
            return;
        }

        // Create an order summary
        const orderSummary = `
            Order Summary:
            Name: ${firstName} ${lastName}
            Phone: ${phoneNumber}
            Email: ${email}
            Flavor: ${flavor}
            Message: ${message}
            Delivery Location: ${location}
        `;

        // Show the order summary in the console or alert
        alert(orderSummary);
        
        // Reset the form after submission
        orderForm.reset();
    });

    // Smooth Scroll for Navigation
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
