import React, { Component } from 'react';
import './styles.css';

class Event extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="eventContainer body">
        <div className="event">
          <div className="eventImage"></div>
          <div className="eventContent">
            <h1 className="title">Event Name</h1>
            <h2 className="date">dd/mm/yy - hh:mm</h2>
            <h2 className="host">UTS MonkaS</h2>
            <div className="description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, nunc sed scelerisque volutpat, felis neque luctus nunc, ac tempus diam nisi aliquet metus. Etiam maximus molestie ex non maximus. Curabitur elementum porta libero in bibendum. Ut vestibulum eu arcu ac aliquam. Duis quis tortor justo. Quisque dictum nulla a quam scelerisque, eget semper tortor </p>
              <p>www.example.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;