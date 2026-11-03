package com.notificationService.notificationservice.serviceimpl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.notificationService.notificationservice.entity.Notification;
import com.notificationService.notificationservice.repository.NotificationServiceRepository;
import com.notificationService.notificationservice.service.NotificationService;

import java.util.List;

@Service
public class NotificationServiceImpl implements NotificationService {

   
	@Autowired
    private NotificationServiceRepository notificationRepository;

    @Override
    public List<Notification> getAllNotifications() {
        return notificationRepository.findAll();
    }

    

	@Override
	public Notification sendNotification(Notification notification) {
		return notificationRepository.save(notification);
	}
}
