package com.userservice.userservice.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.userservice.userservice.entity.User;

@Service
public interface UserService {
	
	 User registerUser(User user);
	 List<User> getAllUsers();
	 User getUserById(Long id);
}

