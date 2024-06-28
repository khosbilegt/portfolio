import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [StepperModule, ButtonModule, ImageModule, ScrollPanelModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  steps: any[] = [
    {
      header: 'National University of Mongolia',
      position: 'Bachelor / Researcher',
      icon: '/assets/images/home/num.png',
      start: {
        year: 2020,
        month: 'September',
      },
      end: {
        year: 2023,
        month: 'June',
      },
      technologies: [
        {
          name: 'Vulkan API',
          url: 'https://www.khronos.org/vulkan/',
        },
      ],
      content: [
        "My programming journey started in 2019 when I started studying at the University of Mongolia, before which I hadn't dabbled in anything other than simple Leetcode problems.",
        "Completed a Bachelor's Degree in Computer Science within 3 years. My thesis was on Motion-based Interactive Game Development wherein I proposed an architecture that allows for the rapid implementation of new motion controllers rather than supporting a single product.",
        'During my sophomore year, I became the Lead Researcher of the Computer Graphics Laboratory due to a 2-year vacancy caused by Covid-19 and participated in multiple competitions, leading a team of 4-6 students.',
      ],
      url: '',
    },
    {
      header: 'Digital Solutions LLC',
      position: 'Game Developer',
      technologies: [],
      icon: '/assets/images/home/ds.png',
      start: {
        year: 2020,
        month: 'December',
      },
      end: {
        year: 2020,
        month: 'December',
      },
      content: ['test'],
      url: '',
    },
    {
      header: 'Unitel LLC',
      position: 'Backend Developer',
      technologies: [],
      icon: '/assets/images/home/unitel.png',
      start: {
        year: 2020,
        month: 'December',
      },
      end: {
        year: 2020,
        month: 'December',
      },
      content: ['test', 'fuc'],
      url: '',
    },
  ];
  para_index: number = 0;
}
