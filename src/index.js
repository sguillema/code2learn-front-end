import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/global.css';
import { Discovery, Home, Layout, MyList, Event, GroupList, Group } from './containers';

const routes = [
	{
		name: "Discovery",
		pathNoParams: "/discovery",
		component: Discovery
	},
	{
		name: "My List",
		pathNoParams: "/my-list",
		component: MyList
	},
	{
		name: "Event",
		pathNoParams: "/event",
		component: Event
	},
	{
		name: "Groups",
		pathNoParams: "/groups",
		component: GroupList
	},
	{
		name: "Group",
		pathNoParams: "/group",
		component: Group
	},
];

const router = (
	<Router>
		<Layout routes={routes}>
			<Switch>
				<Route name="Home" exact path="/" component={Home} />
				<Route name="Discovery" path="/discovery" component={Discovery} />
				<Route name="My List" path="/my-list" component={MyList} />
				<Route name="Event" path="/event/:eventId" component={Event} />
				<Route name="Groups" path="/groups" component={GroupList} />
				<Route name="Group" path="/group/:groupId" component={Group} />
				<Route component={() => <div style={{ height: '100vh' }}>404: Incorrect url</div>} />
			</Switch>
		</Layout>
	</Router>
);

render(router, document.getElementById('root'));
