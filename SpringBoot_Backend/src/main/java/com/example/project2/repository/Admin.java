package com.example.project2.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.project2.model.Login;

public interface Admin extends JpaRepository<Login,Integer>{
     Login findByEmail(String email);    
}
