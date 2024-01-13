const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/save-reservation', (req, res) => {
    const newReservation = req.body;

    // Read and update the reservations file
    fs.readFile('reservations.json', (err, data) => {
        let reservations = [];
        if (!err) {
            reservations = JSON.parse(data);
        }

        reservations.push(newReservation);

        fs.writeFile('reservations.json', JSON.stringify(reservations, null, 2), (err) => {
            if (err) {
                res.status(500).send({ message: 'Error saving reservation' });
                return;
            }
            res.send({ message: 'Reservation saved' });
        });
    });
});

app.get('/get-reservations', (req, res) => {
    const userEmail = req.query.email;

    // Read the reservations file and filter for the user's reservations
    fs.readFile('reservations.json', (err, data) => {
        if (err) {
            res.status(500).send({ message: 'Error reading reservations' });
            return;
        }

        const reservations = JSON.parse(data);
        const userReservations = reservations.filter(r => r.email === userEmail);
        res.send(userReservations);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
