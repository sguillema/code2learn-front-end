import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import './styles.css';

const EventCard = (props) => {
	return (
		<div className="eventCard" style={{ "backgroundImage": `url(${props.image})` }}>
			<h1 className="title">{props.title}</h1>
			<h3 className="date">{moment(props.date).format('DD/MM/YY - hh:mmA')}</h3>
			<h3 className="host">{props.host}</h3>
			<span className="info">
				<Link to={`/event/${props.id}`}>i</Link>
			</span>
		</div>
	);
};

export default EventCard;

