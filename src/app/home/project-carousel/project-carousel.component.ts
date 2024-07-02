import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-project-carousel',
  standalone: true,
  imports: [CarouselModule, ImageModule, TagModule],
  templateUrl: './project-carousel.component.html',
  styleUrl: './project-carousel.component.css',
})
export class ProjectCarouselComponent implements OnInit {
  constructor(private http: HttpClient) {}

  projects: any[] = [];

  ngOnInit(): void {
    this.http
      .get<any>('https://khosbilegt.dev/api/blog?type=project')
      .subscribe((response) => {
        this.projects = response.data;
      });
  }
}
