import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
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
export class ProjectCarouselComponent implements AfterViewInit {
  constructor(private http: HttpClient) {}

  projects: any[] = [];

  ngAfterViewInit(): void {
    this.http
      .get<any>('http://127.0.0.1:8080/api/blog?type=project')
      .subscribe((response) => {
        this.projects = response.data;
      });
  }
}
