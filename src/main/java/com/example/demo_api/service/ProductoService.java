package com.example.demo_api.service;

import org.springframework.stereotype.Service;
import com.example.demo_api.model.Producto;
import com.example.demo_api.reposiroty.ProductoRepository;

import java.util.List;

@Service
public class ProductoService {

    private final ProductoRepository productoRepository;

    public ProductoService(ProductoRepository productoRepository){
        this.productoRepository = productoRepository;

    }

    public List<Producto> getProducto() {
        return productoRepository.findAll();
    }
    
}
