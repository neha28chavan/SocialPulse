package com.postservice.postservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.postservice.postservice.entity.Post;

public interface PostRepository extends JpaRepository<Post , Long> {
	List<Post> findByAuthorId(Long authorId);

}
