function handleFormSubmit(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        adults: document.getElementById('adults').value,
        children: document.getElementById('children').value,
        specialRequests: document.getElementById('specialRequests').value,
        pets: document.getElementById('pets').checked
    };

    console.log("Form Data Submitted:", formData);

    fetch('http://localhost:3000/save-reservation', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        localStorage.setItem('recentReservation', JSON.stringify(FormData)); // Store the reservation data
        window.location.href = '../confirmation.html'; // Redirect to the confirmation page
    })
    .catch((error) => {
        console.error('Error :', error);
});

}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
    form.addEventListener('submit', handleFormSubmit);
});