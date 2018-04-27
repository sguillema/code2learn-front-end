import React, { Component } from 'react';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<div className="home body">
				{window.location.replace('/discovery')}
			</div>
		);
	}
}

export default Home;
