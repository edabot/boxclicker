import {combineReducers} from 'redux';
import items from './item-reducer';
import box from './box-reducer';

const rootReducer = combineReducers({
  items, box
});

export default rootReducer;
