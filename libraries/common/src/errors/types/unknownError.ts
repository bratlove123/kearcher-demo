import { BaseError } from './baseError';

export class UnknownError extends BaseError {
  constructor(message: string) {
    super(message);
    this.name = 'Unknown Error';

    Object.setPrototypeOf(this, UnknownError.prototype);
  }
}
