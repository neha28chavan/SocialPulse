package com.chatService.chatservice.model;
import jakarta.persistence.*;

@Entity
@Table(name = "chat_messages")
public class ChatMessage {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String sender;
	    private String content;

	    @Enumerated(EnumType.STRING)
	    private MessageType type;

	    public enum MessageType {
	        CHAT, JOIN, LEAVE
	    }

	    // Getters and Setters
	    public Long getId() { return id; }
	    public void setId(Long id) { this.id = id; }

	    public String getSender() { return sender; }
	    public void setSender(String sender) { this.sender = sender; }

	    public String getContent() { return content; }
	    public void setContent(String content) { this.content = content; }

	    public MessageType getType() { return type; }
	    public void setType(MessageType type) { this.type = type; }
	}


