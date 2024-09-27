import React, { useState, useEffect } from 'react';
import PatientCard from './PatientCard';

function App() {
  const [patients, setPatients] = useState([]);
  const [beds, setBeds] = useState([]);
  const [availableBeds, setAvailableBeds] = useState(0);

  useEffect(() => {
    fetch('/patients')
      .then(response => response.json())
      .then(data => setPatients(data));

    fetch('/beds')
      .then(response => response.json())
      .then(data => setBeds(data));

    fetch('/available-beds')
      .then(response => response.json())
      .then(data => setAvailableBeds(data));
  }, []);

  const handleEdit = (patient) => {
    // Handle edit patient logic
  };

  const handleDelete = (id) => {
    // Handle delete patient logic
  };

  return (
    <div>
      <h1>Hospital Management System</h1>
      <h2>Patients</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient._id}>
            <PatientCard patient={patient} onEdit={handleEdit} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
      <h2>Beds</h2>
      <ul>
        {beds.map((bed) => (
          <li key={bed._id}>{bed.bedNo}</li>
        ))}
      </ul>
      <h2>Available Beds</h2>
      <p>{availableBeds}</p>
    </div>
  );
}

export default App;