package com.example.project2.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.project2.model.Login;
import com.example.project2.services.Service;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class ForgotPasswordController {

    @Autowired
    private Service service;

    @GetMapping("/forgot-password")
    public String showForgotPasswordPage() {
        return "forgot-password";
    }

    @PostMapping("/users/update-password")
    @ResponseBody
    public String processUpdatePassword(@RequestBody Login updateData) {
        String email = updateData.getEmail();
        String oldPassword = updateData.getOldPassword();
        String newPassword = updateData.getNewPassword();

        Login existingUser = service.findUserByEmail(email);

        if (existingUser != null) {
            if (existingUser.getPassword().equals(oldPassword)) {
                // Update the password in the Spring Boot service
                service.updateUserPassword(existingUser, newPassword);
                return "Password updated successfully.";
            } else {
                return "Old password doesn't match.";
            }
        } else {
            return "User not found.";
        }
    }

    @PostMapping("/check-password")
    @ResponseBody
    public boolean checkPassword(@RequestBody Map<String, String> data) {
        String email = data.get("email");
        String oldPassword = data.get("oldPassword");
        Login user = service.findUserByEmail(email);
        return user != null && user.getPassword().equals(oldPassword);
    }
}
