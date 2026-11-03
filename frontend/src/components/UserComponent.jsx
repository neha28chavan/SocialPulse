import React, { useEffect, useState } from 'react';
import API from '../services/api'; 

function UserComponent() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        API.get('/api/users/data')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, []);

    return (
        <div style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <h3 style={{ marginTop: 0 }}>User Profile</h3>
            {users.length === 0 ? (
                <p>Loading user data...</p>
            ) : (
                Array.isArray(users) ? (
                    users.map((u) => (
                        <div key={u.id}>
                            <p><strong>Username:</strong> {u.username}</p>
                            <p><strong>Email:</strong> {u.email}</p>
                        </div>
                    ))
                ) : (
                    <div>
                        <p><strong>Username:</strong> {users.username}</p>
                        <p><strong>Email:</strong> {users.email}</p>
                    </div>
                )
            )}
        </div>
    );
}

export default UserComponent;