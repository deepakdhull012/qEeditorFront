import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {ValidationConfig} from './../../formConfig/validationConfig';
import { UserServiceService } from 'src/app/services/user-service.service';
import { SharedService } from 'src/app/services/shared.service';
import {Router} from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpConfig: any;
  signUpForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private userService: UserServiceService,
    private sharedService:SharedService,
    private router: Router,
    private ngxService: NgxUiLoaderService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.signUpConfig = ValidationConfig.loginConfig();
    this.signUpForm =this.fb.group(this.signUpConfig);
  }

  onSubmit() {
    if(this.signUpForm.valid) {
      this.ngxService.start();
      this.userService.addUser(this.signUpForm.value).then((res)=>{
        this.toastr.success('Success', 'Registration Success!');
        this.ngxService.stop();
      }).catch((err)=>{
        this.ngxService.stop();
        this.toastr.error('Error', 'Registeration Failed!');
      });
    }
    else {
      this.sharedService.validateAllFields(this.signUpForm);
    }
    
  }
}
