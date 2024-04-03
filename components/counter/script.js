document.addEventListener('DOMContentLoaded', () => {
    const countDisplay = document.querySelector('#count');
    let count = 0;

    // Function to update the count display
    function updateDisplay() {
        countDisplay.textContent = count;
    }

    // Function to handle button clicks
    function handleButtonClick(event) {
        const action = event.currentTarget.getAttribute('data-action');

        switch (action) {
            case 'increment':
                count++;
                break;
            case 'decrement':
                count--;
                break;
            case 'reset':
                count = 0;
                break;
            default:
                console.error('Unknown action:', action);
        }

        updateDisplay();
    }

    // Add event listeners to all buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    // Initialize the display
    updateDisplay();
});

