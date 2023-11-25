// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3223';  // SpringBoot Url

  constructor(private http: HttpClient) { }

  // POST Request to send data from Angular to SpringBoot
  createUser(formData: any): Observable<any> {
    const url = `${this.baseUrl}/saveUser`;
    return this.http.post(url, formData);
  }

  // For All Users
  getAllUsers(): Observable<any[]> {
    const url = `${this.baseUrl}/users`;
    return this.http.get<any[]>(url);
  }

  deleteUserByEmail(email: string): Observable<any> {
    const url = `http://localhost:3223/users/${email}`;
    return this.http.delete(url).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 200) {
          console.log(`User with email ${email} deleted successfully.`);
          // Additional handling if needed
        } else {
          console.error(`Error deleting user with email ${email}:`, error);
        }
        // Continue the observable stream by returning an empty observable
        return new Observable();
      })
    );
  }

  updatePassword(updatePasswordData: any): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/users/update-password`, updatePasswordData);
  }

  checkOldPassword(data: any): Observable<boolean> {
    const url = `${this.baseUrl}/check-password`;
    return this.http.post<boolean>(url, data)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(`Error checking old password:`, error);
          return throwError(() => false);
        })
      );
  }
}
