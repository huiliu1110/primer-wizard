import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';

import Types from './types';

export const INITIAL_STATE = Immutable({});

export const reset = state => INITIAL_STATE;

export const receive = (state, action) => {
  const { payload } = action;

  return state.merge(payload);
};

export const HANDLERS = {
  [Types.STORE_DATA]: receive,
  [Types.SAVE_DATA_SUCCESS]: reset,
};

export default createReducer(INITIAL_STATE, HANDLERS);
