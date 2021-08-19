import { inject, injectable, Container } from 'inversify';
import { Logger, errors } from 'common';
import { UserRepository } from 'database';
import { GetUserParams, GetUserResult } from '../types';
import { mapUser } from '../mappers';

@injectable()
export class GetUser {
  constructor(
    @inject(Logger) private logger: Logger,
    @inject(UserRepository) private userRepository: UserRepository,
  ) {}

  /**
   * Get User
   *
   * @param params GetUserParams
   *
   * @returns Promise<GetUserResult>
   */
  async getUser(params: GetUserParams): Promise<GetUserResult> {
    this.logger.info({ params }, 'getUser() || params');

    // Get user
    const { userId } = params;
    const user = await this.userRepository.getUser({ userId });
    if (!user) {
      const errorMessage = 'getUser() : User not found';
      this.logger.error({ errorMessage });
      throw new errors.types.ValidationError('11', errorMessage);
    }
    const userDTO = mapUser(user);

    return { user: userDTO};
  }
}


let instance: GetUser;

/**
   * Get User
   *
   * @param params GetUserParams
   *
   * @returns Promise<GetUserResult>
   */
export const getUser = async (params: GetUserParams): Promise<GetUserResult> => {
  if (!instance) {
    const container = new Container();
    container.bind<Logger>(Logger).toConstantValue(new Logger({ ctx: 'GetUserAction' }));
    container.bind<UserRepository>(UserRepository).to(UserRepository).inSingletonScope();
    container.bind<GetUser>(GetUser).to(GetUser).inSingletonScope();

    instance = container.get<GetUser>(GetUser);
  }

  return instance.getUser(params);
};
