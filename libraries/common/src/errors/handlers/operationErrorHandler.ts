import { ChainHandler } from '../../utils';
import { Logger } from '../../logger';
import { OperationError } from './../types/operationError';

export class OperationErrorHandler extends ChainHandler<Error> {
  private prefix: string;
  protected logger: Logger;

  constructor({ prefix }: { prefix: string }) {
    super();
    this.prefix = prefix;
    this.logger = new Logger({ ctx: 'OperationErrorHandler' });
  }

  /**
   * Can Handle
   *
   * @param err Error
   * @returns boolean
   */
   canHandle(err: Error): boolean {
    return err instanceof OperationError;
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
      this.logger.error({ err }, 'An operation error occurred');
      throw new Error(this.prefix + ':' + '98');
    }

    super.handle(err);
  }
}
