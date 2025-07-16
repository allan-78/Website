// General JavaScript for the website

document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');

    // Function to create twinkling stars
    function createStars() {
        const starsContainer = document.createElement('div');
        starsContainer.classList.add('stars');
        document.body.prepend(starsContainer);

        const numberOfStars = 100; // Adjust as needed
        for (let i = 0; i < numberOfStars; i++) {
            let star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.width = `${Math.random() * 3 + 1}px`; // 1-4px
            star.style.height = star.style.width;
            star.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2-5s
            star.style.animationDelay = `${Math.random() * 2}s`; // 0-2s
            starsContainer.appendChild(star);
        }
    }

    createStars();
});