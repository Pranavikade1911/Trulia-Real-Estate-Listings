import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
// import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Api';
  // apiData: any;

  // constructor(private service: UserService, private router: Router) { }

  // ngOnInit() {
  //   this.service.getApi().subscribe(data => {
  //     this.apiData = data;
  //   });
  // }

  // clickBtn() {
    // this.router.navigate(['/contact']);
  // }

  // getForm(data:any){
  //   console.log(data);
  // }


  // UserData1 = new FormGroup({
  //   name: new FormControl(),
  //   password: new FormControl(),
  // });

  // getForm(data: any) {
  //   console.log(data);
  // }
}

