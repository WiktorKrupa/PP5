document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('emailToCheck');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        const email = document.getElementById('email').value;
        getUserReservations(email);
    });
});

function getUserReservations(email) {
    fetch(`http://localhost:3000/get-reservations?email=${email}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(reservations => {
            localStorage.setItem('reservations', JSON.stringify(reservations));
            window.location.href = '../userReservations.html'; // Redirect to the new page
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}