import axios from 'axios';

const API_GATEWAY_URL = 'http://localhost:8080';

const api = axios.create({
    baseURL: API_GATEWAY_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

// 1. User APIs
export const getAllUsers = () => api.get('/api/users');

// 2. Post APIs
export const getAllPosts = () => api.get('/api/posts');
export const createPost = (postData) => api.post('/api/posts', postData);

// 3. Notification APIs
export const getNotifications = () => api.get('/api/notifications');
export const sendNotification = (notificationData) => api.post('/api/notifications/send', notificationData);

// 4. Media Upload API
export const uploadMedia = (formData) => api.post('/api/media/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
});

// 5. Chat History API
export const getChatHistory = () => api.get('/api/chat/history');

export default api;