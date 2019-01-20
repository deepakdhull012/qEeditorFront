import { Routes } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionsComponent } from './questions.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';

export const questionRoutes: Routes = [
    {
      path: '',
      component: QuestionsComponent,
      children: [
          {
              path: 'list',
              component: QuestionListComponent
          },
          {
              path: 'add',
              component: AddQuestionComponent
          },
          {
              path: 'edit',
              component: EditQuestionComponent
          },
          {
              path: '',
              redirectTo: 'list'
          }
      ]
    }
  ];