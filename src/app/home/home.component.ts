import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ExperienceComponent } from './experience/experience.component';
import { HeroComponent } from './hero/hero.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ScrollService } from '../services/scroll-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ExperienceComponent, AnimateOnScrollModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('experience') experience!: ElementRef;

  constructor(private scroller: ScrollService) {}

  ngAfterViewInit() {
    this.scroller.setElementToScroll(
      'experience',
      this.experience.nativeElement
    );
  }
}
