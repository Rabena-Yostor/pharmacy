import React, { useState, useEffect } from 'react';

export default function ViewSalesReport() {
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [years, setYears] = useState([]);
    const [data, setData] = useState(null);

    useEffect(() => {
        // Dynamically generate a list of years, you can adjust the range as needed
        const currentYear = new Date().getFullYear();
        const yearRange = Array.from({ length: 10 }, (_, index) => currentYear - index);
        setYears(yearRange);
    }, []);

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };
    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            // Validate that both month and year are selected
            if (!selectedMonth || !selectedYear) {
                console.error('Please select both month and year.');
                return;
            }

            // Make an API call to fetch sales data for the selected month and year
            const response = await fetch(`http://localhost:4000/api/medicine/salesReport/${selectedYear}/${selectedMonth}`);
            const data = await response.json();
            setData(data);


            if (response.ok) {
                // Handle the fetched data, e.g., update state or display the information
                console.log('Sales Report Data:', data);
            } else {
                console.error('Failed to fetch sales report:', data.error);
            }
        } catch (error) {
            console.error('Error fetching sales report:', error);
        }
    };

    return (
        <div>
            <h1>View Sales Report</h1>
            <label>Select Month: </label>
            <select value={selectedMonth} onChange={handleMonthChange}>
                <option value="">-- Select Month --</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">Septemper</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">Decemeber</option>
                
            </select>
            <br />
            <label>Select Year: </label>
            <select value={selectedYear} onChange={handleYearChange}>
                <option value="">-- Select Year --</option>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <div className="requests">
                {data && data.map((request) => (
                        <div key={request._id}>
                        <p>Medicine Name: {request.yearx    }, Quantity: {request.quantity}</p>
                    </div>
                    ))} 
            </div>
            
        </div>
        

    );
}
