import { AppsyncResponse, Metadata } from '../types';
import { handlers } from '../errors';

/**
 * Handle Response
 *
 * @param data T
 *
 * @returns AppsyncResponse<T>
 */
export const handleResponse = <T>(data: T, metadata?: Metadata): AppsyncResponse<T> => {
  return { data, metadata };
};

/**
 * Handle Error
 *
 * @param prefix string
 * @param error Error
 *
 * @returns
 */
export const handleError = (prefix: string, error: Error): void => {
  const errorThrower = new handlers.OperationErrorHandler({ prefix })
    .setNext(new handlers.DatabaseErrorHandler({ prefix }))
    .setNext(new handlers.ValidationErrorHandler({ prefix }))
    .setNext(new handlers.UnknownErrorHandler({ prefix }));

  errorThrower.handle(error);
};
