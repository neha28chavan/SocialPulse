package com.userservice.userservice.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.userservice.userservice.entity.User;
import com.userservice.userservice.service.UserService;
import com.userservice.userservice.userservice.repository.UserRepository;


@Component
public class UserServiceImpl implements UserService {

	@Autowired
    private UserRepository userRepository;

    @Override
    public User registerUser(User user) {
        // Yithe password encoding (e.g., BCrypt) pan add karu shakta pudhe
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
    }
}