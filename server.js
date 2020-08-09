const express = require('express');
const db = require('./db');

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/testimonials', testimonialsRoutes);
app.use('/concerts', concertsRoutes);
app.use('/seats', seatsRoutes);

app.use((req, res) => {
  res.json({ message: 'Not found...' });
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});