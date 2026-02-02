package com.example.demo_api.reposiroty;



import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo_api.model.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long>{

}