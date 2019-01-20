import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { RouterModule } from '@angular/router';
import {questionRoutes} from './question.routes'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [QuestionsComponent, QuestionListComponent, EditQuestionComponent, AddQuestionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(questionRoutes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class QuestionsModule { }
