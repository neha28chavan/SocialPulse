import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SocialMediaProvider } from './context/SocialMediaContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Chat from './pages/Chat'

export default function App() {
    return (
        <SocialMediaProvider>
            <Router>
                <div style={{ background: '#f4f6f8', minHeight: '100vh', paddingBottom: '40px' }}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/Chat" element={<Chat/>}/>
                    </Routes>
                </div>
            </Router>
        </SocialMediaProvider>
    );
}
