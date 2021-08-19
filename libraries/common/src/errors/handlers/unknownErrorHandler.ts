import { ChainHandler } from '../../utils';
import { Logger } from '../../logger';

export class UnknownErrorHandler extends ChainHandler<Error> {
  private prefix: string;
  protected logger: Logger;

  constructor({ prefix }: { prefix: string }) {
    super();
    this.prefix = prefix;
    this.logger = new Logger({ ctx: 'UnknownErrorHandler' });
  }

  /**
   * Handle
   *
   * @param err Error
   *
   * @returns void
   */
  handle(err: Error): void {
    this.logger.error({ err }, 'An unknown error occurred');
    throw new Error(this.prefix + ':' + '99');
  }
}
