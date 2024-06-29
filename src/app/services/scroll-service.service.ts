// shared.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private elementsMap: Map<string, HTMLElement> = new Map();

  setElementToScroll(name: string, element: HTMLElement) {
    this.elementsMap.set(name, element);
  }

  scrollToElement(name: string) {
    this.elementsMap.get(name)?.scrollIntoView({ behavior: 'smooth' });
  }
}
