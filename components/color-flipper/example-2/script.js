document.addEventListener('DOMContentLoaded', function() {
    const colorBtn = document.getElementById('colorBtn');
    const colorCode = document.getElementById('colorCode');

    colorBtn.addEventListener('click', function() {
        // Generate a random color
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        // Set the background color using a custom property
        document.documentElement.style.setProperty('--bg-color', randomColor);
        colorCode.textContent = randomColor;
    });
});
