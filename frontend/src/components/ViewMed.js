import React, { useState } from 'react';

import { viewMedicineDetails } from 'controller/pharma';
const [medicineData, setMedicineData] = useState([]);
const fetchMedicineData = async () => {
    try {
      const response = await fetch('http://your-server-url/med/show');
      const data = await response.json();

      setMedicineData(data);
    } catch (error) {
      console.error('Error fetching medicine data:', error);
    }
 

  return (
    <div>
      <h2>Medicine Information</h2>
      <button onClick={fetchMedicineData}>Fetch Medicine Data</button>

      {medicineData.length > 0 && (  // Ensure medicineData is not empty before rendering
        <ul>
          {medicineData.map((medicine, index) => (
            <li key={index}>
              <p>Price: {medicine.price}</p>
              <p>Description: {medicine.description}</p>
              <img src={medicine.imageUrl} alt={`Medicine ${index}`} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default fetchMedicineData;