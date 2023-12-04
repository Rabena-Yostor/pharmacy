// NotificationsPage.js

import React, { useEffect, useState } from 'react';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = localStorage.getItem('username');

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('api/medicine/getAllNotifications', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username }),
        });

        if (response.ok) {
          const data = await response.json();
          setNotifications(data.notifications);
        } else {
          console.error('Error:', response.statusText);
          // Handle the error, show an error message on the page, etc.
        }
      } catch (error) {
        console.error('Error:', error.message);
        // Handle network errors or other exceptions
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div>
      <h1>Notifications</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {notifications.map((notification) => (
            <div key={notification._id} style={notificationContainerStyle}>
              <p>Notification : {notification.message}</p>
              <p>Created At : {notification.timestamp}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const notificationContainerStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  backgroundColor: 'beige',
};

export default NotificationsPage;
