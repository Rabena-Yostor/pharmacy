// ResetPassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const handleSendOtp = async (e) => {
        e.preventDefault();

        try {
            // Make a request to the backend to send OTP to the provided email
            const response = await fetch('/api/medicine/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email }),
            });



            // Update state to indicate that OTP has been sent
            setOtpSent(true);
            alert('Successfully sent OTP');
        } catch (error) {
            throw new Error('Successfully sent OTP');

        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();

        try {
            // Make a request to the backend to reset the password with the provided OTP
            const response = await fetch('/api/medicine/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, otp, newPassword }),
            });

            

            // Handle successful password reset
            console.log('Password reset successfully');
            alert('Password reset successfully');
            navigate('/');
        } catch (error) {
            throw new Error('Password reset successfully');
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>

            {otpSent ? (
                <form onSubmit={handleResetPassword}>
                    <label>
                        OTP:
                        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        New Password:
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type="submit">Reset Password</button>
                </form>
            ) : (
                <form onSubmit={handleSendOtp}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <br />
                    <button type="submit">Send OTP</button>
                </form>
            )}

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ResetPassword;
