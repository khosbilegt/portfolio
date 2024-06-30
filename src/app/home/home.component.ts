import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ExperienceComponent } from './experience/experience.component';
import { HeroComponent } from './hero/hero.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ScrollService } from '../services/scroll-service.service';
import { ProjectCarouselComponent } from './project-carousel/project-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ExperienceComponent,
    ProjectCarouselComponent,
    AnimateOnScrollModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('experience') experience!: ElementRef;
  @ViewChild('projects') projects!: ElementRef;

  constructor(private scroller: ScrollService) {}

  ngAfterViewInit() {
    this.scroller.setElementToScroll(
      'experience',
      this.experience.nativeElement
    );
    this.scroller.setElementToScroll('projects', this.projects.nativeElement);
  }
}
