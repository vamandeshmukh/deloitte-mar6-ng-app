import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blogId: any = 22;
  blogData: Blog = {};

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogById(this.blogId)
      .subscribe((resp) => {
        console.log(resp);
        this.blogData = resp;
      });

  };

}

