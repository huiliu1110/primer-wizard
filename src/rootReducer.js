import { combineReducers } from 'redux-seamless-immutable';
import { routerReducer } from 'react-router-redux';

import { WizardReducer } from './redux/Wizard';
import { UIReducer } from './redux/UI';

export default combineReducers({
  routing: routerReducer,
  wizard: WizardReducer,
  ui: UIReducer,
});
