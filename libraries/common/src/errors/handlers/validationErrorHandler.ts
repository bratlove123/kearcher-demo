import { ChainHandler } from '../../utils';
import { Logger } from '../../logger';
import { ValidationError } from './../types/validationError';

export class ValidationErrorHandler extends ChainHandler<Error> {
  private prefix: string;
  protected logger: Logger;

  constructor({ prefix }: { prefix: string }) {
    super();
    this.prefix = prefix;
    this.logger = new Logger({ ctx: 'ValidationErrorHandler' });
  }

  /**
   * Can Handle
   *
   * @param err Error
   * @returns boolean
   */
   canHandle(err: Error): boolean {
    return err instanceof ValidationError;
  }

  /**
   * Handle
   *
   * @param err Error
   *
   * @returns void
   */
  handle(err: Error): void {
    if (this.canHandle(err)) {
      this.logger.error({ err }, 'An validation error occurred');
      throw new Error(this.prefix + ':' + (err as ValidationError).code);
    }

    super.handle(err);
  }
}
