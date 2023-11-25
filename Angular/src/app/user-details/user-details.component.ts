// user-details.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadAllUsers();
  }

  loadAllUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data: any) => {
        this.users = data;
      },
      error: (error) => {
        console.error('Error fetching user details:', error);
      },
    });
  }
  
  deleteUser(email: string): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUserByEmail(email).subscribe({
        next: (data:any) => {
          console.log(`User with email ${email} deleted successfully.`);
          // Refresh the user list or perform any other necessary actions
          this.loadAllUsers();
        },

        error: (error) => {
          console.error(`Error deleting user with email ${email}:`, error);
        }
      });
    }
  }
}
