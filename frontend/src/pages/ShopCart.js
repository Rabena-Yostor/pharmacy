import React, { useState, useEffect } from 'react';
import CartIcon from '../components/CartIcon';

function Store() {
  const [medicines, setMedicines] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [walletBalance, setWalletBalance] = useState(0);

  useEffect(() => {
    // Fetch medicine details when the component mounts
    fetchMedicines();
    fetchWalletBalance();
  }, []);
  const fetchWalletBalance = async () => {
    try {
      // Replace 'username' with the actual username or get it dynamically
      const username = 'yasser.aly';
      const response = await fetch(`http://localhost:4000/api/medicine/getWallet/${username}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Entire Response:', data);  // Log the entire response
      setWalletBalance(data.wallet);

    } catch (error) {
      console.error('Error fetching wallet balance:', error);
    }
  };
  const fetchMedicines = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/medicine/getAllMedicines');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMedicines(data);

      console.log('Fetched Medicines:', data);
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  };

  const addToCart = async (medicineName) => {
    try {
      const UserName = 'yasser.aly'; // Replace with the actual username or get it dynamically
      const response = await fetch(`http://localhost:4000/api/medicine/addMedicineToCart/${UserName}/${medicineName}`, {
        method: 'POST',
      });

      if (!response.ok) {
        const data = await response.json();
        setErrorMessage(data.message); // Display the error message on the frontend
        setSuccessMessage(''); // Clear any existing success message
        return;
      }
      if(response.ok){
      const data = await response.json();
      console.log('Added to Cart:', data);
      setErrorMessage(''); // Clear any existing error message
      setSuccessMessage('Medicine added to cart successfully');
      
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      }
    } catch (error) {
      console.error('Error adding medicine to cart:', error);
      setErrorMessage('Something went wrong. Please try again.'); // Display a generic error message
      setSuccessMessage(''); // Clear any existing success message
    }
  };

  return (
    <div>
      <h1>Medicine Store</h1>
      <p style={{ position: 'absolute', top: 22, right: 200 }}>Wallet Balance: {walletBalance} EGP</p>

      <CartIcon />
      <ul>
        {medicines.map((medicine) => (
          <li key={medicine._id}>
            {medicine.name} - {medicine.manufacturer} - {medicine.dosage} - {medicine.medicinalUse} - {medicine.price} EGP
            <button onClick={() => addToCart(medicine.name)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
}

export default Store;
