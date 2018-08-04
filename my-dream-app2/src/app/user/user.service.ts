import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { parseHttpResponse } from 'selenium-webdriver/http';

@Injectable()
export class UserService {
  constructor(private http: Http) {}
  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
  addUser() {
    const user = {  id: 101,
      title: 'foo',
      body: 'bar',
      userId: 1};

      const post = {  id: 101,
        title: 'foo',
        author: 'bar',
        userId: 1};

    return this.http.post('http://localhost:3000/posts/', post)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
