import React, { Component } from 'react';
import { Link, withRouter} from "react-router-dom";
import FontAwesome from "react-fontawesome";
import './styles.css';

var selectedNav = '';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.getRouteName = this.getRouteName.bind(this);
  };

  getRouteName() {
    var pathname = this.props.location.pathname;
    console.log(pathname);
    if (pathname === "/")
      return "Home";  
    
    var route = this.props.routes.find(route => (
      pathname.startsWith(route.pathNoParams)
    ));      
    if (route)
      return route.name;
    else
      return '';  
  };  

  render() {
    var routeName = this.getRouteName();
    if (routeName === "Discovery" || routeName === "Groups" || routeName === "My List") {
      selectedNav = routeName;
    } 
    return (
      <div className="layout">
        <div className="navbar_top">
          <div
            className={`${routeName === "Discovery" || routeName === "My List" || routeName === "Home" || routeName === "Groups" ? "hidden" : ""}`}
            onClick={() => this.props.history.goBack()}>
            <FontAwesome name='arrow-left' size='2x' style={{marginRight: '10px'}}/>Back
          </div>
          <div className="currentPage">{routeName}</div>
          <div className="logo"></div>
        </div>

        {this.props.children}
        
        <div className="navbar_bottom">
          <Link to="/discovery" className={`${selectedNav === "Discovery" ? "active" : ""}`}><FontAwesome name='safari' size='2x' style={{marginBottom: '5px'}}/>Discover</Link>
          <Link to="/groups" className={`${selectedNav === "Groups" ? "active" : ""}`}><FontAwesome name='users' size='2x' style={{marginBottom: '5px'}}/>Groups</Link>
          <Link to="/my-list" className={`${selectedNav === "My List" ? "active" : ""}`}><FontAwesome name='heart' size='2x' style={{marginBottom: '5px'}}/>My List</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Layout);


