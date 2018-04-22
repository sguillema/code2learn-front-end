import React, { Component } from 'react';
import { Link, withRouter} from "react-router-dom";
import FontAwesome from "react-fontawesome";
import './styles.css';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.getRouteName = this.getRouteName.bind(this);
  };

  getRouteName() {
    var route = this.props.routes.find(route => (
      route.path.startsWith(this.props.location.pathname)
    ));
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
            <FontAwesome name='arrow-left' size='2x' style={{marginRight: '10px'}}/>Back
          </div>
          <div className="currentPage">{routeName}</div>
          <div className="logo"></div>
        </div>

        {this.props.children}
        
        <div className="navbar_bottom">
          <Link to="/discovery" className={`${routeName === "Discovery" ? "active" : ""}`}><FontAwesome name='safari' size='2x' style={{marginBottom: '5px'}}/>Discover</Link>
          <Link to="/groups" className={`${routeName === "Groups" ? "active" : ""}`}><FontAwesome name='users' size='2x' style={{marginBottom: '5px'}}/>Groups</Link>
          <Link to="/my-list" className={`${routeName === "My List" ? "active" : ""}`}><FontAwesome name='heart' size='2x' style={{marginBottom: '5px'}}/>My List</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Layout);


