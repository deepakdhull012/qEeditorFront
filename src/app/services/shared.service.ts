import { Injectable } from '@angular/core';
import { IQuestion } from '../interfaces/question.interface';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  questionToEdit: IQuestion = null;

  isLoggedIn = new BehaviorSubject<boolean>(this.checkLogin());
  subsetId = new BehaviorSubject<string>(null);

  constructor() { }

  validateAllFields(f:FormGroup) {
    Object.keys(f.controls).forEach((field)=>{
      const control = f.get(field);
      control.markAsTouched({onlySelf: true});
    });
  }

  checkLogin() {
    if (localStorage.getItem('user').length>0  && localStorage.getItem('user') != 'null') {
      return true;
    }
    return false;
  }

  login() {
    this.isLoggedIn.next(true);
  }

  logout(){
    this.isLoggedIn.next(false);
  }

  setSubSetId(id) {
    this.subsetId.next(id);
  }
}
