/**
 * Action Type
 */

export enum UserActionType {
  USER_SET_PERSONAL_DATA = '[USER] SET PERSONAL DATA',
}

/**
 * Data Type
 */

export interface User {
  name: string;
}

/**
 * State Type
 */

export interface UserState {
  name: string;
}
