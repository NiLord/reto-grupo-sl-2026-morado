package com.example.demo_api.exception;

public class EmailInvalid extends RuntimeException {
    public EmailInvalid(String message) {
        super(message);
    }
    
}
