import { createActionGroup, props } from '@ngrx/store';

import {
  AuthPayloadDTO,
  AuthResponseDTO,
  RegisterPayloadDTO,
} from './auth.model';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    login: props<{ authDTO: AuthPayloadDTO }>(),
    loginSuccess: props<{ res: AuthResponseDTO }>(),
    loginFailure: props<{ error: Error }>(),

    register: props<{ registerDTO: RegisterPayloadDTO }>(),
    registerSuccess: props<{ res: AuthResponseDTO }>(),
    registerFailure: props<{ error: Error }>(),
  },
});
