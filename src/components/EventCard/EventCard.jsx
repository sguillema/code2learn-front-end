import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

const EventCard = (props) => {
  return (
      <div className="eventCard">
        <h1 className="title">{props.name}</h1>
        <h3 className="date">{props.date}</h3>
        <h3 className="host">{props.host}</h3>
        <span className="info">
          <Link to={`/event/${props.id}`}>i</Link>
        </span>
      </div>
  );
}

export default EventCard;

