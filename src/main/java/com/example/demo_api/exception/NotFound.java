package com.example.demo_api.exception;

public class NotFound extends RuntimeException{
    public NotFound (String message){
        super(message);
    }
    
}
