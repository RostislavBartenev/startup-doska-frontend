import { DeepReadonly } from '@core/utils';

export type UserDTO = DeepReadonly<{
  fullName: string;
  email: string;
  password: string;
  id: number;
}>;

export type UserEntity = Omit<UserDTO, 'password'>;
