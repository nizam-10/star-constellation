document.addEventListener('DOMContentLoaded', () => {
    const constellation = document.querySelector('.constellation');

    // Create stars dynamically
    const numberOfStars = 2500; // Increase the number of stars
    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');

        // Set random position
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;

        // Set random size
        const size = Math.random() * 0.1 + 0.02; // Adjust the range for smaller stars
        star.style.width = `${size}em`;
        star.style.height = `${size}em`;

        constellation.appendChild(star);
    }

    // Create and append the text element
    const textElement = document.createElement('div');
    textElement.classList.add('text');
    textElement.textContent = 'Hey, cat!';
    constellation.appendChild(textElement);

    // Create and append the additional text at the right bottom
    const additionalText = document.createElement('div');
    additionalText.classList.add('additional-text');
    additionalText.textContent = 'By, Mr Engineer';
    document.body.appendChild(additionalText);
});
