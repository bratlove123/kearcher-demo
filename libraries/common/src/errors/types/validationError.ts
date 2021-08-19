import { BaseError } from './baseError';

export class ValidationError extends BaseError {
  public readonly code: string;

  constructor(code: string, message: string) {
    super(message);

    this.code = code;
    this.name = 'Validation Error';

    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
