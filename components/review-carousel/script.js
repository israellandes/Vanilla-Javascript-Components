document.addEventListener('DOMContentLoaded', () => {
    displayRandomReview();
});

const reviews = [
    { name: "Alice", review: "Great product, highly recommend!", rating: 5 },
    { name: "Bob", review: "I love it. Fast shipping too!", rating: 4 },
    // Add more reviews as needed
];

function displayRandomReview() {
    const index = Math.floor(Math.random() * reviews.length); // Select a random review
    const review = reviews[index];
    document.getElementById('review-text').textContent = `"${review.review}" - ${review.name}, Rating: ${review.rating}/5`;
}

document.getElementById('new-review-btn').addEventListener('click', displayRandomReview);
