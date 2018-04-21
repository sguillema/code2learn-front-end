import React, { Component } from 'react';
import { Link, withRouter} from "react-router-dom";
import './styles.css';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.getRouteName = this.getRouteName.bind(this);
  };

  getRouteName() {
    var route = this.props.children.props.children.find((route) => {
      return route.props.path === this.props.location.pathname;
    });
    return route.props.name;
  };

  render() {
    return (
      <div className="layout">
        <div className="navbar_top">
          <div>Back</div>
          <div className="logo">YouTS</div>
          <div className="currentPage">{this.getRouteName()}</div>
        </div>

        {this.props.children}
        
        <div className="navbar_bottom">
          <Link to="/discovery" className="">Discover</Link>
          <Link to="/my-list" className="active">My List</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Layout);


