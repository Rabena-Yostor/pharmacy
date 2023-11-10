// ChangePassword.js
import React, { useState } from 'react';

const ChangePassword = () => {
    const [username, setUsername] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');

    const handleChangePassword = async (e) => {
        e.preventDefault();

        setError('Password change Successfuly.');

    };

    return (
        <div>
            <h2>Change Password</h2>
            <form onSubmit={handleChangePassword}>
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
                    Current Password:
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
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
                <button type="submit">Change Password</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ChangePassword;
