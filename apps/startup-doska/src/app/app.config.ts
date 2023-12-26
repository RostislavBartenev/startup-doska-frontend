import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';

import { API_URL } from '@core/http-client';
import { authEffects, authFeature } from '@core/auth';

import { appRoutes } from './app.routes';

import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(authEffects),
    provideStore({
      [authFeature.name]: authFeature.reducer,
    }),
    provideRouter(
      appRoutes,
      withViewTransitions(),
      withComponentInputBinding()
    ),
    provideRouterStore(),
    provideHttpClient(),
    { provide: API_URL, useValue: environment.api_url },
  ],
};
