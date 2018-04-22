import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import './styles.css';

const GroupItem = (props) => {
  return (
    <Link to={`/group/${props.id}`}>
        <li className="group">
          <h3 className="title">{props.title}</h3>
          <span className="size">{props.size} / 5</span>
        </li>
    </Link>
  );
}

export default GroupItem;