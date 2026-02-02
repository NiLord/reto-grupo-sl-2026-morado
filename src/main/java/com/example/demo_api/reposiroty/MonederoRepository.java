package com.example.demo_api.reposiroty;

import com.example.demo_api.model.Monedero;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MonederoRepository extends JpaRepository<Monedero, Long>{

    
}
