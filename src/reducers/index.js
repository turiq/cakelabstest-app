import { combineReducers } from 'redux';
import events from './events';
import filter from './filter';
import favorites from './favorites';
export default combineReducers({
	events,
	filter,
	favorites
});
