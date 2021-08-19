import { AutoMap } from '@automapper/classes';

export class UserDTO {
  @AutoMap()
  id: string;

  @AutoMap()
  name: string;

  @AutoMap()
  type: string;

  @AutoMap()
  createdAt: number;

  @AutoMap()
  updatedAt: number;
}

