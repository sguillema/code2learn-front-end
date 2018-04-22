import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import globals from '../../config/globals'
import './styles.css';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
      loading: true
    };
    this.renderUrl = this.renderUrl.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: globals.api + "/event/get/" + this.props.match.params.eventId
    })
    .then(res => {
      this.setState({
        event: res.data,
        loading: false
      })
    })
    .catch(err => { console.log(err) });
  }

  renderUrl(url) {
    if (url) { return <p><a href={url}>{url}</a></p> }
    else { return ''; }
  }

  render() {
    if (this.state.loading) {
      return <div className="evenContainer body"></div>
    }
    var event = this.state.event;
    return (
      <div className="eventContainer body">
        <div className="event">
          <img className="eventImage" src={event.image} alt={event.title}></img>
          <div className="eventContent">
            <h1 className="title">{event.title}</h1>
            <h2 className="date">{moment(event.date_start).format('DD/MM/YY - hh:mmA')}</h2>
            <h2 className="host">{event.host}</h2>
            <div className="description">
              <p>{event.description}</p>
              {this.renderUrl(event.url)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;