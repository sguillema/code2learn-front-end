import React, { Component } from 'react';
import { EventItem } from '../../components';
import './styles.css';

class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "upcoming",
      events: upcomingEvents
    };
    this.updateTab = this.updateTab.bind(this);
  };

  updateTab(tab) {
    var updatedEvents;
    if (tab === "upcoming") {
      // Get upcoming events 
      updatedEvents = upcomingEvents;
    } 
    else if (tab === "past") {
      // Get past events
      updatedEvents = pastEvents;
    }

    this.setState({
      activeTab: tab,
      events: updatedEvents
    })
  };

  render() {
    return (
      <div className="myList body">
        <div className="tabsContainer">
          <ul className="tabs">
            <li
              className={`tab ${this.state.activeTab === "upcoming" ? "active" : ""}`}
              onClick={() => this.updateTab("upcoming")}>
              Upcoming
            </li>
            <li
              className={`tab ${this.state.activeTab === "past" ? "active" : ""}`}
              onClick={() => this.updateTab("past")}>
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


const upcomingEvents = [
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
  },
  {
    id: 5,
    title: "Event Name",
    date: "dd/MM/yy - hh:mm",
    host: "UTS MonkaS"
  },
  {
    id: 6,
    title: "Event Name",
    date: "dd/MM/yy - hh:mm",
    host: "UTS MonkaS"
  }
];

const pastEvents = [
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
];