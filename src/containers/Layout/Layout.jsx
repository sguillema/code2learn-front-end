import React, { Component } from 'react';
import { Link, withRouter} from "react-router-dom";
import './styles.css';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.getRouteName = this.getRouteName.bind(this);
  };

  getRouteName() {
    var route = this.props.routes.find(route => {
      if (route.path.startsWith(this.props.location.pathname)) {
        return route;
      }
    });
    if (route)
      return route.name;
    else
      return 'Event';  
  };

  render() {
    var routeName = this.getRouteName();

    return (
      <div className="layout">
        <div className="navbar_top">
          <div
            className={`${routeName === "Discovery" || routeName === "My List" ? "hidden" : ""}`}
            onClick={() => this.props.history.goBack()}>
            Back
          </div>
          <div className="logo">U(YOU)TS</div>
          <div className="currentPage">{routeName}</div>
        </div>

        {this.props.children}
        
        <div className="navbar_bottom">
          <Link to="/discovery" className={`${routeName === "Discovery" ? "active" : ""}`}>Discover</Link>
          <Link to="/my-list" className={`${routeName === "My List" ? "active" : ""}`}>My List</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Layout);


