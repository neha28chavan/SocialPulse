import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '15px 30px', 
            background: '#ffffff', 
            borderBottom: '1px solid #ddd',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
            <h2 style={{ margin: 0, color: '#333' }}>The Developers Arena</h2>
            <div style={{ display: 'flex', gap: '20px', fontWeight: '500' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#555' }}>Home</Link>
                <Link to="/profile" style={{ textDecoration: 'none', color: '#555' }}>Profile</Link>
            </div>
        </nav>
    );
}

export default Navbar;