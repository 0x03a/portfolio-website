# Portfolio Website - INSHAL

## Project Description

This is a personal portfolio website designed to showcase my skills, projects, and professional experience as a web developer. The website serves as a digital resume and portfolio, allowing potential clients and employers to learn about my expertise, view my work, and get in touch with me.

## Features

### Responsive Design

- Fully responsive layout that adapts to all screen sizes (mobile, tablet, desktop)
- Mobile-friendly navigation with a hamburger menu for smaller screens
- Flexible grid layouts that adjust based on viewport size

### Interactive Elements

- Dark/Light mode toggle with smooth transitions
- Animated hover effects on navigation links, buttons, and project cards
- Interactive project gallery with overlay information on hover
- Testimonial slider using Swiper.js for a smooth carousel experience

### Content Sections

- **Hero Section**: Eye-catching introduction with a professional image
- **About Me**: Professional summary and key attributes
- **Skills**: Visual representation of technical skills
- **Services**: Detailed information about services offered
- **Projects**: Portfolio gallery with project details
- **Testimonials**: Client feedback carousel
- **Blog**: Collection of articles and insights
- **Contact Form**: Easy-to-use contact form with validation

### Performance Optimization

- Optimized images for faster loading
- Minimal external dependencies
- Efficient CSS using custom properties (variables)
- Smooth animations with hardware acceleration

## Tech Stack

### Frontend

- **HTML5**: Semantic markup for structure
- **CSS3**: Custom styling with:
  - CSS Variables for theming
  - Flexbox and Grid for layouts
  - Media queries for responsiveness
  - Animations and transitions
- **JavaScript (ES6+)**: For interactive elements:
  - Dark/light mode toggle
  - Mobile menu functionality
  - Hover effects
  - Form validation

### Libraries & Tools

- **Remix Icon**: Icon library for UI elements
- **Swiper.js**: For testimonial carousel functionality
- **Google Fonts**: Poppins and Space Grotesk font families
- **Google Maps API**: For location embedding in the contact page

## Technologies Used

- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- <img src="https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png" alt="HTML Logo" width="50" height="50">
- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNcROPazO1jI9SFGLW0xdtny_KZfkM-wtLA&s" alt="Temporary Image" width="50" height="50">

## Installation & Usage

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of web servers (for local testing)

### Local Setup

1. **Clone the repository**

```sh
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. **Open in browser**

Simply open the `index.html` file in your web browser:

```sh
# On macOS
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
```

3. **Using a local server (recommended)**

For full functionality, it's better to use a local server:

Using Python:

```sh
# Python 3
python -m http.server

# Python 2
python -m SimpleHTTPServer
```

Using Node.js:

```sh
# Install if you haven't already
npm install -g live-server

# Run
live-server
```

4. **Navigate to the site**

Open your browser and go to `http://localhost:8000` (or the port shown in your terminal).

## Project Structure

```plaintext
project-root/
├── assets/                  # Folder for all static assets
│   ├── images/              # Folder for all images
│   │   ├── blog/            # Images for blog posts
│   │   │   ├── blog-1.jpg
│   │   │   ├── blog-2.jpg
│   │   │   ├── blog-3.jpg
│   │   │   ├── blog-4.jpg
│   │   │   ├── blog-5.jpg
│   │   │   └── blog-6.jpg
│   │   ├── clients/         # Client profile images
│   │   │   ├── client-profile-1.jpg
│   │   │   ├── client-profile-2.jpg
│   │   │   ├── client-profile-3.jpg
│   │   │   ├── client-profile-4.jpg
│   │   │   ├── client-profile-5.jpg
│   │   │   └── client-profile-6.jpg
│   │   ├── logos/           # Logos for technologies
│   │   │   ├── boostrap-logo.png
│   │   │   ├── css3-logo.png
│   │   │   ├── html-logo.png
│   │   │   └── Js-logo.png
│   │   ├── projects/        # Project-related images
│   │   │   ├── project-1.jpg
│   │   │   ├── project-2.jpg
│   │   │   ├── project-3.jpg
│   │   │   ├── project-4.jpg
│   │   │   ├── project-5.jpg
│   │   │   └── project-6.jpg
│   │   ├── misc/            # Miscellaneous images
│   │   │   ├── CTA.jpg
│   │   │   ├── imageinshal.png
│   │   │   └── working-791849_1920.jpg
│   ├── styles/              # Folder for CSS files
│   │   └── styles.css
│   └── scripts/             # Folder for JavaScript files
│       └── script.js
│
├── Blog.html                # Blog page
├── Contact.html             # Contact page
├── index.html               # Home page (main entry point)
├── info.text                # Information page (but it is not included in website, in this imp info is written)
├── info.txt                 # Text file with additional information
└── Project.html             # Projects page
```

## Author & Contact

© INSHALR 2025 | All Rights Reserved
