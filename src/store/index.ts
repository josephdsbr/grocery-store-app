import {createStore, Store} from 'redux';
import rootReducer from './modules/rootReducer';
import {AuthState} from './modules/auth/auth.types';

export interface ApplicationState {
  auth: AuthState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
