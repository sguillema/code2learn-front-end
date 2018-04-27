import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import moment from 'moment';
import globals from '../../config/globals';
import './styles.css';

class Group extends Component {
	constructor(props) {
		super(props);
		this.state = {
			group: {},
			loading: true
		};
		this.renderMembers = this.renderMembers.bind(this);
	}

	componentDidMount() {
		axios({
			method: 'get',
			url: globals.api + "/person/groups/get/" + this.props.match.params.groupId
		})
			.then(res => {
				this.setState({
					group: res.data,
					loading: false
				});
			})
			.catch(err => { console.log(err); });
	}

	renderMembers(members) {
		return members.map((member, i) => (
			<li key={i} className="groupMember">
				<span>Name: {member.first_name} {member.last_name}</span>
			</li>
		));
	}

	render() {
		if (this.state.loading) {
			return <div className="body"></div>;
		}
		var group = this.state.group;
		return (
			<div className="body">
				<div className="groupContainer">
					<div className="event" style={{ "backgroundImage": `url(${group.event.image})` }}>
						<h1 className="title">{group.event.title}</h1>
						<h3 className="date">{moment(group.event.date_start).format('DD/MM/YY - hh:mmA')}</h3>
						<h3 className="host">{group.event.host}</h3>
						<span className="info">
							<Link to={`/event/${group.event._id}`}>i</Link>
						</span>
					</div>
					<div className="groupCount">
						<span>{group.members.length}/5 Members</span>
					</div>
					<ul className="groupMembers">
						{this.renderMembers(group.members)}
					</ul>
				</div>
			</div>
		);
	}
}

export default Group;
