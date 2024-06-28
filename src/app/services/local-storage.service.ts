import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getItem(key: string): string | null {
    if (this.isLocalStorageSupported()) {
      return localStorage.getItem(key);
    }
    return null;
  }

  setItem(key: string, value: string): void {
    if (this.isLocalStorageSupported()) {
      localStorage.setItem(key, value);
    }
  }

  private isLocalStorageSupported(): boolean {
    return typeof window !== 'undefined' && 'localStorage' in window;
  }

  clear(): void {
    localStorage.clear();
  }
}
