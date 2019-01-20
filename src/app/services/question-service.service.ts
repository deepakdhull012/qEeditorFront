import { Injectable } from '@angular/core';
import { IQuestion } from '../interfaces/question.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  url = 'https://qeditor.herokuapp.com/'
  constructor(private http: HttpClient) { }

  getAllQuestions() {
    return this.http.get<[]>(`${this.url}question`).toPromise();
  }

  getQuestionsBySubsetId(subsetId) {
    return this.http.get<[]>(`${this.url}question/${subsetId}`).toPromise();
  }

  updateQuestion(question: IQuestion) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Access-Control-Allow-Origin', '*');
    return this.http.put(`${this.url}question`,question).toPromise();
  }

  addQuestion(question: IQuestion) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Access-Control-Allow-Origin', '*');
    return this.http.post(`${this.url}question`,question).toPromise();
  }
}
