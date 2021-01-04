/**
 * Action Type
 */

export enum AuthActionTypes {
  AUTH_SIGN_IN_REQUEST = '[AUTH] SIGN IN REQUEST',
  AUTH_SIGN_IN_SUCCESS = '[AUTH] SIGN IN SUCCESS',
  AUTH_SIGN_IN_FAILURE = '[AUTH] SIGN IN FAILURE',
}

/**
 * Data Type
 */

/**
 * State Type
 */

export interface AuthState {
  signed: boolean;
}
