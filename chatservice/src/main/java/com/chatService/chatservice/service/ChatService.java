package com.chatService.chatservice.service;

import java.util.List;

import com.chatService.chatservice.model.ChatMessage;

public interface ChatService {
    ChatMessage saveMessage(ChatMessage message);
    List<ChatMessage> getAllChatHistory();
}