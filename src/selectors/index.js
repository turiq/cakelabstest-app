import { createSelector } from 'reselect';

const filterGetter = (state) => state.filter;
const eventsGetter = (state) => state.events;
const favoritesGetter = (state) => state.favorites;

export const filtratedEventsSelector = createSelector(eventsGetter, filterGetter, (events, filters) => {
	const { selected } = filters;

	return events.filter((event) => {
		return (
			!selected.length || selected.map((option) => option.value).some((value) => event.categories.includes(value))
		);
	});
});

export const favoritesEventsSelector = createSelector(eventsGetter, favoritesGetter, (events, favorites) => {
	const { idList } = favorites;
	return events.filter((event) => {
		return idList.includes(event.id);
	});
});
