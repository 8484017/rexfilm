import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, RouterModule.forChild([
      { path: "", component: LoginPageComponent }
    ])
  ],
  declarations: [LoginPageComponent]
})
export class LoginModule { }
