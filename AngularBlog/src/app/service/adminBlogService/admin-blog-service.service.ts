import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArrPosts } from 'src/app/interface/adminBlogInterface/admin-blog-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminBlogServiceService {
  private url = environment.url;

  constructor(
    private http: HttpClient
  ) {
    this.url += 'adminPosts';
   }


  //  getPosts(): Observable<Array<IArrPosts>> {
  getPosts(): Observable<IArrPosts[]> {
     return this.http.get<IArrPosts[]>(this.url);
   }

  addPosts(post: IArrPosts): Observable<IArrPosts> {
    return this.http.post<IArrPosts>(this.url, post);
  }

  updatePost(post: IArrPosts): Observable<IArrPosts> {
    return this.http.put<IArrPosts>(`${this.url}/${post.id}`, post);
  }
  deletePost(post: IArrPosts): Observable<IArrPosts> {
    return this.http.delete<IArrPosts>(`${this.url}/${post.id}`);
  }
}
