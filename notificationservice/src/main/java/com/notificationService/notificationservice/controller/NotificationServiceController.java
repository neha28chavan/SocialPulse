package com.notificationService.notificationservice.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.notificationService.notificationservice.entity.Notification;
import com.notificationService.notificationservice.service.NotificationService;

@RestController
@RequestMapping("/api/notifications")

public class NotificationServiceController {

	@Autowired
    private NotificationService notificationService; // Interface inject hoto

    @GetMapping
    public ResponseEntity<List<Notification>> getNotifications() {
        return ResponseEntity.ok(notificationService.getAllNotifications());
    }

    @PostMapping("/send")
    public ResponseEntity<Notification> createNotification(@RequestBody Notification notification) {
        Notification savedNotification = notificationService.sendNotification(notification);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedNotification);
    }
}
	
