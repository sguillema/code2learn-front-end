import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import './styles.css';

const EventItem = (props) => {
  return (
    <Link to={`/event/${props.id}`} className='eventItem'>
      <li>
        <h3 className='title'>{props.title}</h3>
        <span className='date'>{moment(props.date).format('DD/MM/YY - hh:mmA')}</span>
        <span className='host'>{props.host}</span>
      </li>
    </Link>
  );
}

export default EventItem;