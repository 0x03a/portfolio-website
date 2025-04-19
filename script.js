document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.bars');
    const menu = document.querySelector('.menu');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    const menuLinks = document.querySelectorAll('.menu li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    // Dark/Light Mode Toggle
    const modeToggle = document.querySelector('.mode');
    if (modeToggle) {
        modeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light_mode');
            
            // Save preference to localStorage
            const isLightMode = document.body.classList.contains('light_mode');
            localStorage.setItem('lightMode', isLightMode);
        });
    }
    
    // Check for saved theme preference
    if (localStorage.getItem('lightMode') === 'true') {
        document.body.classList.add('light_mode');
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Text animation for hero section
    const textElement = document.getElementById('text');
    const texts = ['Web Developer', 'Backend Engineer', 'Problem Solver'];
    let currentIndex = 0;
    
    if (textElement) {
        function changeText() {
            textElement.style.animation = 'fadeOut 0.5s ease forwards';
            
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % texts.length;
                textElement.textContent = texts[currentIndex];
                textElement.style.animation = 'fadeIn 0.5s ease forwards';
            }, 500);
        }
        
        setInterval(changeText, 3000);
    }
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service_card, .about_container, .contact_detail');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

// Initialize Swiper if it exists on the page
if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.MySwiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        breakpoints: {
            1300: { slidesPerView: 3 },
            900: { slidesPerView: 2 },
            0: { slidesPerView: 1 }
        }
    });
}

// form

// emailjs

// Modified version of your sendMail function
function sendMail(e) {
    // Prevent the default form submission
    if (e) e.preventDefault();
    
    // Get form values
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    // Show loading state
    const formStatus = document.getElementById("formStatus");
    formStatus.style.display = "block";
    formStatus.style.backgroundColor = "#ffcc80";
    formStatus.textContent = "Sending message...";

    // Send email using EmailJS
    emailjs.send("service_23xyu1i", "template_feebwrj", parms)
        .then(function(response) {
            // Show success message
            formStatus.style.backgroundColor = "#a5d6a7";
            formStatus.textContent = "Your Email has been sent successfully!";
            
            // Reset form
            document.getElementById("contactForm").reset();
            
            // Hide status message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = "none";
            }, 5000);
        }, function(error) {
            // Show error message
            formStatus.style.backgroundColor = "#ef9a9a";
            formStatus.textContent = "Failed to send email. Error: " + error.text;
            
            // Hide status message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = "none";
            }, 5000);
        });
}

// Add this to your existing script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Your existing code here...
    
    // Add form submit event listener
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener('submit', sendMail);
    }
    
    // Rest of your existing code...
});