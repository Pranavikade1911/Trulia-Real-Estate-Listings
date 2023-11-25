import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BodyComponent } from './body/body.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { RentComponent } from './rent/rent.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    UserDetailsComponent,
    UpdatePasswordComponent,
    RentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
