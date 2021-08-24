import { Repository, EntityRepository } from 'typeorm';
import { Logger } from 'common';
import { User } from '../entities';
import {DataMapper} from '@aws/dynamodb-data-mapper';
import DynamoDB = require('aws-sdk/clients/dynamodb');

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

    const mapper = new DataMapper({
      client: new DynamoDB({region: 'us-west-2'}), // the SDK client used to execute operations
      tableNamePrefix: 'dev_' // optionally, you can provide a table prefix to keep your dev and prod tables separate
  });

  mapper.get(Object.assign(new User, {id: 'foo', createdAt: new Date(946684800000)}))
    .then(myItem => {
      return Promise.resolve(myItem);
    })
    .catch(err => {
        // the item was not found
    })

    return Promise.resolve(null);
  }
}