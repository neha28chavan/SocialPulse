package com.notificationService.notificationservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.notificationService.notificationservice.entity.Notification;

@Repository
public interface NotificationServiceRepository extends JpaRepository<Notification, Long> {

}
