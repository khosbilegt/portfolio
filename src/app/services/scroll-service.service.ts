import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private elementsMap: Map<string, HTMLElement> = new Map();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  setElementToScroll(name: string, element: HTMLElement) {
    this.elementsMap.set(name, element);
  }

  scrollToElement(name: string) {
    new Promise<void>((resolve) => {
      if (this.elementsMap.has(name)) {
        resolve();
      } else {
        if (isPlatformBrowser(this.platformId)) {
          const observer = new MutationObserver(() => {
            if (this.elementsMap.has(name)) {
              resolve();
              observer.disconnect();
            }
          });
          observer.observe(document.body, {
            childList: true,
            subtree: true,
          });
        }
      }
    }).then(() => {
      this.elementsMap.get(name)?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
