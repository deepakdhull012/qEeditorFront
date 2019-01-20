import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  listMode = true;
  searchId = '';
  constructor(
    private sharedService: SharedService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  setSearchId() {
    this.sharedService.setSubSetId(this.searchId);
  }

  mailSent(){
    this.toastr.success('Success', 'Mail Sent Successful!');
  }

  

}
