package com.example.demo_api.controller;

import java.util.Base64;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/general")
public class GeneralController {
    
    @GetMapping("/encode")
    public String passwordEncoder(@Valid @RequestBody String password){
        String encodedString = Base64.getEncoder().encodeToString(password.getBytes());
        return encodedString;

    }
}
