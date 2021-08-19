import { types, appsync, Logger } from 'common';
import { user } from 'application';

type EventArgs = {
  id: string;
};

const logger = new Logger({ ctx: 'GetRobotLambda' });

/**
 * Get User
 *
 * @param event AppsyncEvent<EventArgs>
 *
 * @returns Promise<AppsyncResponse>
 */
export const getUser = async (
  event: types.AppsyncEvent<EventArgs>
): Promise<types.AppsyncResponse<user.GetUserResult>> => {
  logger.info({ event }, 'getUser() || event');

  try {
    const getUserParams = { robotId: event.arguments.id, userId: event.user.id };
    const result = await user.getUser(getUserParams);

    return appsync.handleResponse<user.GetUserResult>(result);
  } catch (error) {
    logger.error({ error }, 'getUser() || error');
    appsync.handleError("GET_USER", error);
  }
};
