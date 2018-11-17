import { combineReducers } from 'redux';
import { SectionsReducer, ActiveReducer } from './reducer_sections';
import ActiveSection from './reducer_active_section';

const rootReducer = combineReducers({
	sections: SectionsReducer,
	activeSection: ActiveReducer
});

export default rootReducer;
