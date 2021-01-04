import {AuthState, AuthActionTypes} from './auth.types';
import {Reducer} from 'redux';
import produce from 'immer';

const authInitialState: AuthState = {
  signed: false,
};

const authReducer: Reducer<AuthState> = (state = authInitialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case AuthActionTypes.AUTH_SIGN_IN_SUCCESS:
        draft.signed = true;
        break;
    }
  });
};

export default authReducer;
