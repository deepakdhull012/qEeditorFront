import { Component, OnInit } from '@angular/core';
import {QuestionServiceService} from './../../services/question-service.service';
import {IQuestion} from './../../interfaces/question.interface'
import { SharedService } from 'src/app/services/shared.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions:  IQuestion[] = [];
  constructor(
    private questionProvider: QuestionServiceService,
    private sharedService: SharedService,
    private ngxService: NgxUiLoaderService
    ) { }

  ngOnInit() {
    this.ngxService.start();
    this.questionProvider.getAllQuestions().then((q)=>{
      this.questions = q;
      this.ngxService.stop();
    }).catch((err)=>{
      this.ngxService.stop();
    });
    this.sharedService.subsetId.subscribe((id)=>{
      this.ngxService.start();
      if(id) {
      this.questionProvider.getQuestionsBySubsetId(id).then((ques)=>{
        this.questions = ques;
        this.ngxService.stop();
      }).catch((err)=>{
        this.ngxService.stop();
      })
      }
      else {
        this.questionProvider.getAllQuestions().then((q)=>{
          this.questions = q;
          this.ngxService.stop();
        }).catch((err)=>{
          this.ngxService.stop();
        });
      }
      
    });
  }

  edit(question) {
    this.sharedService.questionToEdit = question;
  }

}
