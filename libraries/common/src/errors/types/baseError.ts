export class BaseError extends Error {
  public readonly message: string;

  constructor(message: string) {
    super();
    this.name = 'Base Error';
    this.message = message;

    if (process.env.EXPOSE_ERROR_STACK === 'true') {
      Error.captureStackTrace(this);
    }

    Object.setPrototypeOf(this, BaseError.prototype);
  }
}
