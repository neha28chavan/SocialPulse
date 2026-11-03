package com.chatService.chatservice.serviceimpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chatService.chatservice.model.ChatMessage;
import com.chatService.chatservice.repository.ChatRepository;
import com.chatService.chatservice.service.ChatService;

import java.util.List;

@Service
public class ChatServiceImpl implements ChatService {

    @Autowired
    private ChatRepository chatRepository;

    @Override
    public ChatMessage saveMessage(ChatMessage message) {
        return chatRepository.save(message);
    }

    @Override
    public List<ChatMessage> getAllChatHistory() {
        return chatRepository.findAll();
    }
}