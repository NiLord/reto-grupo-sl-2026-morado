package com.example.demo_api.dto.createDto;

import java.util.Map;

import java.util.List;

import jakarta.validation.constraints.NotBlank;

public record TransferenciaDTO (

    @NotBlank
    List<Map<String, Integer>> productos,
    
    @NotBlank
    List<Map<String, Integer>> monedas
){
}
