import React, { useState, useEffect } from 'react';

function Filter() {
    console.log('Hiii')
  const [medicines, setMedicines] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [medicinalUse, setMedicinalUse] = useState('');

  // Fetch all medicines
  const fetchMedicines = async () => {
    try {
      const response = await fetch('/api/routers/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMedicines(data);

      console.log('Fetched Medicines:', data)
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  };

  // Filter medicines based on medicinal use
  const filterMedicines = async () => {
    try {
      const response = await fetch(`/api/routers/filterMedicine?medicinalUse=${medicinalUse}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data)
      setFilteredMedicines(data);
    } catch (error) {
      console.error('Error filtering medicines:', error);
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []); // Fetch medicines when the component mounts

  return (
    <div>
      <h1>Medicine App</h1>
      <input
        type="text"
        placeholder="Medicinal Use"
        value={medicinalUse}
        onChange={(e) => setMedicinalUse(e.target.value)}
      />
      <button onClick={filterMedicines}>Filter Medicines</button>
      <ul>
        {filteredMedicines.length > 0
          ? filteredMedicines.map((medicine) => (
              <li key={medicine._id}>
                {medicine.name} - {medicine.manufacturer} - {medicine.dosage} - {medicine.medicinalUse}
              </li>
            ))
          : medicines.map((medicine) => (
              <li key={medicine._id}>
                {medicine.name} - {medicine.manufacturer} - {medicine.dosage} - {medicine.medicinalUse}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default Filter;
