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
