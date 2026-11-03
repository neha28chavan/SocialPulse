package com.chatService.chatservice.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chatService.chatservice.model.ChatMessage;

@Repository
public interface ChatRepository extends JpaRepository<ChatMessage,Long> {
	
}