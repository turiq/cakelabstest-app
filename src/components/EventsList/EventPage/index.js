import React from 'react';
import { connect } from 'react-redux';
import { filtratedEventsSelector } from '../../../selectors';
import EventsList from '../EventsList.js';

const EventPage = ({ events, match }) => {
	const id = match.params.id;
	const event = events.filter((event) => event.id === +id);
	return (
		<div className="main">
			<EventsList events={event} isFull={true} />
		</div>
	);
};

export default connect((state) => {
	return {
		events: filtratedEventsSelector(state)
	};
})(EventPage);
