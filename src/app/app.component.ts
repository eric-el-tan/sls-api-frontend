import { Project } from './project';
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

  readonly DEMO_ROOT_URL = 'https://jsonplaceholder.typicode.com';
  readonly ROOT_URL = 'https://e4cfhn38oe.execute-api.ap-southeast-2.amazonaws.com/dev';

  projects: Observable<Project[]>;
  posts: any;

  constructor(private http: HttpClient) { }

  getPosts() {
    this.posts = this.http.get(this.DEMO_ROOT_URL + '/posts');
  }

  getProjects() {
    console.log(this.ROOT_URL + '/projects');
    this.projects = this.http.get<Project[]>(this.ROOT_URL + '/projects');
  }

  getProject() {
    let params = new HttpParams().set('userId', '1');
    this.projects = this.http.get<Project[]>(this.ROOT_URL + '/projects', { params });
  }
}
