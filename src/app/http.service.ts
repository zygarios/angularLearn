import { Injectable } from "@angular/core";
import { Post } from "./app.component";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(
      "https://jsonplaceholder.typicode.com/posts"
    );
  }
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
  }
  getPostByUser(userId: number): Observable<Array<Post>> {
    const params = new HttpParams().set("userId", userId.toString());
    return this.http.get<Array<Post>>(
      "https://jsonplaceholder.typicode.com/posts",
      { params }
    );
  }
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(
      "https://jsonplaceholder.typicode.com/posts",
      post
    );
  }
}
