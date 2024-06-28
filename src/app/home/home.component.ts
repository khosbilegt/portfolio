import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, ButtonModule, ImageModule, AvatarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
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
