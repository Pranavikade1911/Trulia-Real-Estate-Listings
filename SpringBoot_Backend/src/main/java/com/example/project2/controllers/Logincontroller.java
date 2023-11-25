package com.example.project2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.stereotype.Controller;
// import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.project2.model.Login;
import com.example.project2.services.Service;
import com.example.project2.services.ServiceIMPL;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Logincontroller {
     @Autowired
     ServiceIMPL obj1;

     @GetMapping("/index")
     public String index() {
          return "index";
     }

     @GetMapping("/rent")
     public String rent() {
          return "rent";
     }

     @PostMapping("/saveUser")
     public String saveUser(@RequestBody Login login) {
          obj1.addUser(login);
          System.out.println("User Added");
          return "User added successfully";
     }

     // @RequestMapping("/delete/{id}")
     // public String deleteUser(@PathVariable("id") int id) {
     // obj1.deleteUserById(id);
     // return "delete";
     // }
     @DeleteMapping("/users/{email}")
     public String deleteUserByEmail(@PathVariable("email") String email) {
          obj1.deleteUserByEmail(email);
          return "delete";
     }

     @Autowired
     private Service service;

     // @CrossOrigin("http://localhost:4200")
     // @GetMapping("/users")
     // public String listUsers(Model model) {
     // List<Login> users = service.getAllUsers();
     // model.addAttribute("users", users);
     // return "all-users"; // Return the HTML template name
     // }

     @GetMapping("/users")
     public List<Login> listUsers() {
          return service.getAllUsers();
     }
}
