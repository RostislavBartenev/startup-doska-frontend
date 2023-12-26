import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';

import { ApiService } from '@core/http-client';

import { authActions } from './auth.actions';
import { AuthPayloadDTO, AuthResponseDTO } from './auth.model';

export const loginEffect$ = createEffect(
  (api = inject(ApiService), actions$ = inject(Actions)) =>
    actions$.pipe(
      ofType(authActions.login),
      switchMap(({ authDTO }) =>
        api.post<AuthResponseDTO, AuthPayloadDTO>('/auth', authDTO).pipe(
          map((res) => authActions.loginSuccess({ res })),
          catchError((error) => of(authActions.loginFailure({ error })))
        )
      )
    ),
  { functional: true }
);

export const registerEffect$ = createEffect(
  (api = inject(ApiService), actions$ = inject(Actions)) =>
    actions$.pipe(
      ofType(authActions.register),
      switchMap(({ registerDTO }) =>
        api
          .post<AuthResponseDTO, AuthPayloadDTO>('/register', registerDTO)
          .pipe(
            map((res) => authActions.registerSuccess({ res })),
            catchError((error) => of(authActions.registerFailure({ error })))
          )
      )
    ),
  { functional: true }
);
