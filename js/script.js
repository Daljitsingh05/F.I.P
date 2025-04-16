const burgerMenu = document.querySelector('#burger-menu');
const navLinks = document.querySelector('#nav-links');

burgerMenu?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
});

const mixButtons = document.querySelectorAll('.mix-btn');
const mixResult = document.querySelector('#mix-result');

if (mixButtons.length && mixResult) {
    let flavors = [];
    mixButtons.forEach(button => {
        button.addEventListener('click', () => {
            const flavor = button.dataset.flavor;
            if (!flavors.includes(flavor)) {
                flavors.push(flavor);
                mixResult.textContent = `Your Cosmic Mix: ${flavors.join(' + ')}`;
            }
        });
    });
}
