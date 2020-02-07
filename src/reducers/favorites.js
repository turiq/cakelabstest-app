import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from '../constants/';
const defaultFavorites = {
	idList: []
};
export default (favorites = defaultFavorites, action) => {
	const { type, payload } = action;

	switch (type) {
		case ADD_TO_FAVORITES: {
			const idList = favorites.idList;
			return { ...defaultFavorites, idList: idList.concat(payload.id) };
		}
		case DELETE_FROM_FAVORITES: {
			return { ...favorites, idList: favorites['idList'].filter((id) => id !== payload.id) };
		}
		default:
			return favorites;
	}
};
