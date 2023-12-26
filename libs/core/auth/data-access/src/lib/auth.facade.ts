import { Store } from '@ngrx/store';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  store = inject(Store);
}
