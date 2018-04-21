import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Discovery, Home, MyList } from './containers';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/discovery">Discovery</Link>
            </li>
            <li>
              <Link to="/my-list">MyList</Link>
            </li>
          </ul>

          <hr />

          
          <Route exact path="/" component={Home} />
          <Route path="/discovery" component={Discovery} />
          <Route path="/my-list" component={MyList} />

        </div>
      </Router>
    );
  }
}

export default App;


