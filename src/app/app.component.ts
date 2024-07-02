import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
  UrlTree,
} from '@angular/router';
import { Breakpoints } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FilterMatchMode, MenuItem, PrimeNGConfig } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { PrimeIcons } from 'primeng/api';
import { ThemeService } from './services/theme.service';
import { LocalStorageService } from './services/local-storage.service';
import { ScrollService } from './services/scroll-service.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MenubarModule,
    ImageModule,
    ToggleButtonModule,
    FormsModule,
    ButtonModule,
    PanelMenuModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit {
  Icons: Record<string, string> = {
    DARK_MODE: PrimeIcons.MOON,
    LIGHT_MODE: PrimeIcons.SUN,
    HOME: PrimeIcons.HOME,
    WORK: PrimeIcons.BUILDING,
    PROJECTS: PrimeIcons.FOLDER,
    BLOGS: PrimeIcons.PENCIL,
    LINKEDIN: PrimeIcons.LINKEDIN,
    GITHUB: PrimeIcons.GITHUB,
    FACEBOOK: PrimeIcons.FACEBOOK,
  };
  isMenuHidden: boolean = false;
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: this.Icons['HOME'],
      routerLink: '/',
    },
    {
      label: 'Experience',
      icon: this.Icons['WORK'],
      command: () => {
        this.router.navigateByUrl('?scroll=experience');
      },
    },
    {
      label: 'Projects',
      icon: this.Icons['PROJECTS'],
      command: () => {
        this.router.navigateByUrl('?scroll=projects');
      },
    },
    {
      label: 'Blogs',
      icon: this.Icons['BLOGS'],
      routerLink: '/blogs',
    },
  ];
  footerLinks: any[] = [
    { icon: this.Icons['GITHUB'], url: 'https://github.com/khosbilegt/' },
    {
      icon: this.Icons['LINKEDIN'],
      url: 'https://www.linkedin.com/in/khosbilegt-bilegsaikhan-82929424b/',
    },
    {
      icon: this.Icons['FACEBOOK'],
      url: 'https://www.facebook.com/khosbilegt.bilegsaikhan.5/',
    },
  ];
  isSidebarVisible: boolean = false;
  private _isDarkMode: boolean = false;

  constructor(
    private primeConfig: PrimeNGConfig,
    private theme: ThemeService,
    private localStorage: LocalStorageService,
    private responsive: BreakpointObserver,
    private scroller: ScrollService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  handleScrollToElement(element: string) {
    this.scroller.scrollToElement(element);
  }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        var currentUrl = this.router.url;
        const urlTree: UrlTree = this.router.parseUrl(currentUrl);
        this.handleScrollToElement(urlTree['queryParams']['scroll']);
      });
  }

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
    this.responsive.observe([Breakpoints.Handset]).subscribe((result) => {
      this.isMenuHidden = result.matches;
    });
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
