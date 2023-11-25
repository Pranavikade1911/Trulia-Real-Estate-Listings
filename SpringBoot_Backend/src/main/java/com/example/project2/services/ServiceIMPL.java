package com.example.project2.services;

import java.util.List;
import java.util.stream.Collectors;

// import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.project2.model.Login;
import com.example.project2.repository.Admin;

@Service
public class ServiceIMPL implements com.example.project2.services.Service {

    @Autowired
    Admin obj;

    @Override
    public void addUser(Login login) {
        // Custom validation logic
        // if (emailExists(login.getEmail())) {
        // throw new EmailAlreadyExistsException("Email already exists");
        // }
        obj.save(login);
    }

    // private boolean emailExists(String email) {
    // return obj.findByEmail(email) != null;
    // }

    @Override
    public void deleteUserByEmail(String email) {
        List<Login> users = obj.findAll(); // Fetch all users
        List<Login> usersToDelete = users.stream()
                .filter(user -> email.equals(user.getEmail()))
                .collect(Collectors.toList());

        if (!usersToDelete.isEmpty()) {
            // Assuming you want to delete all users with the specified email
            obj.deleteAll(usersToDelete);
        }
    }

    @Override
    public Login findUserByEmail(String email) {

        return obj.findByEmail(email);
    }

    // @Override
    // public void updateUserPassword(Login user) {
    // user.setPassword(user.getNewPassword()); // Assuming the new password is
    // stored in a field named 'newPassword'
    // obj.save(user);
    // }

    // ServiceIMPL.java

    @Override
    public void updateUserPassword(Login user, String newPassword) {
        System.out.println("Before Update: " + user); // Log the user object before update

        if (newPassword != null && !newPassword.isEmpty()) {
            // Update the 'password' field with the new password
            user.setPassword(newPassword);

            // Clear the 'newPassword' and 'oldPassword' fields
            user.setNewPassword(null);
            user.setOldPassword(null);

            obj.save(user);

            System.out.println("After Update: " + user); // Log the user object after update
        } else {
            System.out.println("No new password provided. Skipping update.");
        }
    }

    @Override
    public Login getPersonById(int id) {
        return obj.findById(id).orElse(null);
    }

    public List<Login> getAllUsers() {
        return obj.findAll();
    }
}
