import {combineReducers} from 'redux';
import itemLevels from './item-reducer';
import box from './box-reducer';

const rootReducer = combineReducers({
  itemLevels, box
});

export default rootReducer;
