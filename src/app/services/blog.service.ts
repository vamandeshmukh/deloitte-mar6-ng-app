import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getAllBlogs = () => {
    console.log('getAllBlogs');
    return this.http.get(this.blogUrl);
  };

  getBlogById = (blogId: number) => {
    console.log(blogId);
    return this.http.get(`${this.blogUrl}/${blogId}`);
  };

  addNewBlog = (blogPost: any) => {
    console.log(blogPost);
    return this.http.post(this.blogUrl, blogPost);
  };

}







