package com.example.demo_api.service;

import java.util.Optional;

import com.example.demo_api.dto.createDto.UserCreateDTO;
import com.example.demo_api.dto.createDto.UserGetDTO;
import com.example.demo_api.dto.returnDto.UserResponseDTO;
import com.example.demo_api.exception.EmailInvalid;
import com.example.demo_api.exception.NotFound;
import com.example.demo_api.mapper.UserMapper;
import com.example.demo_api.reposiroty.UserRepository;

import org.aspectj.weaver.ast.Not;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo_api.model.User;

@Service
public class UserService {
    
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Transactional
    public UserResponseDTO createUser(UserCreateDTO dto)  {

        if (userRepository.existsByEmail(dto.email())){
            throw new EmailInvalid("El email ya estan en uso");
        };

        User nuevoUser = UserMapper.createUserMapper(dto);
        return UserMapper.responseCreateUser(userRepository.save(nuevoUser));
    }

    public UserResponseDTO getUser(UserGetDTO dto) {

        User foundUser = userRepository.findByNombreAndPassword(dto.cedula(), dto.password())
        .orElseThrow(() -> new NotFound("No se encontro un usuario cpn esas credenciales"));

        return UserMapper.responseCreateUser(foundUser);
    }
}