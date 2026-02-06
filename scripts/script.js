document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation menu
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').slice(1); // Get target section ID
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                e.preventDefault();
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight menu item on hover
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#00b4d8';
            this.style.color = '#ffffff';
        });

        item.addEventListener('mouseout', function () {
            this.style.backgroundColor = '';
            this.style.color = '#ffffff';
        });
    });

    // Add hover animations for category items
    const categoryItems = document.querySelectorAll('.category-item');
    if (categoryItems.length) {
        categoryItems.forEach(item => {
            item.addEventListener('mouseover', function () {
                this.style.transform = 'scale(1.1)';
                this.style.boxShadow = '0px 6px 20px rgba(0, 0, 0, 0.3)';
            });

            item.addEventListener('mouseout', function () {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '';
            });
        });
    }

    // Dynamic alert on button click (example for email)
    const contactLink = document.querySelector('.menu-item[href="#contact"]');
    if (contactLink) {
        contactLink.addEventListener('click', function () {
            alert('Contact: +91-9440021066 \nEmail: dattasashanka@gmail.com');
        });
    }

    // Dynamic alert on button click (example for owner details)
    const ownerLink = document.querySelector('.menu-item[href="#owner"]');
    if (ownerLink) {
        ownerLink.addEventListener('click', function () {
            alert('Owner: K.S.Balachandra \nDealer: Authorized Dealer for Usha company');
        });
    }

    // Dynamic alert on button click (example for Address details)
    const addressLink = document.querySelector('.menu-item[href="#address"]');
    if (addressLink) {
        addressLink.addEventListener('click', function () {
            alert('Address: Opposite to Annapurna Theatre, \n P.P Road, Bhimavaram, 534201');
        });
    }

    // Scroll-to-top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '⬆ Back to Top';
    scrollToTopBtn.style.position = 'fixed';
    scrollToTopBtn.style.bottom = '20px';
    scrollToTopBtn.style.right = '20px';
    scrollToTopBtn.style.padding = '10px 15px';
    scrollToTopBtn.style.backgroundColor = '#0077b6';
    scrollToTopBtn.style.color = 'white';
    scrollToTopBtn.style.border = 'none';
    scrollToTopBtn.style.borderRadius = '5px';
    scrollToTopBtn.style.cursor = 'pointer';
    scrollToTopBtn.style.display = 'none';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Fade-in effect for images and text on scroll
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        fadeInOnScroll.observe(el);
    });

    // Contact form submission (simulated action)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            alert('Thank you for contacting us! We will get back to you soon.');
            contactForm.reset(); // Clear the form after submission
        });
    }


    
});

document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in effect on scroll
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        fadeInOnScroll.observe(el);
    });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const contactNo = document.getElementById('contact_no').value.trim();

    // Validation flags
    let isValid = true;
    let errorMessage = '';

    // Validate name (non-empty and at least 2 characters)
    if (!name || name.length < 2) {
      isValid = false;
      errorMessage = 'Name must be at least 2 characters long.';
    }

    // Validate email (simple regex for email pattern)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address.';
    }

    // Validate contact number (only digits and length 10-15)
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(contactNo)) {
      isValid = false;
      errorMessage = 'Contact number must be between 10 to 15 digits.';
    }

    // Display success or error message
    const messageDiv = document.getElementById('formMessage');
    if (isValid) {
      messageDiv.className = 'message success';
      messageDiv.textContent = 'Form submitted successfully!';
      messageDiv.style.display = 'block';

      // Reset form
      document.getElementById('contactForm').reset();

      // (Optional) Simulate saving to a backend
      console.log({ name, email, contactNo });
    } else {
      messageDiv.className = 'message error';
      messageDiv.textContent = errorMessage;
      messageDiv.style.display = 'block';
    }
});

