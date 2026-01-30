package com.example.demo_api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo_api.dto.createDto.UserCreateDTO;
import com.example.demo_api.dto.createDto.UserGetDTO;
import com.example.demo_api.dto.returnDto.UserResponseDTO;
import com.example.demo_api.model.User;
import com.example.demo_api.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/user")
public class UserController {
    
    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<UserResponseDTO> crear(@Valid @RequestBody UserCreateDTO dto){

        UserResponseDTO response = userService.createUser(dto);

        return ResponseEntity.status(201).body(response);
    }
    
    @GetMapping
    public ResponseEntity<UserResponseDTO> obtener(@Valid @RequestBody UserGetDTO dto){
        UserResponseDTO response = userService.getUser(dto);
        return ResponseEntity.status(200).body(response);
    }
}
