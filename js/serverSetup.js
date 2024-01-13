const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Reservation System');
    // Or use res.sendFile to send an HTML file
});
app.use(express.json());

app.post('/save-reservation', (req, res) => {
    const newReservation = req.body;

    // Read existing reservations
    fs.readFile('reservations.json', (err, data) => {
        if (err && err.code === 'ENOENT') {
            // First reservation
            return fs.writeFile('reservations.json', JSON.stringify([newReservation]), (err) => {
                if (err) throw err;
                console.log('Reservation saved!');
                res.send({ message: 'Reservation saved' });
            });
        } else if (err) {
            throw err;
        }

        // Add new reservation
        let reservations = JSON.parse(data);
        reservations.push(newReservation);
        fs.writeFile('reservations.json', JSON.stringify(reservations), (err) => {
            if (err) throw err;
            console.log('Reservation saved!');
            res.send({ message: 'Reservation saved' });
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
