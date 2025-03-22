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
                if (!menu.classList.contains('Show_menu')) {
                    menu.style.display = '';
                }
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
        
        // Add click event to each menu item to close the EXPANDED menu (Show_menu state)
        item.addEventListener('click', function(e) {
            // Only close if menu is in expanded state (has Show_menu class)
            if (menu.classList.contains('Show_menu')) {
                // Remove the expanded state
                menu.classList.remove('Show_menu');
                
                // Reset to default styling after transition
                setTimeout(() => {
                    // This will respect the CSS for different screen sizes
                    // rather than forcing display: none
                    menu.style.display = '';
                    menu.style.width = '';
                }, 300); // Match transition time from CSS
            }
        });
    });
});

// DARK MODE AND LIGHT MODE
let mode = document.querySelector('.mode'); 
mode.addEventListener('click', () => {
    document.body.classList.toggle('light_mode'); 
});

// TESTIMONIAL SWIPER
var swiper = new Swiper('.MySwiper', {  
    slidesPerView: 3,  
    spaceBetween: 10,  
    loop: true,  
    autoplay: true,  
    breakpoints: {  
        1300: { slidesPerView: 3 },  
        900: { slidesPerView: 2 },  
        0: { slidesPerView: 1 }  
    }
});