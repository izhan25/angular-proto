import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';
import { AppUrl } from './common';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private appUrl: string = AppUrl;
  private postUrl: string = this.appUrl + '/posts';
  private postLimit: string = '?_limit=5';

  constructor(private http: HttpClient) { }

  // Get All Posts
  getPosts(): Observable<Post[]> {
    const url = this.postUrl + this.postLimit;
    return this.http.get<Post[]>(url);
  }

  // Add new Post
  addPost(post: any): Observable<any> {
    const url = this.postUrl;
    return this.http.post(url, post, httpOptions);
  }

  // delete Todo
  deletePost(post: Post): Observable<any> {
    const url = `${this.postUrl}/${post.id}`
    return this.http.delete(url, httpOptions);
  }
}
