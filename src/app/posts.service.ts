import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  getPosts() {
    return this.http.get(postsUrl);
  }

  constructor(private http: HttpClient) { }
}
