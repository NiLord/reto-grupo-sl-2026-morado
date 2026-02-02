package com.example.demo_api.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.example.demo_api.service.ProductoService;
import com.example.demo_api.model.Producto;
import java.util.List;


@CrossOrigin(
    origins = "*"
)
@RestController
@RequestMapping("/producto")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping
    public ResponseEntity<List<Producto>> getProducto() {
        List<Producto> response = productoService.getProducto();
        return ResponseEntity.ok(response);
    }
    
}
