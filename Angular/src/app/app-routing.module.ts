import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { RentComponent } from './rent/rent.component';

const routes: Routes = [
  
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'update-password', component: UpdatePasswordComponent },
  { path: 'rent', component: RentComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
