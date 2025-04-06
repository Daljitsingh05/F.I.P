document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const mixButtons = document.querySelectorAll('.mix-btn');
    const mixResult = document.getElementById('mix-result');
    if (mixButtons && mixResult) {
        let flavors = [];
        mixButtons.forEach(button => {
            button.addEventListener('click', () => {
                const flavor = button.getAttribute('data-flavor');
                if (!flavors.includes(flavor)) {
                    flavors.push(flavor);
                    mixResult.textContent = `Your Cosmic Mix: ${flavors.join(' + ')}`;
                }
            });
        });
    }
});