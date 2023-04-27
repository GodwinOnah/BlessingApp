import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountRoutingModule } from './user-account-routing.module';
import { ProdsharemodModule } from '../prodsharemod/prodsharemod.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './Register/register.component';
import {  MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [LoginComponent,
    RegisterComponent,
   ],
  imports: [
    CommonModule,
    UserAccountRoutingModule,
    ReactiveFormsModule,
    ProdsharemodModule,
    MatDialogModule
  ]
})
export class UserAccountModule { }
