import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-view',
  standalone: true,
  imports: [],
  templateUrl: './blog-view.component.html',
  styleUrl: './blog-view.component.css',
})
export class BlogViewComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  blog: any = {};
  blogTitle: string = '';

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.blogTitle = params['title'];
      this.searchBlog();
    });
  }

  searchBlog() {
    this.http
      .get<any>('http://127.0.0.1:8080/api/blog/' + this.blogTitle)
      .subscribe((response) => {
        this.blog = response;
      });
  }
}
