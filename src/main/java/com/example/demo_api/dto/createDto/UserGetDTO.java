package com.example.demo_api.dto.createDto;

import jakarta.validation.constraints.NotBlank;

public record UserGetDTO(
    
    @NotBlank
    String cedula,
    
    @NotBlank
    String password
) {
}
