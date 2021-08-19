import { createMapper, mapFrom, CamelCaseNamingConvention } from '@automapper/core';
import { classes } from '@automapper/classes';
import { User } from 'database';
import { UserDTO } from '../dtos';

export const userMapper = createMapper({
  name: 'userMapper',
  pluginInitializer: classes,
});

userMapper
  .createMap(User, UserDTO, {
    namingConventions: new CamelCaseNamingConvention(),
  })
  .forMember(
    destination => destination.createdAt,
    mapFrom(source => (source.createdAt ? source.createdAt.getTime() : null))
  )
  .forMember(
    destination => destination.updatedAt,
    mapFrom(source => (source.updatedAt ? source.updatedAt.getTime() : null))
  );

/**
 * Map User
 *
 * @param user User
 * @returns UserDTO
 */
export const mapUser = (user: User): UserDTO => userMapper.map(user, UserDTO, User);
