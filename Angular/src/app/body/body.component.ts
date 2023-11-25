// body.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})

export class BodyComponent {
  images = [
    'assets/images/img4.jpg',
    'assets/images/img2.jpg',
    'assets/images/img3.jpg',
    // Add more image paths as needed
  ];

  cities = [
    { name: 'Paris', properties: 10, image: 'assets/images/img4.jpg' },
    { name: 'New York', properties: 40, image: 'assets/images/img5.jpg' },
    { name: 'Chicago', properties: 34, image: 'assets/images/img6.jpg' },
    // Add more cities as needed
  ];

  properties = [
    { price: '$12500', image: 'assets/images/img7.jpg' },
    { price: '$35000', image: 'assets/images/img8.jpg' },
    { price: '$26000', image: 'assets/images/img9.jpg' },
    { price: '$25000', image: 'assets/images/img10.jpg' },
    { price: '$15000', image: 'assets/images/img11.jpg' },
    { price: '$25000', image: 'assets/images/img12.jpg' },
    // Add more properties as needed
  ];

  formData = {
    email: '',
    password: ''
  };
  userData: any;

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute){ }

  registrationSuccess: boolean = false;

  // Handle Onsubmit Method
  onSubmit(signupForm: NgForm): void {
    if (signupForm.valid) {
      console.log('Form submitted successfully!', signupForm.value);
      this.saveUser(signupForm.value); // Pass the form value to saveUser
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }

  // Save User Details 
  saveUser(formData: any): void {
    this.userService.createUser(formData).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
        // Handle the error as needed
      },
    });
  }

  users: any[] = [];
  isUpdatePasswordRoute: boolean = false;  
  isViewUsersRoute: boolean = false;
  isRentRoute: boolean = false;

  ngOnInit(): void {
     // Existing initialization logic
    this.userService.getAllUsers().subscribe((data: any[]) => {
      this.users = data;
    });

    // Updated ngOnInit block
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isUpdatePasswordRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path === 'update-password';
      }
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isUpdatePasswordRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path === 'update-password';
        this.isViewUsersRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path === 'user-details';
      }
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isRentRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path === 'rent';
      }
    });
  }

  viewAllUsers(): void {
    this.userService.getAllUsers().subscribe((data: any[]) => {
      this.users = data;
      this.router.navigate(['/user-details']);
    });
  }
}
