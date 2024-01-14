
        // document.addEventListener('DOMContentLoaded', () => {
        //     // Fetch the existing rating data from the server
        //     fetch('path-to-your-server/ratings-data.json')
        //         .then(response => response.json())
        //         .then(data => {
        //             document.getElementById('numRatings').textContent = data.numRatings;
        //             document.getElementById('averageRating').textContent = data.averageRating.toFixed(1);
        //         })
        //         .catch(error => {
        //             console.error('Error fetching ratings:', error);
        //         });

        //     const form = document.getElementById('ratingForm');
        //     form.addEventListener('submit', function(event) {
        //         event.preventDefault();
        //         const rating = document.getElementById('rating').value;

        //         // Send the new rating to the server
        //         fetch('path-to-your-server/save-rating', {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({ rating: rating })
        //         })
        //         .then(response => response.json())
        //         .then(updatedData => {
        //             document.getElementById('numRatings').textContent = updatedData.numRatings;
        //             document.getElementById('averageRating').textContent = updatedData.averageRating.toFixed(1);
        //         })
        //         .catch(error => {
        //             console.error('Error submitting rating:', error);
        //         });
        //     });
        // });