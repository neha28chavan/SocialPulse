import React from 'react';

function Profile() {
    return (
        <div style={{ maxWidth: '650px', margin: '20px auto', padding: '20px', fontFamily: 'Arial' }}>
            <div style={{ 
                background: '#fff', 
                padding: '30px', 
                borderRadius: '8px', 
                border: '1px solid #ddd', 
                textAlign: 'center',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
                <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    background: '#007bff', 
                    color: '#fff', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: '32px', 
                    margin: '0 auto 15px auto', 
                    fontWeight: 'bold' 
                }}>
                    U
                </div>
                <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>Neha Jadhao</h2>
                <p style={{ color: '#666', margin: '5px 0' }}>Username: nehaja123</p>
                <p style={{ color: '#666', margin: '5px 0' }}>Email: jadhao@gmail.com</p>
            </div>
        </div>
    );
}

export default Profile;