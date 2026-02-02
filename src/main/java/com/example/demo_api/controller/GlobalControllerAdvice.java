package com.example.demo_api.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import com.example.demo_api.error.ErrorResponse;
import com.example.demo_api.exception.NotFound;

@RestControllerAdvice
public class GlobalControllerAdvice {

    @ExceptionHandler(NotFound.class)
        public ResponseEntity<ErrorResponse> handleNotFoundException(NotFound e){
            ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.NOT_FOUND.value(),
                e.getMessage()
            );

            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        };
    
}
