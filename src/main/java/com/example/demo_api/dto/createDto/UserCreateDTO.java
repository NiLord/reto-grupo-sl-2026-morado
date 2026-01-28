package com.example.demo_api.dto.createDto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Pattern;

public record UserCreateDTO(

    @NotBlank
    @Size(min = 3, max = 100, message = "El nombre tiene que tener una longitud de 3 - 100")
    String nombre,

    @NotBlank
    @Size(min = 3, max = 100, message = "El apellido tiene que tener una longitud de 3 - 100")
    String apellido,

    @NotBlank
    @Email
    String email,

    @NotBlank
    @Pattern(regexp = "^\\d-\\d{4}-\\d{4}$", message = "La cedula tiene que ser x-xxxx-xxxx")
    String cedula
    
) {
} 