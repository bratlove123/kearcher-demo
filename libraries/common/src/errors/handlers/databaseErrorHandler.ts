import { QueryFailedError } from 'typeorm';
import { ChainHandler } from '../../utils';
import { Logger } from '../../logger';

const typeormError = [QueryFailedError];

export class DatabaseErrorHandler extends ChainHandler<Error> {
  private prefix: string;
  protected logger: Logger;

  constructor({ prefix }: { prefix: string }) {
    super();
    this.prefix = prefix;
    this.logger = new Logger({ ctx: 'DatabaseErrorHandler' });
  }

  /**
   * Can Handle
   *
   * @param err Error
   * @returns boolean
   */
  canHandle(err: Error): boolean {
    return typeormError.some(errorClass => err instanceof errorClass);
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
      this.logger.error({ err }, 'An database error occurred');
      throw new Error(this.prefix + ':' + '97');
    }

    super.handle(err);
  }
}
