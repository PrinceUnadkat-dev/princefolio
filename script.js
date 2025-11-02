document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const themeToggle = document.getElementById('theme-toggle');

    // Set default theme to dark and apply saved preference
    const currentTheme = localStorage.getItem('theme');
    const themeIcon = themeToggle.querySelector('i');

    const applyTheme = (theme) => {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(theme);
        if (theme === 'light-theme') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    };

    if (currentTheme) {
        applyTheme(currentTheme);
    } else {
        applyTheme('dark-theme'); // Default to dark theme
    }

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('light-theme')) {
            applyTheme('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            applyTheme('light-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    });
});