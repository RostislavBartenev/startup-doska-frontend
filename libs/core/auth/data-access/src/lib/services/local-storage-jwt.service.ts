import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageJwtService {
  getItem(): string | null {
    return localStorage.getItem('token') || null;
  }

  setItem(data: string): string {
    localStorage.setItem('token', data);
    return data;
  }

  removeItem(): boolean {
    localStorage.removeItem('token');
    return true;
  }
}
