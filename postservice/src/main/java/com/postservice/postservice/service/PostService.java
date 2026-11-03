package com.postservice.postservice.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.postservice.postservice.entity.Post;

@Service

public interface PostService {

	Post createPost(Post post);
    List<Post> getAllPosts();
}

