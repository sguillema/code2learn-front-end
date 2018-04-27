import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import moment from 'moment';
import FontAwesome from "react-fontawesome";
import globals from '../../config/globals';
import './styles.css';

class Event extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: {},
			loading: true,
			grouped: false,
		};
		this.renderUrl = this.renderUrl.bind(this);
		this.addToLFG = this.addToLFG.bind(this);
		this.checkGroupQueue = this.checkGroupQueue.bind(this);
	}

	componentDidMount() {
		axios({
			method: 'get',
			url: globals.api + "/event/get/" + this.props.match.params.eventId
		})
			.then(res => {
				this.setState({
					event: res.data,
					loading: false
				});
			});
		this.checkGroupQueue();
	}

	checkGroupQueue() {
		axios({
			method: 'post',
			url: globals.api + "/person/queue/list",
			data: {
				"_id": globals.userId
			}
		})
			.then((res) => {
				res.data.forEach((event) => {
					if (event["event-id"] === this.props.match.params.eventId) {
						this.setState({
							grouped: true
						});
					}
					if (this.state.grouped) {
						ReactDOM.findDOMNode(this.refs.lfg).classList.add("inactive");
					}
				});
			});

	}

	addToLFG() {
		axios({
			method: 'post',
			url: globals.api + "/event/group/join",
			data: {
				"person-id": globals.userId,
				"event-id": this.props.match.params.eventId
			}
		})
			.then(res => {
				console.log("Successfully added to LFG queue!");
				console.log(res);
			})
			.catch(err => { console.log(err); });
		ReactDOM.findDOMNode(this.refs.lfg).classList.add("inactive");
	}

	renderUrl(url) {
		if (url) { return <p><a href={url}>{url}</a></p>; }
		else { return ''; }
	}

	render() {
		if (this.state.loading) {
			return <div className="evenContainer body"></div>;
		}
		var event = this.state.event;
		// console.log(event);
		return (
			<div className="eventContainer body">
				<div className="event">
					<img className="eventImage" src={event.image} alt={event.title}>
					</img>
					<div className="lfg_button" ref="lfg" onClick={() => { this.addToLFG(); }}>
						<FontAwesome name='user-plus' style={{ color: 'white' }} />
					</div>
					<div className="eventContent">
						<h1 className="title">{event.title}</h1>
						<h2 className="date">{moment(event.date_start).format('DD/MM/YY - hh:mmA')}</h2>
						<h2 className="host">{event.host}</h2>
						<h2 className="location">{event.location}</h2>
						<div className="description">
							<p>{event.description}</p>
							{this.renderUrl(event.url)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Event;
