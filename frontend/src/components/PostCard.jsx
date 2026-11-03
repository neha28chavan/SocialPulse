import React from 'react';

function PostCard({ post }) {
  return (
    <div style={{ background: '#fff', padding: '15px', borderRadius: '8px', marginBottom: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>{post?.author || 'Anonymous User'}</h4>
      <p style={{ margin: 0, color: '#555' }}>{post?.content || 'No content provided.'}</p>
    </div>
  );
}

export default PostCard;