import { BaseError } from './baseError';

export class DatabaseError extends BaseError {
  constructor(message: string) {
    super(message);
    this.name = 'Database Error';

    Object.setPrototypeOf(this, DatabaseError.prototype);
  }
}
