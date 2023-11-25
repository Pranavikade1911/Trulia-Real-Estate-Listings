// update-password.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {
  formData = {
    email: '',
    oldPassword: '',
    newPassword: ''
  };

  updateSuccess: boolean = false;
  passwordMismatch: boolean = false;

  constructor(private userService: UserService) { }

  onSubmit(updatePasswordForm: NgForm): void {
    if (updatePasswordForm.valid) {
      this.formData.newPassword = updatePasswordForm.value.newPassword;

      const updatePasswordData = {
        email: this.formData.email,
        oldPassword: this.formData.oldPassword,
        newPassword: this.formData.newPassword
      };

      this.userService
        .checkOldPassword(updatePasswordData)
        .subscribe({
          next: (isPasswordMatch: boolean) => {
            if (isPasswordMatch) {
              if (updatePasswordData.newPassword) {
                this.userService
                  .updatePassword(updatePasswordData)
                  .subscribe({
                    next: (data: string) => {
                      console.log(data);
                      this.updateSuccess = true;
                    },
                    error: (error) => {
                      console.log(error);
                    },
                  });
              } else {
                console.log("No new password provided. Skipping update.");
                this.updateSuccess = false;
              }
            } else {
              this.passwordMismatch = true;
            }
          },
          error: (error) => {
            console.log(error);
          },
        });
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
