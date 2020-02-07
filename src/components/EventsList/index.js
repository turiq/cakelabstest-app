import React, { Component } from 'react';
import EventsList from './EventsList';
import SelectFilter from '../Filter';
import { filtratedEventsSelector } from '../../selectors';
import { connect } from 'react-redux';

class EventsListContainer extends Component {
	render() {
		return (
			<div className="main">
				<SelectFilter />
				<EventsList events={this.props.events} />
			</div>
		);
	}
}

export default connect((state) => {
	return {
		events: filtratedEventsSelector(state)
	};
})(EventsListContainer);
