import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';

import Types from '../Wizard/types';

export const INITIAL_STATE = Immutable({
  loading: false,
  status: null,
});

export const reset = state => INITIAL_STATE;

export const loading = (state, action) => state.set('loading', true);
export const loadingComplete = (state, action) => state.set('loading', false);
export const statusSuccess = state =>
  state.set('status', 'Posted!').set('loading', false);

export const HANDLERS = {
  [Types.SAVE_DATA]: loading,
  [Types.SAVE_DATA_SUCCESS]: statusSuccess,
};

export default createReducer(INITIAL_STATE, HANDLERS);
