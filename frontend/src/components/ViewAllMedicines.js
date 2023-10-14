import React, { useState, useEffect } from 'react';

function ViewAllMedicines() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    // Fetch medicines data when the component mounts
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/routers/get'); // Replace with your backend API endpoint
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setMedicines(data);
      } else {
        console.error('Failed to fetch medicines.');
      }
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  };

  return (
    <div>
      <h1>View All Medicines</h1>
      <ul>
        {medicines.map((medicine) => (
          <li key={medicine._id}>
            <p>Name: {medicine.name}</p>
            <p>Manufacturer: {medicine.manufacturer}</p>
            <p>Medicinal Use: {medicine.medicinalUse}</p>
            <p>Dosage: {medicine.dosage}</p>
            <p>Price: {medicine.price}</p>
            <p>Quantity: {medicine.quantity}</p>
            <p>Prescription Required: {medicine.prescriptionRequired ? 'Yes' : 'No'}</p>
            <p>Created At: {new Date(medicine.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default ViewAllMedicines;
