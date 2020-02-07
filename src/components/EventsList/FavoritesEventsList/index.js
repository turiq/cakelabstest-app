import React from 'react';
import EventsList from '../EventsList.js';
import { favoritesEventsSelector } from '../../../selectors';
import { connect } from 'react-redux';
const FavoritesEventsList = ({ favorites }) => {
	return (
		<div className="main">
			<EventsList events={favorites} />
		</div>
	);
};

export default connect((state) => {
	return {
		favorites: favoritesEventsSelector(state)
	};
})(FavoritesEventsList);
