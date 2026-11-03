package com.postservice.postservice.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import com.postservice.postservice.entity.Post;
import com.postservice.postservice.repository.PostRepository;
import com.postservice.postservice.service.PostService;
@Component
public class PostServiceImpl implements PostService{
	
	@Autowired
    private PostRepository postRepository;

	@Override
	public Post createPost(Post post) {
	
		return  postRepository.save(post);
	}

	@Override
	public List<Post> getAllPosts() {
		
		return postRepository.findAll();

	}

    

}
