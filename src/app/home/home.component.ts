import { Component } from '@angular/core';
import { ExperienceComponent } from './experience/experience.component';
import { HeroComponent } from './hero/hero.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ExperienceComponent, AnimateOnScrollModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
