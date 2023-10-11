import React, { useState } from 'react';

const MedicineFilter = ({ onFilter }) => {
    const [medicinalUse, setMedicinalUse] = useState('');

    const handleFilter = (e) => {
        e.preventDefault();
        onFilter(medicinalUse);
    };

    return (
        <div>
            <form onSubmit={handleFilter}>
                <label>
                    Medicinal Use:
                    <input
                        type="text"
                        value={medicinalUse}
                        onChange={(e) => setMedicinalUse(e.target.value)}
                    />
                </label>
                <button type="submit">Filter Medicines</button>
            </form>
        </div>
    );
};

export default MedicineFilter;
