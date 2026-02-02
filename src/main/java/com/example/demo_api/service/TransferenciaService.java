package com.example.demo_api.service;

import org.springframework.stereotype.Service;

import com.example.demo_api.exception.NotFound;
import com.example.demo_api.model.Monedero;
import com.example.demo_api.reposiroty.TransferenciaRepository;
import com.example.demo_api.reposiroty.MonederoRepository;
import java.util.List;

@Service
public class TransferenciaService {

    private final TransferenciaRepository transferenciaRepository;
    private final MonederoRepository monederoRepository;

    public TransferenciaService(TransferenciaRepository transferenciaRepository, MonederoRepository monederoRepository){
        this.transferenciaRepository = transferenciaRepository;
        this.monederoRepository = monederoRepository;

    }   

    public List<Monedero> getTransferencia() {
        List<Monedero> monederoList = monederoRepository.findAll();
        if (monederoList.isEmpty()) {
            throw new NotFound("No se encontro un usuario cpn esas credenciales");
        }
        return monederoRepository.findAll();
    }
    
}
