import React, { Component } from 'react';
import './styles.css';
import { EventCard } from '../../components';
import Cards, { Card } from 'react-swipe-card';

class Discovery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: suggestedEvents
    };
  }

  render() {
    return ( 
      <div className="discovery body">
        <div className="eventCardContainer">
          <Cards onEnd={() => (<div>empty</div>)} className="master-root">
            {this.state.events.map((event, i) => (
              <Card
                key={i}
                onSwipeLeft={() => console.log('swipe left')}
                onSwipeRight={() => console.log('swipe right')}>
                <EventCard
                  id={1}
                  name="Event Name"
                  date="dd/mm/yy - hh:mm"
                  host="UTS MonkaS"
                /> 
              </Card>
            ))}
          </Cards>  
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