document.addEventListener('DOMContentLoaded', function() {
    // Get the menu toggle button (bars icon)
    const menuToggle = document.querySelector('.bars');
    
    if (!menuToggle) return; // Exit if element doesn't exist
    
    // Try to find the menu - check multiple potential selectors
    const menu = document.querySelector('ul') || document.querySelector('.menu');
    
    if (!menu) return; // Exit if menu doesn't exist
    
    // Add click event listener to the menu toggle button
    menuToggle.addEventListener('click', function() {
        // Toggle the Show_menu class on the menu element
        menu.classList.toggle('Show_menu');
        
        // Toggle display style as well for extra compatibility
        if (menu.classList.contains('Show_menu')) {
            menu.style.display = 'flex';
            menu.style.width = '100%';
        } else {
            // Use setTimeout to allow the transition to complete before hiding
            setTimeout(() => {
                menu.style.display = 'none';
            }, 300); // Match transition time from CSS
        }
    });
    
    // Get all menu items
    const menuItems = menu.querySelectorAll('li a');
    
    // Add hover effects using JavaScript
    menuItems.forEach(item => {
        // Make sure any existing hover-line is removed
        const existingLine = item.querySelector('.hover-line');
        if (existingLine) {
            existingLine.remove();
        }
        
        // Create a line element for each menu item
        const line = document.createElement('span');
        line.className = 'hover-line';
        line.style.position = 'absolute';
        line.style.bottom = '0';
        line.style.left = '0';
        line.style.height = '2px';
        line.style.width = '0';
        line.style.backgroundColor = 'currentColor'; // Use current text color
        line.style.transition = 'width 0.3s ease';
        line.style.display = 'block';
        
        // Set position relative on the menu item if not already
        if (getComputedStyle(item).position === 'static') {
            item.style.position = 'relative';
        }
        
        // Append the line
        item.appendChild(line);
        
        // Add mouseenter event to show the line
        item.addEventListener('mouseenter', function() {
            line.style.width = '100%';
        });
        
        // Add mouseleave event to hide the line
        item.addEventListener('mouseleave', function() {
            line.style.width = '0';
        });
        
        // Close menu when clicking on a menu item
        item.addEventListener('click', function() {
            menu.classList.remove('Show_menu');
            // Use setTimeout to allow the transition to complete before hiding
            setTimeout(() => {
                menu.style.display = 'none';
            }, 300); // Match transition time from CSS
        });
    });
});
// DARK MODE AND LIGHT MODE
let mode = document.querySelector('.mode'); // Selects the first element with the class "mode"
// Selects the element with the class "mode" and adds a click event listener
mode.addEventListener('click', () => {   // 1- Listens for a click event on the mode element, 2- When clicked, it executes the function inside.
    // Toggles the "dark-mode" class on the <body> element
    // If "dark-mode" is present, it removes it (light mode)
    // If "dark-mode" is absent, it adds it (dark mode)
    document.body.classList.toggle('light_mode'); 
    
});



// TESTIMONIAL SWIPER

// Initialize a new Swiper instance and target elements with the class 'MySwiper'
var swiper = new Swiper('.MySwiper', {  
   
    // Number of slides visible at a time (default: 3 slides shown)
    slidesPerView: 3,  

    // Space (in pixels) between each slide
    spaceBetween: 10,  

    // Enables infinite looping of slides (so after the last slide, it loops back to the first)
    loop: true,  

    // Automatically moves to the next slide without user interaction
    autoplay: true,  

    // Define responsive breakpoints for different screen sizes
    breakpoints: {  
        
        // If screen width is 1300px or more, show 3 slides at a time
        1300: { slidesPerView: 3 },  
        
        // If screen width is between 900px and 1299px, show 2 slides at a time
        900: { slidesPerView: 2 },  
        
        // If screen width is less than 900px, show only 1 slide at a time
        0: { slidesPerView: 1 }  
    }
});




