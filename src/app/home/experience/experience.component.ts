import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    StepperModule,
    ButtonModule,
    ImageModule,
    ScrollPanelModule,
    TagModule,
  ],
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
          name: 'Unreal Engine 4',
          url: 'https://opencv.org/',
        },
        {
          name: 'Vulkan API',
          url: 'https://www.khronos.org/vulkan/',
        },
        {
          name: 'OpenCV',
          url: 'https://opencv.org/',
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
      technologies: [
        {
          name: 'Unreal Engine 4',
          url: 'https://opencv.org/',
        },
        {
          name: 'C++',
          url: 'https://opencv.org/',
        },
      ],
      icon: '/assets/images/home/ds.png',
      start: {
        year: 2022,
        month: 'June',
      },
      end: {
        year: 2022,
        month: 'November',
      },
      content: [
        'During my time in the Computer Graphics Library, I had the opportunity to intern at Digital Solutions, a company founded by the alumni of the laboratory which extended to a period of roughly 6 months. I worked full-time during the summer and part-time alongside my studies.',
        'My first task was implementing a Linked List from scratch for a sorting algorithm that stores the info of several instances of the same 3D mesh to optimize rendering, allowing me to build a solid foundation of data structures.',
        'I was responsible for implementing a Media Streaming tool that is synchronized across all instances of a multiplayer game with over 5,000 users.',
      ],
      url: '',
    },
    {
      header: 'Unitel LLC',
      position: 'Backend Developer',
      technologies: [
        {
          name: 'Quarkus',
          url: 'https://opencv.org/',
        },
        {
          name: 'Grafana',
          url: 'https://opencv.org/',
        },
        {
          name: 'Prometheus',
          url: 'https://opencv.org/',
        },
        {
          name: 'Asterisk PBX',
          url: 'https://opencv.org/',
        },
        {
          name: 'Diameter Protocol',
          url: 'https://opencv.org/',
        },
        {
          name: 'Kubernetes',
          url: 'https://opencv.org/',
        },
      ],
      icon: '/assets/images/home/unitel.png',
      start: {
        year: 2023,
        month: 'June',
      },
      end: {
        month: 'PRESENT',
      },
      content: [
        'After a small period of focusing on my studies, I joined Unitel LLC, the largest telecom operator in Mongolia, as a Backend Developer a month before my graduation, where my journey as a software engineer truly began.',
        'During my internship period, I was tasked with researching Kubernetes to modernize the backend architecture of the company. After a couple months of research, the company has decided to slowly transition to Kubernetes, starting with the backend services associated with its mobile application.',
        'After being offered a full-time position, based on my previous experiences with unorthodox technologies and my Kubernetes research, I was tasked with various tasks that require research of unfamiliar technologies such as the Diameter Protocol and Asterisk PBX.',
      ],
      url: '',
    },
  ];
  para_index: number = 0;
}
