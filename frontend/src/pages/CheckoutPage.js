// CheckoutPage.js

import React, { useEffect, useState } from 'react';

function CheckoutPage() {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [editedQuantity, setEditedQuantity] = useState('');
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [showAddressSelect, setShowAddressSelect] = useState(false);

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const username = 'yasser.aly';
                const response = await fetch(`http://localhost:4000/api/medicine/getCartItems/${username}`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setCartItems(data.cartItems);

                setTotalAmount(data.totalAmount);
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };
        fetchCartData();
    }, []);

    const fetchAddresses = async () => {
        try {
            const username = 'yasser.aly'; // Replace with the actual username or get it dynamically
            const response = await fetch(`http://localhost:4000/api/medicine/getAddresses/${username}`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setAddresses(data.addresses);
            return data.addresses; // Return the fetched addresses
        } catch (error) {
            console.error('Error fetching addresses:', error);
        }
    };

    useEffect(() => {
        // Fetch addresses when the component mounts
        fetchAddresses();
    }, []);

    const handleShowAddress = () => {
        setShowAddressForm((prevShowAddressForm) => !prevShowAddressForm);
    };
    const handleAddAddress = async () => {
        try {
            const username = 'yasser.aly'; // Replace with the actual username or get it dynamically

            const response = await fetch(`http://localhost:4000/api/medicine/addAddress/${username}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    street,
                    city,
                    state,
                    zipCode,
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                setErrorMessage(data.message);
                setSuccessMessage('');
                return;
            }

            const data = await response.json();
            setSuccessMessage(data.message);
            setErrorMessage('');

            setStreet('');
            setCity('');
            setState('');
            setZipCode('')
            const updatedAddresses = await fetchAddresses();
            setAddresses(updatedAddresses);
        } catch (error) {
            console.error('Error adding address:', error);
            setErrorMessage('Something went wrong. Please try again.');
            setSuccessMessage('');
        }
    }
    const handleShowAddressSelect = () => {
        setShowAddressSelect((prevShowAddressSelect) => !prevShowAddressSelect);
    };

    const handleChooseAddress = (address) => {
        setSelectedAddress(address);
      };

    return (
        <div>
            <h2>Checkout</h2>
            <h3>Cart Items:</h3>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.medicine._id}>
                        {item.medicine} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
            <p>Total Amount: {totalAmount} EGP</p>
            {/* Button to toggle the address form visibility */}
            <button type="button" onClick={handleShowAddress} style={{ marginBottom: '10px' }}>
                {showAddressForm ? 'Hide Address Form' : 'Add Address'}
            </button>

            {showAddressForm && (
                <div>
                    <h3>Add a New Address</h3>
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}


                    <form style={{ marginTop: '10px' }}>
                        <label>
                            Street:
                            <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} style={{ marginLeft: '5px' }} />
                        </label>
                        <br />
                        <label>
                            City:
                            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} style={{ marginLeft: '5px' }} />
                        </label>
                        <br />
                        <label>
                            State:
                            <input type="text" value={state} onChange={(e) => setState(e.target.value)} style={{ marginLeft: '5px' }} />
                        </label>
                        <br />
                        <label>
                            Zip Code:
                            <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} style={{ marginLeft: '5px' }} />
                        </label>
                        <br />
                        <button type="button" onClick={handleAddAddress} style={{ marginTop: '-5px' }}>
                            Save Address
                        </button>
                    </form>



                   

                </div>)}
            {/* Button to choose address for shipping */}
            <button type="button" onClick={handleShowAddressSelect} style={{ marginLeft: '50px' }}>
            {showAddressSelect ? 'Hide Choose Address' : 'Choose Address for Shipping'}
        </button>
        {showAddressSelect && (
            <div>
                <h3>Available Addresses:</h3>
                <ul>
                    {addresses.map((address) => (
                        <li key={address.street}>
                            {address.street}, {address.city}, {address.state}, {address.zipCode}
                            <button type="button" onClick={() => handleChooseAddress(address)}>
                                Choose
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        )}

        </div>
    );


}


export default CheckoutPage;