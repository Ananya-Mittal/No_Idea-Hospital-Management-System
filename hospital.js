const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hospital', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the schema for the patients collection
const patientSchema = new mongoose.Schema({
  name: String,
  number: String,
  dob: String,
  city: String,
  roomNo: Number
});

// Create a model for the patients collection
const Patient = mongoose.model('Patient', patientSchema);

// Define the schema for the beds collection
const bedSchema = new mongoose.Schema({
  bedNo: Number,
  availability: Boolean
});

// Create a model for the beds collection
const Bed = mongoose.model('Bed', bedSchema);

// Function to predict the availability of beds
async function predictBedAvailability() {
  const totalBeds = await Bed.countDocuments();
  const occupiedBeds = await Bed.countDocuments({ availability: false });
  const availableBeds = totalBeds - occupiedBeds;
  return availableBeds;
}

// API endpoint to get the availability of beds
app.get('/beds/availability', async (req, res) => {
  const availableBeds = await predictBedAvailability();
  res.json({ availableBeds });
});

// API endpoint to add a new patient
app.post('/patients', async (req, res) => {
  const { name, number, dob, city } = req.body;
  const patient = new Patient({ name, number, dob, city });
  await patient.save();
  res.json({ message: 'Patient added successfully' });
});

// API endpoint to discharge a patient
app.post('/patients/discharge', async (req, res) => {
  const { name } = req.body;
  await Patient.findOneAndRemove({ name });
  res.json({ message: 'Patient discharged successfully' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});