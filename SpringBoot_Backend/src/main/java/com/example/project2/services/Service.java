package com.example.project2.services;
import java.util.List;

import com.example.project2.model.Login;


public interface Service {
     public void addUser(Login login);
     public void deleteUserByEmail(String email);
     public Login findUserByEmail(String email);
     void updateUserPassword(Login user, String newPassword);
     public Login getPersonById(int id);
     public List<Login> getAllUsers();
     
}
