import React from 'react';
import './style.less';

import { NavLink, withRouter } from 'react-router-dom';

const Event = ({ event, changeFavoriteState, isFavorite, history }) => {
	const style = {
		fill: isFavorite ? '#000' : '#fff',
		stroke: '#000',
		strokeWidth: '10px',
		width: '20px',
		height: '20px'
	};
	return event ? (
		<div className="event">
			<h3 className="event__title">{event.title}</h3>
			<div className="event__info">
				<span className="event__price">Стоимость: {event.is_free ? 'Бесплатно' : event.price + '₽'}</span>
				<button className="button button_icon" onClick={() => changeFavoriteState(isFavorite, event.id)}>
					<svg
						className="icon"
						style={style}
						enableBackground="new 0 0 511.998 511.998"
						viewBox="0 0 511.998 511.998"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g>
							<g>
								<path d="m414.168 500.62-158.169-83.155-158.169 83.155 30.207-176.121-128.037-124.735 176.86-25.689 79.139-162.697 79.139 162.697 176.86 25.689-128.037 124.734z" />
							</g>
						</g>
					</svg>
				</button>
			</div>
			<p className="event__body">
				{event.image ? <img src={event.image} alt={event.title} className="event__img" /> : null}
				{history.location.pathname === `/${event.id}` ? (
					<span>{event.body}</span>
				) : (
					<span>
						{event.description}
						<NavLink to={`/${event.id}`} className="event__link">
							<span>Подробнее...</span>
						</NavLink>
					</span>
				)}
			</p>
		</div>
	) : (
		<div>Тут пусто</div>
	);
};

export default withRouter(Event);
