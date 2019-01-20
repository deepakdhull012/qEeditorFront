import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {ValidationConfig} from './../../formConfig/validationConfig';
import { UserServiceService } from 'src/app/services/user-service.service';
import { SharedService } from 'src/app/services/shared.service';
import {Router} from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginConfig: any;
  loginForm: FormGroup;
  constructor(
    private fb:FormBuilder,
    private userService: UserServiceService,
    private sharedService:SharedService,
    private router: Router,
    private ngxService: NgxUiLoaderService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.loginConfig = ValidationConfig.loginConfig();
    this.loginForm =this.fb.group(this.loginConfig);
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.ngxService.start();
      this.userService.login(this.loginForm.value).then((res:IUser)=>{
        localStorage.setItem('user',res.email);
        this.sharedService.login();
        this.ngxService.stop();
        this.toastr.success('Success', 'Login Success!');
          this.router.navigate(['questions']);
      }).catch((err)=>{
        this.ngxService.stop();
        this.toastr.error('Error', 'Login Failed!');
      });
    }
    else {
      this.sharedService.validateAllFields(this.loginForm);
    }
    
  }

}
