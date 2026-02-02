package com.example.demo_api.reposiroty;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo_api.model.Monedero;

@Repository
public interface TransferenciaRepository extends JpaRepository<Monedero, Long>{

    
}