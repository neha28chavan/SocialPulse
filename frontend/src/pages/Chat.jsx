import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { getChatHistory } from '../services/api';

function Chat() {
    const [stompClient, setStompClient] = useState(null);
    const [messages, setMessages] = useState([]);
    const [messageContent, setMessageContent] = useState('');
    const [username, setUsername] = useState('');
    const [isJoined, setIsJoined] = useState(false);

    // 1. Fetch past chat history from database on load
    useEffect(() => {
        getChatHistory()
            .then(res => setMessages(res.data))
            .catch(err => console.error("Error fetching chat history:", err));
    }, []);

    // 2. Connect to WebSocket via API Gateway (Port 8080)
    const connectToChat = (e) => {
        e.preventDefault();
        if (!username.trim()) return;

        const socket = new SockJS('http://localhost:8080/ws-chat');
        const client = Stomp.over(socket);

        client.connect({}, () => {
            setStompClient(client);
            setIsJoined(true);

            client.subscribe('/topic/public', (payload) => {
                const newMessage = JSON.parse(payload.body);
                setMessages(prev => [...prev, newMessage]);
            });

            // Send Join message
            client.send("/app/chat.addUser", {}, JSON.stringify({
                sender: username,
                type: 'JOIN'
            }));
        });
    };

    // 3. Send Message
    const sendMessage = (e) => {
        e.preventDefault();
        if (messageContent.trim() && stompClient) {
            const chatMessage = {
                sender: username,
                content: messageContent,
                type: 'CHAT'
            };
            stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage));
            setMessageContent('');
        }
    };

    if (!isJoined) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>Join Chat Room</h2>
                <form onSubmit={connectToChat}>
                    <input 
                        type="text" 
                        placeholder="Enter your username..." 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
                    />
                    <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>Join</button>
                </form>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '600px', margin: '30px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Live Chat Room</h2>
            <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #eee', padding: '10px', marginBottom: '15px', backgroundColor: '#f9f9f9' }}>
                {messages.map((msg, index) => (
                    <div key={index} style={{ marginBottom: '8px' }}>
                        <strong>{msg.sender}: </strong> 
                        <span>{msg.content}</span>
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage} style={{ display: 'flex' }}>
                <input 
                    type="text" 
                    placeholder="Type a message..." 
                    value={messageContent} 
                    onChange={(e) => setMessageContent(e.target.value)}
                    style={{ flex: 1, padding: '10px', fontSize: '14px' }}
                />
                <button type="submit" style={{ padding: '10px 20px', marginLeft: '5px' }}>Send</button>
            </form>
        </div>
    );
}

export default Chat;