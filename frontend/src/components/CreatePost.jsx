import React, { useState } from 'react';
import { createPost } from '../services/api'; // api.js madhun import kara

function CreatePost({ onPostCreated }) {
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!content.trim()) return;

        try {
            // Backend la API call karun post save kara
            const postData = { content: content };
            const response = await createPost(postData);

            // Jar parent component madhe function asel tar tyla call karu shakta
            if (onPostCreated) {
                onPostCreated(response.data);
            }

            setContent('');
            alert('Post created successfully!');
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post');
        }
    };

    return (
        <div style={{ background: '#fff', padding: '15px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <form onSubmit={handleSubmit}>
                <textarea 
                    rows="3"
                    placeholder="What's on your mind?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', resize: 'none' }}
                />
                <button 
                    type="submit"
                    style={{ marginTop: '10px', padding: '8px 16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Post
                </button>
            </form>
        </div>
    );
}

export default CreatePost;