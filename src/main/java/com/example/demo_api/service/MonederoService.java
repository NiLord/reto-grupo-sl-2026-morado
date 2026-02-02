package com.example.demo_api.service;

import org.springframework.stereotype.Service;
import com.example.demo_api.model.Monedero;
import com.example.demo_api.reposiroty.MonederoRepository;

import java.util.List;

@Service
public class MonederoService {
    
    private final MonederoRepository monederoRepository;

    public MonederoService(MonederoRepository monederoRepository){
        this.monederoRepository = monederoRepository;

    }

    public List<Monedero>getMonedero() {
        return monederoRepository.findAll();
    }
}
