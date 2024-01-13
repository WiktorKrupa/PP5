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

fetch('/save-reservation', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
    // Optional: Redirect to a confirmation page or display success message
})
.catch((error) => {
    console.error('Error:', error);
});
}
