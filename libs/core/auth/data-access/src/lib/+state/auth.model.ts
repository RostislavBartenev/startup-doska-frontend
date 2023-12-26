import { UserDTO } from '@core/models';

export type AuthPayloadDTO = {
  email: string;
  password: string;
};

export type AuthResponseDTO = {
  token: string;
  data: UserDTO;
};

export type RegisterPayloadDTO = {
  fullName: string;
  email: string;
  password: string;
  id: number;
};
