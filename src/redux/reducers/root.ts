import { combineReducers } from 'redux-immutable';
import { pokemonsReducer, uiReducer } from '../reducers';

const rootReducer = combineReducers({
  data: pokemonsReducer,
  ui: uiReducer,
})


export default rootReducer;