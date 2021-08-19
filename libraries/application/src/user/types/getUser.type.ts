import { UserDTO } from '../dtos'

export type GetUserParams = {
  userId: string;
};

export type GetUserResult = {
  user: UserDTO;
};
