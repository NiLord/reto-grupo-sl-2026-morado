package com.example.demo_api.dto.returnDto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UserResponseDTO (
    @NotBlank
    @Size(min = 3, max = 100, message = "El nombre tiene que tener una longitud de 3 - 100")
    String nombre,

    @NotBlank
    @Size(min = 3, max = 100, message = "El apellido tiene que tener una longitud de 3 - 100")
    String apellido,
    
    @NotBlank
    boolean activo,

    @NotBlank
    String bienvenida
){



}
