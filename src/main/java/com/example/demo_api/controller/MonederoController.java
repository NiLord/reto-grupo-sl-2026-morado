package com.example.demo_api.controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.demo_api.service.MonederoService;
import com.example.demo_api.model.Monedero;

import java.util.List;

@CrossOrigin(
    origins = "*"
)
@RestController
@RequestMapping("/monedero")
public class MonederoController {

    @Autowired
    private MonederoService monederoService;

    @GetMapping
    public ResponseEntity<List<Monedero>> getMonedero() {
        return ResponseEntity.ok(monederoService.getMonedero());
    }
    
}
