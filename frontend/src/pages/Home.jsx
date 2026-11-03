import React, { useContext } from 'react';
import { SocialMediaContext } from '../context/SocialMediaContext';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';
import UserComponent from '../components/UserComponent';

function Home() {
    const { posts, isLoading, error, fetchData } = useContext(SocialMediaContext);

    return (
        <div style={{ maxWidth: '650px', margin: '20px auto', padding: '0 15px' }}>
            {/* User Profile Summary Component */}
            <UserComponent />

            {/* Create Post Component */}
            <CreatePost onPostCreated={fetchData} />

            <h3 style={{ color: '#333', marginBottom: '15px' }}>Recent Posts</h3>

            {isLoading && <p>Loading posts...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}

            {/* Posts List */}
            {posts && posts.length > 0 ? (
                posts.map((post) => (
                    <PostCard key={post.id || Math.random()} post={post} />
                ))
            ) : (
                !isLoading && <p style={{ color: '#666' }}>No posts available yet. Create your first post above!</p>
            )}
        </div>
    );
}

export default Home;