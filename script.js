// Add your JavaScript here

// Event listener for the signup form
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for signing up with ${email}!`);
});

// Dark mode toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const currentMode = document.body.classList.contains('dark-mode') ? 'Dark' : 'Light';
    localStorage.setItem('theme', currentMode);
};

// Check saved theme in local storage
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'Dark') {
        document.body.classList.add('dark-mode');
    }
};

// Add a button to toggle dark mode
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Toggle Dark Mode';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.top = '10px';
darkModeToggle.style.right = '10px';
darkModeToggle.style.padding = '5px';
darkModeToggle.style.border = 'none';
darkModeToggle.style.borderRadius = '5px';
darkModeToggle.style.cursor = 'pointer';
darkModeToggle.style.backgroundColor = '#0070f3';
darkModeToggle.style.color = 'white';

darkModeToggle.addEventListener('click', toggleDarkMode);
document.body.appendChild(darkModeToggle);
document.getElementById('get-started').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    const ctaSection = document.querySelector('.cta'); // Select the CTA section
    ctaSection.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the section
});