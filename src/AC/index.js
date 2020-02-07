import { CHANGE_FILTER, CHANGE_SORT, ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from '../constants/';
export function changeFilter(selected) {
	return {
		type: CHANGE_FILTER,
		payload: {
			selected
		}
	};
}

export function sortByPrice(selected) {
	return {
		type: CHANGE_SORT,
		payload: { selected }
	};
}
export function addToFavorites(id) {
	return {
		type: ADD_TO_FAVORITES,
		payload: {
			id
		}
	};
}
export function deleteFromFavorites(id) {
	return {
		type: DELETE_FROM_FAVORITES,
		payload: {
			id
		}
	};
}
