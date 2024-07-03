import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PrimeIcons } from 'primeng/api';
import { ChipModule } from 'primeng/chip';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    ChipModule,
    CommonModule,
    ImageModule,
    TagModule,
    CardModule,
    DataViewModule,
    SkeletonModule,
    AnimateOnScrollModule,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  constructor(private http: HttpClient) {}

  searchIcon: PrimeIcons = PrimeIcons.SEARCH;
  cancelIcon: PrimeIcons = PrimeIcons.TIMES;

  isLoading: boolean = true;
  currentText: string = '';
  allBlogs: any[] = [];
  visibleBlogs: any[] = [];
  allTags: Map<string, boolean> = new Map();

  onEnter() {
    this.isLoading = true;
    this.searchBlog();
  }

  searchBlog() {
    this.http
      .get<any>('https://khosbilegt.dev/api/blog?title=' + this.currentText)
      .subscribe((response) => {
        this.allBlogs = response.data;
        this.handleVisibleBlogs();
        this.isLoading = false;
      });
  }

  handleVisibleBlogs() {
    const selectedTags = Array.from(this.allTags.entries())
      .filter(([, isSelected]) => isSelected)
      .map(([tag]) => tag);

    const tempVisibleBlogs = this.allBlogs.filter((blog) => {
      return selectedTags.every((tag) => blog.tags.includes(tag));
    });

    this.visibleBlogs = tempVisibleBlogs;
  }

  selectTag(tag: string) {
    this.allTags.set(tag, !this.allTags.get(tag));
    this.handleVisibleBlogs();
  }

  ngOnInit(): void {
    this.http
      .get<any>('https://khosbilegt.dev/api/blog/tag')
      .subscribe((response) => {
        for (var i = 0; i < response?.tags?.length; i++) {
          this.allTags.set(response.tags[i], false);
        }
      });
    this.onEnter();
  }
}
