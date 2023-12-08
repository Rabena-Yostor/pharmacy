// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('pharmacist'); // Default to pharmacist


    const handleLogin = async (e) => {
        e.preventDefault();

        try {

            if (userType === 'pharmacist') {
                var response = await fetch('/api/medicine/Pharmacist/Login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ UserName: username, Password: password }),
                });
            } else if (userType === 'admin') {
                var response = await fetch('/api/medicine/admin/Login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ AdminUserName: username, AdminPassword: password }),
                });
            }else{
                var response = await fetch('/api/medicine/Patient/Login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ UserName: username, Password: password }),
                });
            }
            const data = await response.json();

            if (response.status === 200) {
                
                  localStorage.setItem('userType', userType);
                  localStorage.setItem('username', username);
                  localStorage.setItem('password', password);
                  switch (userType) {
                    case 'pharmacist':
                        navigate('/pharmacist');
                        break;
                    case 'admin':
                        navigate('/admin');
                        break;
                    default:
                        navigate('/patient');
                        break;
                }
                
            } else {
                console.error(data.error);
            }
        } catch (error) {
            console.error(error.message);
        }
    };
    const handleResetPassword = () => {
        // Navigate to the reset-password path
        navigate('/reset-password');
      };


        const handleRegisterAsPharmacist = () => {
            // Navigate to the reset-password path
            navigate('/hazem1');
        }
        const handleRegisterAsPatient = () => {
            // Navigate to the reset-password path
            navigate('/hazem3');
        }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>
                    User Type:
                    <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                        <option value="pharmacist">Pharmacist</option>
                        <option value="admin">Admin</option>
                        <option value="Patient">Patient</option> 
                    </select>
                </label>
                <br />
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit">Login</button>
                
            </form>
            <button onClick={handleResetPassword}>Reset Password</button>
            <button onClick={handleRegisterAsPharmacist}>Register as Pharmacist</button>
            <button onClick={handleRegisterAsPatient}>Register as Patient</button>
        </div>
    );
};

export default Login;

