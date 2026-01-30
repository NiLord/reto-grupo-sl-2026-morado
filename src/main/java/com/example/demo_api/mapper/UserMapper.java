package com.example.demo_api.mapper;

import com.example.demo_api.model.User;
import com.example.demo_api.dto.createDto.UserCreateDTO;
import com.example.demo_api.dto.returnDto.UserResponseDTO;

public class UserMapper {

    public static User createUserMapper (UserCreateDTO dto) {

        User newUser = new User();
        newUser.setCedula(dto.cedula());
        newUser.setNombre(dto.nombre());
        newUser.setPassword(dto.password());
        newUser.setApellido(dto.apellido());
        newUser.setEmail(dto.email());
        return newUser;
    }

    public static UserResponseDTO responseCreateUser (User user) {

        return new UserResponseDTO (
            user.getNombre(),
            user.getApellido(),
            user.getActivo(),
            "Bienvenido " + user.getNombre() + " " + user.getApellido()
        );
    }
}