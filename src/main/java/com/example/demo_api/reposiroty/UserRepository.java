package com.example.demo_api.reposiroty;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo_api.dto.createDto.UserCreateDTO;
import com.example.demo_api.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

    boolean findByEmail(String email);
}