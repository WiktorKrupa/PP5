function getUserReservations(email) {
    fetch(`/get-reservations?email=${email}`)
        .then(response => response.json())
        .then(reservations => {
            console.log('User Reservations:', reservations);
            // Here, you can update the DOM to display the reservations
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
