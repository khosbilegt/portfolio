import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PrimeIcons } from 'primeng/api';
import { ChipModule } from 'primeng/chip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    ChipModule,
    CommonModule,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  constructor(private http: HttpClient) {}

  searchIcon: PrimeIcons = PrimeIcons.SEARCH;
  cancelIcon: PrimeIcons = PrimeIcons.TIMES;

  currentText: string = '';
  allTags: Map<string, boolean> = new Map();

  onEnter() {}

  selectTag(tag: string) {
    this.allTags.set(tag, !this.allTags.get(tag));
  }

  ngOnInit(): void {
    this.http
      .get<any>('http://127.0.0.1:8080/api/blog/tag')
      .subscribe((response) => {
        for (var i = 0; i < response?.tags?.length; i++) {
          this.allTags.set(response.tags[i], false);
        }
      });
  }
}
