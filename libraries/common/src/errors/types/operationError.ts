import { BaseError } from './baseError';

export class OperationError extends BaseError {
  constructor(message: string) {
    super(message);
    this.name = 'Operation Error';

    Object.setPrototypeOf(this, OperationError.prototype);
  }
}
