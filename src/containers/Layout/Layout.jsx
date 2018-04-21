import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './styles.css';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="navbar_top">
          <div>Back</div>
          <div className="logo">yoUTS</div>
          <div className="currentPage">My List</div>
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

export default Layout;


