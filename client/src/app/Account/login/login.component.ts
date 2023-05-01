import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAccountService } from '../account.service';
import {  MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../Register/register.component';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errors : string[] | null = null;
  view : boolean = true;
  changetype : boolean = true;

  RegularExpression="^(?=(.*[a-z]){1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{7,30}$";

  returnUrl:string;

  constructor(
    private formbuilder:FormBuilder,
    private router : Router,
    private accountService:UserAccountService,
    private activatedRoute:ActivatedRoute,
    private toastr : ToastrService,
    private matdialog:MatDialog
    
   ){

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl']||'/prodshopmod'

  }

  loginForm = this.formbuilder.group({
        Email: ['',[Validators.required]],
        Password: ['',[Validators.required]]
  });

  onLoginSubmit(){
    // console.log(5);
    this.accountService.Login(this.loginForm.value).subscribe({
      next: ()=> {
        this.toastr.success("Login succecssfully") 
        this.router.navigateByUrl('/products')},
        error : error => {
          this.toastr.success("Wrong password") 
          this.errors = error.errors}
    });
    
  }

  openRegDialog(){
    this.matdialog.open(RegisterComponent,
      {height: '80%',
    width: '50%'});
  }

  viewpass(){
    this.view = !this.view;
    this.changetype = !this.changetype;
  }


 

}
