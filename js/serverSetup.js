const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Root endpoint
app.get('/', (req, res) => {
    console.log("Root path accessed");
    res.send('Welcome to the Reservation System');
    // Alternatively, use res.sendFile to send an HTML file:
    // res.sendFile(__dirname + '/path_to_your_index_html');
});

// Save reservation
app.post('/save-reservation', (req, res) => {
    const newReservation = req.body;

    fs.readFile('reservations.json', (err, data) => {
        let reservations;

        if (err || data.length === 0) {
            // If there's an error reading the file or if the file is empty,
            // initialize reservations as an empty array.
            reservations = [];
        } else {
            try {
                // Attempt to parse the file content.
                reservations = JSON.parse(data);
                if (!Array.isArray(reservations)) {
                    // If parsed data is not an array, throw an error.
                    throw new Error('Parsed data is not an array');
                }
            } catch (parseErr) {
                // If parsing fails, send an error response.
                console.error('Error parsing JSON:', parseErr);
                res.status(502).send({ message: 'Error processing data' });
                return;
            }
        }

        reservations.push(newReservation);

        fs.writeFile('reservations.json', JSON.stringify(reservations, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                res.status(501).send({ message: 'Error saving reservation' });
                return;
            }
            res.send({ message: 'Reservation saved' });
        });
    });
});


// Get reservations by email
app.get('/get-reservations', (req, res) => {
    const userEmail = req.query.email;

    fs.readFile('reservations.json', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send({ message: 'Error reading reservations' });
            return;
        }

        let reservations = [];
        try {
            reservations = JSON.parse(data);
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
            res.status(500).send({ message: 'Error processing data' });
            return;
        }

        const userReservations = reservations.filter(r => r.email === userEmail);
        res.send(userReservations);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
