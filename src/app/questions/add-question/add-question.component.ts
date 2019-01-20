import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidationConfig } from './../../formConfig/validationConfig';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  addQuestionConfig: any;
  addQuestionForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private questionService: QuestionServiceService,
    private sharedService: SharedService,
    private router: Router,
    private ngxService: NgxUiLoaderService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.addQuestionConfig = ValidationConfig.questionConfig();
    this.addQuestionForm = this.fb.group(this.addQuestionConfig);

  }

  onSubmit() {
    if (this.addQuestionForm.valid) {
      this.ngxService.start();
      this.questionService.addQuestion(this.addQuestionForm.value).then((res) => {
        this.ngxService.stop();
        this.toastr.success('Success', 'Question Added Successfully!');
        this.router.navigate(['questions', 'list']);
      }).catch((err) => {
        this.ngxService.stop();
        this.toastr.error('Error', 'Update Failed!');
      });
    }
    else {
      this.sharedService.validateAllFields(this.addQuestionForm);
    }

  }

}
