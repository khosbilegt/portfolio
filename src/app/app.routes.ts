import { Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog/blog-view/blog-view.component';
import { BlogEditorComponent } from './blog/blog-editor/blog-editor.component';

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
    path: 'blogs/:title',
    component: BlogViewComponent,
  },
  {
    path: 'blogs/:title/edit',
    component: BlogEditorComponent,
  },
  {
    path: '**',
    component: BlogEditorComponent,
    // component: HomeComponent,
    title: 'Khosbilegt.B - Software Developer',
  },
];
