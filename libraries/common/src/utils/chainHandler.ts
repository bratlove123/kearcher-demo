import { Logger } from '../logger';

export abstract class ChainHandler<T> {
  protected logger: Logger = new Logger({ ctx: 'ChainHandler' });
  protected nextHandler?: ChainHandler<T>;

  /**
   * Set Next
   *
   * @param handler ChainHandler<T>
   * @returns ChainHandler<T>
   */
  setNext(handler: ChainHandler<T>): ChainHandler<T> {
    this.nextHandler = handler;

    return handler;
  }

  /**
   * Handle
   *
   * @param parameter T
   *
   * @returns void
   */
  handle(parameter: T): void {
    if (this.nextHandler) {
      this.nextHandler.handle.call(this.nextHandler, parameter);
    }
  }

  /**
   * Async Handle
   *
   * @param parameter T
   *
   * @returns Promise<void>
   */
  asyncHandle(parameter: T): Promise<void> {
    if (this.nextHandler) {
      return this.nextHandler.handle.call(this.nextHandler, parameter);
    }
  }
}
