import { SELECT_SECTION } from '../actions/index'

export default function (state = [], action) {
	if (action.type === SELECT_SECTION) {
		return action.payload;
	}
	return state;
}
