import { Repository, EntityRepository } from 'typeorm';
import { Logger } from 'common';
import { User } from '../entities';

type GetUserParams = {
    userId: string;
  };

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  private logger: Logger;

  constructor() {
    super();
    this.logger = new Logger({ ctx: 'UserRepository' });
  }

  /**
   * Get User
   *
   * @param params GetUserParams
   * @returns Promise<User>
   */
  getUser(params: GetUserParams): Promise<User> {
    this.logger.trace({ params }, 'getUser() || params');

    const { userId } = params;

    // return this.findOne({ id: userId });

    // TODO: MockData => need to be removed

    return Promise.resolve(null);
  }
}