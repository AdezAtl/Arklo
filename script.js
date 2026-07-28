
// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});