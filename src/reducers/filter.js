import { CHANGE_FILTER } from '../constants/';
const defaultFilter = {
	selected: []
};
export default (filter = defaultFilter, action) => {
	const { type, payload } = action;

	switch (type) {
		case CHANGE_FILTER:
			return { ...filter, selected: payload.selected };

		default:
			return filter;
	}
};
