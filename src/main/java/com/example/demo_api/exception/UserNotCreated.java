package com.example.demo_api.exception;

public class UserNotCreated extends RuntimeException {
    public UserNotCreated(String message) {
        super(message);
    }
}
