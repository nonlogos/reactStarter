import { combineReducers } from 'redux';

//import all app-specific reducers
import exampleReducer from './exampleReducer.reducer';


//set all app states and data

const rootReducer = combineReducers({
	example: exampleReducer

})

export default rootReducer;
