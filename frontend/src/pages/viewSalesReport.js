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
                console.log(new Date().getMonth()+1);
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
                <option value="0">January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
                <option value="4">May</option>
                <option value="5">June</option>
                <option value="6">July</option>
                <option value="7">August</option>
                <option value="8">Septemper</option>
                <option value="9">October</option>
                <option value="10">November</option>
                <option value="11">Decemeber</option>
                
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
                    request.map((request1) => (
                        request1.items.map((request2) => (
                        <div key={request2._id}>
                        <p>{request1.notes}</p>
                        <p>Medicine Name: {request2.medicine}, Quantity: {request2.quantity}</p>
                    </div>
                    ))))))} 
            </div>
            
        </div>
        

    );
}
