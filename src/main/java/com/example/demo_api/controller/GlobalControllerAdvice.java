package com.example.demo_api.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import com.example.demo_api.error.ErrorResponse;
import com.example.demo_api.exception.EmailInvalid;
import com.example.demo_api.exception.UserNotCreated;
import com.example.demo_api.exception.NotFound;

@RestControllerAdvice
public class GlobalControllerAdvice {
    
    @ExceptionHandler(EmailInvalid.class)
    public ResponseEntity<ErrorResponse> handleEmailInvalidException(EmailInvalid e) {
        ErrorResponse errorResponse = new ErrorResponse(
            HttpStatus.BAD_REQUEST.value(),
            e.getMessage()
        );

        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST); 
    }

    @ExceptionHandler(UserNotCreated.class)
    public ResponseEntity<ErrorResponse> handleUserNotCreatedException(UserNotCreated e){
        ErrorResponse errorResponse = new ErrorResponse(
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            e.getMessage()
        );

        return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(NotFound.class)
        public ResponseEntity<ErrorResponse> handleNotFoundException(NotFound e){
            ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.NOT_FOUND.value(),
                e.getMessage()
            );

            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        };
    
}
