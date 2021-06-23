import {
    number
} from './incdec';
import {
    todo
} from './todo';
import {
    combineReducers
} from 'redux';

const rootReducer = combineReducers({
    number,
    todo
})
export default rootReducer;