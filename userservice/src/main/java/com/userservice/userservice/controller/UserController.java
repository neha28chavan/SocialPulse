package com.userservice.userservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.userservice.userservice.entity.User;
import com.userservice.userservice.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	 	@Autowired
	    private UserService userService;

	    // Register User
	    @PostMapping("/register")
	    public ResponseEntity<User> registerUser(@RequestBody User user) {
	        User savedUser = userService.registerUser(user);
	        return ResponseEntity.ok(savedUser);
	    }

	    // Get All Users
	    @GetMapping("/data")
	    public List<User> getAllUsers() {
	        return userService.getAllUsers();
	    }

	    // Get User By Id
	    @GetMapping("/{id}")
	    public ResponseEntity<User> getUserById(@PathVariable Long id) {
	        User user = userService.getUserById(id);
	        return ResponseEntity.ok(user);
	    }
}


