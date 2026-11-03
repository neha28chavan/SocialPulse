package com.notificationService.notificationservice.service;

import java.util.List;

import com.notificationService.notificationservice.entity.Notification;

public interface NotificationService {
    
    List<Notification> getAllNotifications();
    
    Notification sendNotification(Notification notification);
    
}
