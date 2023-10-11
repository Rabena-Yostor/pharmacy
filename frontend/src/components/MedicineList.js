import React, { useEffect, useState } from 'react';

// const medicineDetails = ({medicine}) => {
//     return (
//         <div className = "medicine-details">
//             <h4>
//                 {medicine.name}
//             </h4>
//             <p><strong>Manufacturer:</strong>{medicine.manufacturer}</p>
//         </div>
//     )
// }   

const MedicineList = () => {
    const [medicines, setMedicines] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch medicines from your backend API and set the state
        fetch('/api/routers/') // Replace with the actual endpoint of your backend API
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setMedicines(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>Medicine List</h1>
            {loading ? (
                <p>Loading medicines...</p>
            ) : (
                <ul>
                    {medicines.map((medicine) => (
                        <li key={medicine._id}>
                            <strong>Name:</strong> {medicine.name}<br />
                            <strong>Manufacturer:</strong> {medicine.manufacturer}<br />
                            <strong>Dosage:</strong> {medicine.dosage}<br />
                            <strong>Medicinal Use:</strong> {medicine.medicinalUse}<br />
                            <hr />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MedicineList