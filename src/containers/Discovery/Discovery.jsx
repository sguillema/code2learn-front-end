import React, { Component } from 'react';
import axios from 'axios';
import globals from '../../config/globals';
import { EventCard } from '../../components';
import Cards, { Card } from 'react-swipe-card';
import './styles.css';


class Discovery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      events: []
    };
    this.renderEventCards = this.renderEventCards.bind(this);
    this.getEmptyResultResponse = this.getEmptyResultResponse.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'post',
      url: globals.api + "/event/list",
      data: { _id: globals.userId }
    })
    .then(res => {
      this.setState({
        loading: false,
        events: res.data
      })
    })
    .catch(err => { console.log(err) });
  }
  
  getEmptyResultResponse() {
    return <div>No more discoveries to be made at this time :(</div>
  }

  renderEventCards() {
    var events = this.state.events;
    if (events.length > 0) {
      return (
        <Cards onEnd={() => (this.getEmptyResultResponse())} className="master-root">
          {this.state.events.map((event, i) => (
            <Card
              key={i}
              onSwipeLeft={() => console.log('swipe left')}
              onSwipeRight={() => console.log('swipe right')}>
              <EventCard
                id={event._id}
                title={event.title}
                date={event.date_start}
                host={event.host}
                image={event.image}
              />
            </Card>
          ))}
        </Cards>  
      );
    }
    else {
      return this.getEmptyResultResponse();
    }
  }

  render() {
    if (this.state.loading) {
      return <div className="discovery body"></div>
    }
    return ( 
      <div className="discovery body">
        <div className="eventCardContainer">
          {this.renderEventCards()}
        </div>
        <div className="eventCardControls">
          <div className="button_remove">:(</div>
          <div className="button_add">{'<3'}</div>
        </div>
      </div>
    );
  }
}

export default Discovery;

const suggestedEvents = [
  {
    id: 1,
    title: "Event Name",
    date: "dd/MM/yy - hh:mm",
    host: "UTS MonkaS"
  },
  {
    id: 2,
    title: "Event Name",
    date: "dd/MM/yy - hh:mm",
    host: "UTS MonkaS"
  },
  {
    id: 3,
    title: "Event Name",
    date: "dd/MM/yy - hh:mm",
    host: "UTS MonkaS"
  },
];