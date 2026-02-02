package com.example.demo_api.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.apache.catalina.connector.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;

import com.example.demo_api.model.Monedero;

@CrossOrigin(
    origins = "*"
)
@RestController
@RequestMapping("/transferencia")
public class TransferenciaController {

    @PutMapping
    public ResponseEntity<Monedero> realizarTransferencia() {
        // Lógica para realizar la transferencia
        return ResponseEntity.ok().build();
    }   
    
}
