import React, { Component } from 'react';
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
          <div className="">Discover</div>
          <div className="active">My List</div>
        </div>
      </div>
    );
  }
}

export default Layout;


