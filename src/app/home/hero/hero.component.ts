import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AvatarModule, ButtonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  current_employment = {
    name: 'Unitel',
    role: 'Software Developer',
    url: 'https://www.unitel.mn/',
  };
  intro_name: string = 'Hi, I am Khosoo 🥸';
  intro_role: string = 'I build reliable, robust and scalable solutions.';
  intro_job: string = 'Software Developer';
  intro_work: string =
    'I specialize in the research of obscure technologies and back-end services.';
}
