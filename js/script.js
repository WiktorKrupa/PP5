
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

    fetch('http://localhost:3000/save-reservation', { // Use the correct server URL
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
        // Optional: Redirect to a confirmation page or display success message
    })
    .catch((error) => {
        console.error('Error:', error);
});

}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
    form.addEventListener('submit', handleFormSubmit);
});


