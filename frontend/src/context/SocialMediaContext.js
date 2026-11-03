import React, { createContext, useState, useEffect } from 'react';
import { getAllPosts, getNotifications, getChatHistory } from '../services/api';

export const SocialMediaContext = createContext();

export const SocialMediaProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [chatMessages, setChatMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const postsRes = await getAllPosts();
            setPosts(postsRes.data);

            const notifRes = await getNotifications();
            setNotifications(notifRes.data);

            const chatRes = await getChatHistory();
            setChatMessages(chatRes.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SocialMediaContext.Provider value={{ posts, notifications, chatMessages, isLoading, error, fetchData }}>
            {children}
        </SocialMediaContext.Provider>
    );
};