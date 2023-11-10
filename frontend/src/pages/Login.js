// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/medicine/login', { username, password });
      const token = response.data.token;

      // Assuming your backend sends a token upon successful login
      console.log('Login successful! Token:', token);

     
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error.message);
      setError('Invalid username or password');
    }
     // Navigate to Landing.js after successful login
      navigate('/landing');
  };

  // Function to handle navigation to the ChangePassword page
  const handleChangePassword = () => {
    navigate('/change-password');
  };

  // Function to handle navigation to the ResetPassword page
  const handleResetPassword = () => {
    navigate('/reset-password');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Change Password Button */}
      <button onClick={handleChangePassword}>Change Password</button>

      {/* Reset Password Button */}
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default Login;
