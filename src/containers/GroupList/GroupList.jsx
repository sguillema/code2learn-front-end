import React, { Component } from 'react';
import axios from 'axios';
import { GroupItem } from '../../components';
import globals from '../../config/globals'
import './styles.css';

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: {},
      loading: true
    };
    this.renderGroupsList = this.renderGroupsList.bind(this);
  }

  componentWillMount() {
    axios({
      method: 'post',
      url: globals.api + "/person/groups/list",
      data: { _id: globals.userId }
    })
    .then(res => {
      this.setState({
        groups: res.data,
        loading: false
      });
    })
    .catch(err => {console.log(err)});
  }

  renderGroupsList() {
    var groups = this.state.groups;
    if (groups.length > 0) {
      return groups.map((group, i) => (
        <GroupItem
          key={i}  
          id={group._id}
          title={group.event.title}
          size={group.members.length}
        />
      ));
    }
    else {
      return <div>No groups events are available at this time</div>
    }
  }

  render() {
    if (this.state.loading) {
      return <div className="groupListContainer body"></div>
    }
    return (
      <div className="body">
        <ul className="groups">
          
          {this.renderGroupsList()}
          
          <li className="prompt">
            <p>Check 'My List' to join-up on other events!</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default GroupList;