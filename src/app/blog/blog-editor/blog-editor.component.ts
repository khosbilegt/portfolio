import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChipsModule } from 'primeng/chips';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-blog-editor',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    InputGroupModule,
    ChipsModule,
    FileUploadModule,
    InputTextareaModule,
    ButtonModule,
    DropdownModule,
  ],
  templateUrl: './blog-editor.component.html',
  styleUrl: './blog-editor.component.css',
})
export class BlogEditorComponent {
  Icons: Record<string, string> = {
    PLUS: PrimeIcons.PLUS,
    DELETE: PrimeIcons.TRASH,
  };
  values: any[] = [];
  contents: any[] = [];
  contentTypes: any[] = [
    {
      name: 'Paragraph',
      value: 'text',
    },
    {
      name: 'Code Block',
      value: 'code',
    },
    {
      name: 'Image',
      value: 'image',
    },
  ];
  contentValues = [];

  addContent(index: number) {
    this.contents = [
      ...this.contents.slice(0, index),
      {
        type: 'text',
        value: '',
      },
      ...this.contents.slice(index),
    ];
  }

  removeContent(index: number) {
    this.contents = [
      ...this.contents.slice(0, index),
      ...this.contents.slice(index + 1),
    ];
  }
}
