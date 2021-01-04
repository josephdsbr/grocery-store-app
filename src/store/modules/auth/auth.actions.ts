import {action} from 'typesafe-actions';
import {AuthActionTypes} from './auth.types';
import {User} from '../user/user.types';

export const signInRequest = (phone: string) =>
  action(AuthActionTypes.AUTH_SIGN_IN_REQUEST, phone);

export const signInFailure = (error: Error) =>
  action(AuthActionTypes.AUTH_SIGN_IN_FAILURE, error.message);

export const signInSuccess = (user: User) =>
  action(AuthActionTypes.AUTH_SIGN_IN_SUCCESS, user);
