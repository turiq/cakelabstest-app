import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { changeFilter, sortByPrice } from '../../AC/';
class SelectFilter extends Component {
	render() {
		const { events, selected } = this.props;
		const filterOptions = this.parseCategory(events);
		const sortOptions = [
			{ value: 0, label: 'Сначала самая низкая' },
			{ value: 1, label: 'Сначала самая высокая' }
		];

		return (
			<div>
				<Select
					options={filterOptions}
					value={selected}
					onChange={this.handleChangeFilter}
					isMulti
					isClearable
					placeholder="Категория"
				/>

				<Select options={sortOptions} onChange={this.handleSort} isClearable placeholder="Цена" />
			</div>
		);
	}
	handleChangeFilter = (selected) => {
		selected !== null
			? this.props.changeFilter(selected.map((option) => ({ value: option.value, label: option.label })))
			: this.props.changeFilter([]);
	};

	handleSort = (selected) => {
		selected !== null ? this.props.sortByPrice(selected['value']) : this.props.sortByPrice(2);
	};
	parseCategory = (events) => {
		let result = [];

		const categories = [];
		events.map((event) =>
			event.categories.map((category) => {
				if (!categories.includes(category)) {
					categories.push(category);
				}
			})
		);
		result = categories.map((category) => {
			return { value: category, label: category[0].toUpperCase() + category.slice(1) };
		});
		return result;
	};
}
export default connect(
	(state) => ({
		selected: state.filter.selected,
		events: state.events
	}),
	{ changeFilter, sortByPrice }
)(SelectFilter);
