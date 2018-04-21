import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './styles.css';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
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
          <li>
            <Link to="item/109231283">Some Item</Link>
          </li>
        </ul>

        <hr />

        {this.props.children}

      </div>
    );
  }
}

export default Layout;


