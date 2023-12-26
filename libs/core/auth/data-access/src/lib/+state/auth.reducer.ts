import { LoadingStatus, UserEntity } from '@core/models';
import { createFeature, createReducer, on } from '@ngrx/store';
import { authActions } from './auth.actions';

export type AuthState = {
  loadingStatus: LoadingStatus;
  error: string | null;
  user: UserEntity | null;
};

export const AuthInitialState: AuthState = {
  loadingStatus: 'init',
  error: null,
  user: null,
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    AuthInitialState,
    on(authActions.login, authActions.register, (state) => ({
      ...state,
      loadingStatus: 'loading' as const,
    })),
    on(
      authActions.loginSuccess,
      authActions.registerSuccess,
      (state, { res }) => ({
        ...state,
        authStatus: 'loaded' as const,
        loggedUser: res.data,
      })
    )
  ),
});
