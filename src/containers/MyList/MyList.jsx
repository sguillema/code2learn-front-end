import React, { Component } from 'react';
import axios from 'axios';
import { EventItem } from '../../components';
import moment from 'moment';
import './styles.css';

var upcomingEvents;
var pastEvents;

class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "upcoming",
      loading: true,
      activeEvents: []
    };
    this.updateTab = this.updateTab.bind(this);
    this.renderEvents = this.renderEvents.bind(this);
  };

  componentWillMount() {
    var api = "https://maxn9yb5ia.execute-api.ap-southeast-2.amazonaws.com/api";
    axios({
      method: 'post',
      url: api + "/person/events/get",
      data: { _id: "f41bd45f-59df-4383-a5ff-8c2151d37eec" } 
    })
    .then(res => {
      var now = moment();
      upcomingEvents = res.data.filter((event) => {
        return moment(event["date_end"]).diff(now) > 0
      });
      pastEvents = res.data.filter((event) => {
        return moment(event["date_end"]).diff(now) < 0
      });
      this.updateTab(this.state.activeTab);
    })
    .catch(err => console.log(err));
  }

  updateTab(tab) {
    this.setState({
      activeTab: tab,
      activeEvents: tab === "upcoming" ? upcomingEvents : pastEvents,
      loading: false
    })
  };

  renderEvents() {
    var events = this.state.activeEvents;
    if (events.length > 0) {
      return events.map((event) => (
        <EventItem
          key={event["_id"]}
          id={event["_id"]}
          title={event.title}
          date={event["date_start"]}
          host={event.host}
        />
      ));
    }
    else {
      return <div>No {this.state.activeTab} events are saved</div>
    }
  }

  render() {
    if (this.state.loading) {
      return <div className="myList body"></div>
    }
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
            {this.renderEvents()}
          </ul>
        </div>
      </div>
    );
  }
}

export default MyList;