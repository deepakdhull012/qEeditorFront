import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SharedService } from './services/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'qeditor';
  isLoggedIn = false;
  constructor(
    private router: Router,
    private sharedService: SharedService
    ){
      if (this.sharedService.checkLogin()) {
        this.isLoggedIn = true;
    }
    }

  ngOnInit() {
    this.sharedService.isLoggedIn.subscribe((isLoggedIn)=>{
      this.isLoggedIn = isLoggedIn;
    })
  }

  logout(){
    localStorage.setItem('user',null);
    this.sharedService.logout();
    this.router.navigate(['login'])
  }
}
