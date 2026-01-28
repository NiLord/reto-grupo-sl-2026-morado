package com.example.demo_api.service;

import com.example.demo_api.dto.createDto.UserCreateDTO;
import com.example.demo_api.dto.returnDto.UserResponseDTO;
import com.example.demo_api.mapper.UserMapper;
import com.example.demo_api.reposiroty.UserRepository;

import org.springframework.transaction.annotation.Transactional;

import com.example.demo_api.model.User;

public class UserService {
    
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Transactional(rollbackFor = Exception.class)
    public UserResponseDTO createUser(UserCreateDTO dto) throws Exception {

        if (userRepository.findByEmail(dto.email())){
            throw new RuntimeException("Email ya registrado");
        };

        User nuevoUser = UserMapper.createUserMapper(dto);
        return UserMapper.responseCreateUser(userRepository.save(nuevoUser));
    }
}