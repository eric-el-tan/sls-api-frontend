import { Post } from './post';
import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sls-api-frontend';

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts: Observable<Post[]>;
  // post: Observable<any>;

  constructor(private http: HttpClient) { }

  getPosts() {
    this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts');
  }
  getPost() {

    let params = new HttpParams().set('userId', '1');
    this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts', { params });
  }
}
