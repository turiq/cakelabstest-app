import Events from '../events.json';
import { CHANGE_SORT } from '../constants/';

export default (eventsState = Events, action) => {
	const { type, payload } = action;
	switch (type) {
		case CHANGE_SORT: {
			if (payload.selected === 0) {
				return eventsState.slice().sort((a, b) => a.price - b.price).map((elem) => elem);
			} else if (payload.selected === 1) {
				return eventsState.slice().sort((a, b) => b.price - a.price).map((elem) => elem);
			} else if (payload.selected === 2) {
				return Events;
			} else break;
		}
		default:
			return eventsState;
	}
};
