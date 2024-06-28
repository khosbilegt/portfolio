import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FilterMatchMode, PrimeNGConfig } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MegaMenuItem } from 'primeng/api';
import { PrimeIcons } from 'primeng/api';
import { ImageModule } from 'primeng/image';
import { FormsModule } from '@angular/forms';
import { ThemeService } from './services/theme.service';
import { LocalStorageService } from './services/local-storage.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MegaMenuModule,
    CommonModule,
    ImageModule,
    ToggleButtonModule,
    FormsModule,
    ProgressSpinnerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  Icons = {
    DARK_MODE: PrimeIcons.MOON,
    LIGHT_MODE: PrimeIcons.SUN,
  };

  title = 'portfolio-blog';
  menuItems: MegaMenuItem[] = [];
  private _isDarkMode: boolean = false;

  constructor(
    private primeConfig: PrimeNGConfig,
    private theme: ThemeService,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    var isDarkMode = false;
    var darkModeString = this.localStorage.getItem('darkMode');
    if (darkModeString === 'true') {
      isDarkMode = true;
    } else if (darkModeString === 'false') {
      isDarkMode = false;
    } else if (typeof window !== 'undefined') {
      isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.setDarkMode(isDarkMode);
    this.primeConfig.ripple = true;
    this.primeConfig.filterMatchModeOptions = {
      text: [
        FilterMatchMode.STARTS_WITH,
        FilterMatchMode.CONTAINS,
        FilterMatchMode.NOT_CONTAINS,
        FilterMatchMode.ENDS_WITH,
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS,
      ],
      numeric: [
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS,
        FilterMatchMode.LESS_THAN,
        FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
        FilterMatchMode.GREATER_THAN,
        FilterMatchMode.GREATER_THAN_OR_EQUAL_TO,
      ],
      date: [
        FilterMatchMode.DATE_IS,
        FilterMatchMode.DATE_IS_NOT,
        FilterMatchMode.DATE_BEFORE,
        FilterMatchMode.DATE_AFTER,
      ],
    };
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-video',
        routerLink: '/',
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          [
            {
              label: 'Event 1',
              items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }],
            },
            {
              label: 'Event 2',
              items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }],
            },
          ],
          [
            {
              label: 'Event 3',
              items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }],
            },
            {
              label: 'Event 4',
              items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }],
            },
          ],
        ],
      },
      {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        items: [
          [
            {
              label: 'Setting 1',
              items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }],
            },
            {
              label: 'Setting 2',
              items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }],
            },
            {
              label: 'Setting 3',
              items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }],
            },
          ],
          [
            {
              label: 'Technology 4',
              items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }],
            },
          ],
        ],
      },
    ];
  }

  get isDarkMode(): boolean {
    return this.getDarkMode();
  }

  set isDarkMode(value: boolean) {
    this.setDarkMode(value);
  }

  getDarkMode(): boolean {
    return this._isDarkMode;
  }

  setDarkMode(value: boolean) {
    this._isDarkMode = value;
    if (this._isDarkMode) {
      this.theme.loadTheme('dark');
    } else {
      this.theme.loadTheme('light');
    }
    this.localStorage.setItem('darkMode', this._isDarkMode.toString());
  }
}
