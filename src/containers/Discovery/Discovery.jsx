import React, { Component } from 'react';
import './styles.css';

class Discovery extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  render() {
    return ( 
      <div className="discovery body">
        <div className="eventCardContainer">
          <div className="eventCard">
            <h1 className="title">Event Name</h1>
            <h3 className="date">dd/mm/yy - hh:mm</h3>
            <h3 className="host">UTS MonkaS</h3>
            <span className="info">i</span>
          </div>
        </div>
        <div className="eventCardControls">
          <div className="button_remove">:(</div>
          <div className="button_add">&lt3</div>
        </div>
      </div>
    );
  }
}

export default Discovery;