import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/global.css';
import { Discovery, Home, Layout, MyList, Event, GroupList, Group } from './containers';

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home
  },
  {
    name: "Discovery",
    path: "/discovery",
    component: Discovery
  },
  {
    name: "My List",
    path: "/my-list",
    component: MyList
  },
  {
    name: "Event",
    path: "/event/:eventId",
    component: Event
  },
  {
    name: "Groups",
    path: "/groups",
    component: GroupList
  },
  {
    name: "Group",
    path: "/group/:eventId",
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