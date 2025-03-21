/**
 * RegenAsia Hub - Main JavaScript File
 * Handles interactive elements, form validation, and dynamic content
 */

// Wait until the DOM is fully loaded before running scripts
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Scroll Header Effect
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
    
    // Mobile Dropdown Toggle
    const menuItems = document.querySelectorAll('.menu-item.has-dropdown');
    menuItems.forEach(item => {
        const link = item.querySelector('.menu-link');
        
        // For mobile view
        if (window.innerWidth < 992) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                item.classList.toggle('active');
            });
        }
    });
    
    // Keyboard Navigation Improvements
    const dropdownItems = document.querySelectorAll('.dropdown-menu a');
    
    dropdownItems.forEach(item => {
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                item.closest('.menu-item').querySelector('.menu-link').focus();
            }
        });
    });
    
    // Resize Handler
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
            mainNav.classList.remove('active');
            menuToggle.classList.remove('active');
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});
</script>

/**
 * Sticky Header
 * Makes the header stick to the top when scrolling down
 */
function initStickyHeader() {
    const header = document.querySelector('.main-header');
    const scrollThreshold = 100;
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
    }
}

/**
 * Form Validation
 * Validates contact forms and newsletter subscriptions
 */
function initFormValidation() {
    // Contact form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Simple validation
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Email validation
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value.trim())) {
                    isValid = false;
                    emailField.classList.add('error');
                }
            }
            
            if (isValid) {
                // For demonstration purposes, show success message
                // In a real implementation, you would send the form data to a server
                const formContainer = contactForm.closest('.contact-form-container');
                if (formContainer) {
                    formContainer.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i><h3>Message Sent!</h3><p>Thank you for reaching out. We\'ll get back to you soon.</p></div>';
                }
            }
        });
    }
    
    // Newsletter subscription form validation
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && emailInput.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailPattern.test(emailInput.value.trim())) {
                    // Success - could send to server here
                    emailInput.value = '';
                    showToast('Thank you for subscribing!');
                } else {
                    emailInput.classList.add('error');
                }
            } else if (emailInput) {
                emailInput.classList.add('error');
            }
        });
    });
}

/**
 * Project Filters
 * Handles filtering on the fundraising project showcase
 */
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length && projectCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
}

/**
 * Carousels
 * Initializes and handles carousel/slider functionality
 */
function initCarousels() {
    // Testimonials carousel
    initTestimonialsCarousel();
    
    // Impact stories carousel
    initImpactStoriesCarousel();
}

/**
 * Testimonials Carousel
 * Simple testimonial rotation
 */
function initTestimonialsCarousel() {
    const carousel = document.querySelector('.testimonials-carousel');
    if (!carousel) return;
    
    const testimonials = carousel.querySelectorAll('.testimonial');
    if (testimonials.length <= 1) return;
    
    let currentIndex = 0;
    
    // Hide all except first
    testimonials.forEach((testimonial, index) => {
        if (index !== 0) {
            testimonial.style.display = 'none';
        }
    });
    
    // Auto-rotate every 5 seconds
    setInterval(() => {
        testimonials[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].style.display = '';
    }, 5000);
}

/**
 * Impact Stories Carousel
 * Handles the impact stories carousel with navigation
 */
function initImpactStoriesCarousel() {
    const carousel = document.querySelector('.story-carousel');
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.story-slide');
    if (slides.length <= 1) return;
    
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const dots = document.querySelectorAll('.dot');
    
    let currentIndex = 0;
    
    // Hide all except first
    slides.forEach((slide, index) => {
        if (index !== 0) {
            slide.style.display = 'none';
        }
    });
    
    // Previous button
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            slides[currentIndex].style.display = 'none';
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            slides[currentIndex].style.display = '';
            updateDots();
        });
    }
    
    // Next button
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            slides[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].style.display = '';
            updateDots();
        });
    }
    
    // Dot navigation
    if (dots.length) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (index !== currentIndex) {
                    slides[currentIndex].style.display = 'none';
                    currentIndex = index;
                    slides[currentIndex].style.display = '';
                    updateDots();
                }
            });
        });
    }
    
    // Update active dot
    function updateDots() {
        if (dots.length) {
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
    }
}

/**
 * Search Filters
 * Handles search and filter functionality
 */
function initSearchFilters() {
    // Knowledge repository search
    const knowledgeSearch = document.querySelector('.knowledge-page .search-box');
    if (knowledgeSearch) {
        const searchInput = knowledgeSearch.querySelector('input');
        const searchButton = knowledgeSearch.querySelector('button');
        
        if (searchInput && searchButton) {
            searchButton.addEventListener('click', function() {
                performSearch(searchInput.value);
            });
            
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    performSearch(searchInput.value);
                }
            });
        }
    }
    
    // Filter dropdowns
    const filterDropdowns = document.querySelectorAll('select[id^="resource-type"], select[id^="region"], select[id^="topic"], select[id^="language"]');
    filterDropdowns.forEach(dropdown => {
        dropdown.addEventListener('change', function() {
            // In a real implementation, this would filter content based on selection
            console.log(`Filter changed: ${dropdown.id} = ${dropdown.value}`);
            
            // For demo purposes, simulate filtering with a toast message
            showToast(`Filtering by ${dropdown.options[dropdown.selectedIndex].text}`);
        });
    });
}

/**
 * Perform Search
 * Placeholder for search functionality
 * @param {string} query - The search query
 */
function performSearch(query) {
    // In a real implementation, this would search content based on query
    console.log(`Searching for: ${query}`);
    
    // For demo purposes, show a toast message
    if (query.trim()) {
        showToast(`Searching for "${query}"`);
    }
}

/**
 * Show Toast Message
 * Displays a temporary notification
 * @param {string} message - The message to display
 * @param {number} duration - How long to show the toast (ms)
 */
function showToast(message, duration = 3000) {
    // Create toast element if it doesn't exist
    let toast = document.querySelector('.toast-message');
    
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast-message';
        document.body.appendChild(toast);
        
        // Add styles if not in CSS
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.right = '20px';
        toast.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        toast.style.color = 'white';
        toast.style.padding = '10px 20px';
        toast.style.borderRadius = '4px';
        toast.style.zIndex = '9999';
        toast.style.transition = 'opacity 0.3s ease-in-out';
    }
    
    toast.textContent = message;
    toast.style.opacity = '1';
    
    // Clear any existing timeout
    if (toast.timeoutId) {
        clearTimeout(toast.timeoutId);
    }
    
    // Set timeout to hide toast
    toast.timeoutId = setTimeout(() => {
        toast.style.opacity = '0';
    }, duration);
}

/**
 * Smooth Scroll
 * Enables smooth scrolling to anchors
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // Skip if it's just "#" or empty
        if (targetId === '#' || !targetId.substring(1)) return;
        
        const targetElement = document.getElementById(targetId.substring(1));
        
        if (targetElement) {
            e.preventDefault();
            
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for header
                behavior: 'smooth'
            });
        }
    });
});
