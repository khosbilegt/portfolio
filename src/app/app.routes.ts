import { Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'projects',
    component: ProjectComponent,
  },
  {
    path: 'blogs',
    component: BlogComponent,
  },
  {
    path: '**',
    component: HomeComponent,
    title: 'Khosbilegt.B - Software Developer',
  },
];
