const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/hospital', { useNewUrlParser: true, useUnifiedTopology: true });

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String
});

const Patient = mongoose.model('Patient', patientSchema);

const bedSchema = new mongoose.Schema({
  bedNo: Number
});

const Bed = mongoose.model('Bed', bedSchema);

app.use(bodyParser.json());

app.get('/patients', async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

app.get('/beds', async (req, res) => {
  const beds = await Bed.find();
  res.json(beds);
});

app.get('/available-beds', async (req, res) => {
  const availableBeds = await Bed.countDocuments({ availability: true });
  res.json(availableBeds);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});