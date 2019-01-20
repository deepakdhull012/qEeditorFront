import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {ValidationConfig} from './../../formConfig/validationConfig';
import { SharedService } from 'src/app/services/shared.service';
import { IQuestion } from 'src/app/interfaces/question.interface';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import {Router} from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  editQuestionConfig: any;
  editQuestionForm: FormGroup;
  quesionContent: IQuestion;

  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService,
    private questionService: QuestionServiceService,
    private router: Router,
    private ngxService: NgxUiLoaderService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.editQuestionConfig = ValidationConfig.questionConfig();
    this.editQuestionForm =this.fb.group(this.editQuestionConfig);
    this.quesionContent = this.sharedService.questionToEdit;
    this.editQuestionForm.patchValue(this.quesionContent);
  }

  onSubmit() {
    if(this.editQuestionForm.valid) {
      this.ngxService.start();
      let updatedQ = this.editQuestionForm.value;
      updatedQ._id = this.quesionContent._id;
      this.questionService.updateQuestion(updatedQ).then((updateQuestion)=>{
        this.ngxService.stop();
        this.toastr.success('Success', 'Update Successful!');
        this.router.navigate(['questions','list'])
      }).catch((err)=>{
        this.ngxService.stop();
        this.toastr.error('Error', 'Update Failed!');
      });
    }
    else {
      this.sharedService.validateAllFields(this.editQuestionForm);
    }
    
  }

}
