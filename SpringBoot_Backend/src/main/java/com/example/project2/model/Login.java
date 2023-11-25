package com.example.project2.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Login {
     @Id
     @GeneratedValue
     private int Id;
     private String email;
     private String password;
     private String newPassword;
     private String oldPassword;

     
     public String getNewPassword() {
          return newPassword;
     }
     public void setNewPassword(String newPassword) {
          this.newPassword = newPassword;
     }
     public String getOldPassword() {
          return oldPassword;
     }
     public void setOldPassword(String oldPassword) {
          this.oldPassword = oldPassword;
     }
     public Login() {
     }
     public String getEmail() {
          return email;
     }
     
     public void setEmail(String email) {
          this.email = email;
     }
     public String getPassword() {
          return password;
     }
     public void setPassword(String password) {
          this.password = password;
     }
     
     @Override
     public String toString() {
          return "Login [Id=" + Id + ", email=" + email + ", password=" + password + ", newPassword=" + newPassword
                    + ", oldPassword=" + oldPassword + "]";
     }
}
