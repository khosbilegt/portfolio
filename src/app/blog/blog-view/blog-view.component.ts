import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-blog-view',
  standalone: true,
  imports: [ImageModule, CardModule],
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
      .get<any>('https://khosbilegt.dev/api/blog/' + this.blogTitle)
      .subscribe((response) => {
        this.blog = response;
      });
  }
}
