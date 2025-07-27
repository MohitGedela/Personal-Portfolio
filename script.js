// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorTrails = [];

// Create cursor trails
for (let i = 0; i < 10; i++) {
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  document.body.appendChild(trail);
  cursorTrails.push(trail);
}

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.1;
  cursorY += (mouseY - cursorY) * 0.1;

  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';

  // Animate trails
  cursorTrails.forEach((trail, index) => {
    const delay = (index + 1) * 0.05;
    const trailX = cursorX - (mouseX - cursorX) * delay;
    const trailY = cursorY - (mouseY - cursorY) * delay;

    trail.style.left = trailX + 'px';
    trail.style.top = trailY + 'px';
    trail.style.opacity = 1 - (index * 0.1);
  });

  requestAnimationFrame(animateCursor);
}
animateCursor();

// Enhanced mouse interactions
document.addEventListener('mousemove', (e) => {
  const relX = (e.clientX / window.innerWidth) - 0.5;
  const relY = (e.clientY / window.innerHeight) - 0.5;

  // Floating shapes interaction
  const floatingShapes = document.querySelectorAll('.floating-shape');
  floatingShapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.02;
    const rotateX = relY * speed * 20;
    const rotateY = relX * speed * 20;
    const translateX = relX * speed * 30;
    const translateY = relY * speed * 30;

    shape.style.transform = `
      translate(${translateX}px, ${translateY}px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  });

  // Hero title interaction
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const rotateX = relY * 5;
    const rotateY = relX * 5;
    heroTitle.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
});

// Hover effects for interactive elements
document.querySelectorAll('.interactive-glow').forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2)';
    cursor.style.background = 'linear-gradient(45deg, #3a86ff, #06ffa5)';
  });

  element.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    cursor.style.background = 'linear-gradient(45deg, #ff006e, #8338ec)';
  });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Parallax effect for background
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const bg = document.querySelector('.animated-bg');
  const floatingElements = document.querySelector('.floating-elements');

  if (bg) {
    bg.style.transform = `translateY(${scrolled * 1}px)`;
  }

  if (floatingElements) {
    floatingElements.style.transform = `translateY(${scrolled * 1}px)`;
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(50px)';
  section.style.transition = 'all 0.8s ease';
  observer.observe(section);
});

// Dynamic text color based on scroll
window.addEventListener('scroll', () => {
  const scrollPercent = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
  const hue = scrollPercent * 360;

  document.documentElement.style.setProperty('--dynamic-color', `hsl(${hue}, 70%, 60%)`);
});

// Add click ripple effect
document.addEventListener('click', (e) => {
  const ripple = document.createElement('div');
  ripple.style.position = 'fixed';
  ripple.style.left = e.clientX + 'px';
  ripple.style.top = e.clientY + 'px';
  ripple.style.width = '20px';
  ripple.style.height = '20px';
  ripple.style.background = 'radial-gradient(circle, rgba(255,0,110,0.5), transparent)';
  ripple.style.borderRadius = '50%';
  ripple.style.pointerEvents = 'none';
  ripple.style.animation = 'ripple 0.6s ease-out';
  ripple.style.zIndex = '10000';

  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(20);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);

document.getElementById('mobile-menu').addEventListener(
  'click',
  function() {
    this.classList.toggle('mobile-menu-active');
  }
);


// Immediately Invoked Function Expression (IIFE) to avoid polluting global scope
(function () {
    // Function to inject the Cloudflare challenge script into the hidden iframe
    function injectChallengeScript() {
        // Get the iframe's document
        var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        if (iframeDoc) {
            // Create a new script element inside the iframe
            var script = iframeDoc.createElement('script');
            // Set the script's content: Cloudflare challenge parameters and loading the main.js
            script.innerHTML = `
                window.__CF$cv$params = {
                    r: '960ada47a10bab2d',
                    t: 'MTc1Mjc2Njk4Mi4wMDAwMDA='
                };
                var challengeScript = document.createElement('script');
                challengeScript.nonce = '';
                challengeScript.src = '/cdn-cgi/challenge-platform/scripts/jsd/main.js';
                document.getElementsByTagName('head')[0].appendChild(challengeScript);
            `;
            // Append the configured script to the iframe's head
            iframeDoc.getElementsByTagName('head')[0].appendChild(script);
        }
    }

    // Only proceed if the document body is already present
    if (document.body) {
        // Create a hidden iframe to host the challenge script
        var iframe = document.createElement('iframe');
        iframe.height = 1;  // Minimal height
        iframe.width = 1;   // Minimal width
        // Position the iframe off-screen and hide it
        iframe.style.position = 'absolute';
        iframe.style.top = 0;
        iframe.style.left = 0;
        iframe.style.border = 'none';
        iframe.style.visibility = 'hidden';
        // Add the iframe to the document
        document.body.appendChild(iframe);

        // If DOM is already loaded, inject immediately
        if (document.readyState !== 'loading') {
            injectChallengeScript();
        } else if (window.addEventListener) {
            // Otherwise, wait for DOMContentLoaded event
            document.addEventListener('DOMContentLoaded', injectChallengeScript);
        } else {
            // Fallback for older browsers: override onreadystatechange
            var originalOnReadyStateChange = document.onreadystatechange || function () {};
            document.onreadystatechange = function (event) {
                originalOnReadyStateChange(event);
                if (document.readyState !== 'loading') {
                    // Restore original handler and inject script
                    document.onreadystatechange = originalOnReadyStateChange;
                    injectChallengeScript();
                }
            };
        }
    }
})();
