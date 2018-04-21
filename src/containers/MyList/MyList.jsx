import React, { Component } from 'react';
import { EventItem } from '../../components';
import './styles.css';

class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
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
        {
          id: 4,
          title: "Event Name",
          date: "dd/MM/yy - hh:mm",
          host: "UTS MonkaS"
        }
      ],
    };
  }

  render() {
    return (
      <div className="myList body">
        <div className="tabsContainer">
          <ul className="tabs">
            <li className="tab active">
              Upcoming
					</li>
            <li className="tab">
              Past
					</li>
          </ul>
        </div>
        <div className="tabContent">
          <ul className="events">
            {this.state.events.map((event, i) => (
              <EventItem
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.date}
                host={event.host}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MyList;