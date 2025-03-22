






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




