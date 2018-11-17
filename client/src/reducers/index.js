import { combineReducers } from 'redux';
import SectionsReducer from './reducer_sections';
import ActiveSection from './reducer_active_section';

const rootReducer = combineReducers({
	sections: SectionsReducer,
	activeSection: ActiveSection
});

export default rootReducer;
