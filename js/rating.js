document.addEventListener('DOMContentLoaded', (event) => {
        const form = document.getElementById('ratingForm');
    
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission
            const rate = document.getElementById('rating').value;
            const opinion = document.getElementById('opinion').value;
            saveUserRating(rate, opinion);
        });
    });
    
    function saveUserRating(rate, opinion) {
        fetch('http://localhost:3000/save-opinion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ rate: rate, opinion: opinion })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }
    