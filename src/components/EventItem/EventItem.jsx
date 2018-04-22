import React from 'react';
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import moment from 'moment';
import './styles.css';

const EventItem = (props) => {
  return (
    <Link to={`/event/${props.id}`} className='eventItem'>
      <li>
        <h3 className='title'>{props.title}</h3>
        <span className='date'>{moment(props.date).format('DD/MM/YY - hh:mmA')}</span>
        <span className='host'>{props.host}</span>
        <FontAwesome name='chevron-right' className='fa-icon'/>
      </li>
    </Link>
  );
}

export default EventItem;