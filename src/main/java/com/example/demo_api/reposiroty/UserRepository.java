package com.example.demo_api.reposiroty;

import java.util.Optional;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo_api.dto.createDto.UserCreateDTO;
import com.example.demo_api.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

    boolean existsByEmail(String email);

    @Query("select u from User u where u.cedula = ?1 and u.password = ?2")
    Optional<User> findByNombreAndPassword(String cedula, String password);
}