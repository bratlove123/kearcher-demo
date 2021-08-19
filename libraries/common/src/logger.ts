import { injectable } from 'inversify';
// import { getLogger, Logger as LibLogger } from '@kaercher/ipp-cloud-common-lambda-libs';

const logger = (obj) =>console.log(obj);

interface LogObj {
  msg?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [others: string]: any;
}

@injectable()
export class Logger {
  protected readonly logger: any;
  protected readonly ctx: string;

  constructor({ ctx }: { ctx: string }) {
    this.logger = logger;
    this.ctx = ctx;
  }

  /**
   * Log Error
   *
   * @param obj
   * @param msg
   * @returns
   */
  error(obj: LogObj, msg?: string): void {
    this.log({
      level: 'error',
      obj,
      msg,
    });
  }

  /**
   * Log Info
   *
   * @param obj
   * @param msg
   * @returns
   */
  info(obj: LogObj, msg?: string): void {
    this.log({
      level: 'info',
      obj,
      msg,
    });
  }

  /**
   * Log Trace
   *
   * @param obj
   * @param msg
   * @returns
   */
  trace(obj: LogObj, msg?: string): void {
    this.log({
      level: 'trace',
      obj,
      msg,
    });
  }

  /**
   * Log Debug
   *
   * @param obj
   * @param msg
   * @returns
   */
  debug(obj: LogObj, msg?: string): void {
    this.log({
      level: 'debug',
      obj,
      msg,
    });
  }

  /**
   * Log Warning
   *
   * @param obj
   * @param msg
   * @returns
   */
  warn(obj: LogObj, msg?: string): void {
    this.log({
      level: 'warn',
      obj,
      msg,
    });
  }

  private log({
    obj,
    msg,
    level,
  }: {
    obj: LogObj;
    msg?: string;
    level: 'trace' | 'info' | 'debug' | 'warn' | 'error';
  }): void {
    const message = obj.msg || msg;

    this.logger[level](obj, `[${this.ctx}] ${message}`);
  }
}
