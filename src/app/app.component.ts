import { Post } from './post';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  getPosts() {
    this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts');
  }
}
