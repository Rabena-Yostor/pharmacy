import React from 'react';

const FilteredMedicineList = ({ medicines }) => {
    return (
        <div>
            <h2>Filtered Medicines</h2>
            <ul>
                {medicines.map((medicine) => (
                    <li key={medicine._id}>
                        {medicine.name} - {medicine.manufacturer} - {medicine.dosage} - {medicine.medicinalUse}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilteredMedicineList;
