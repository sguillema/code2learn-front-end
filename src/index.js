import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/global.css';
import { Discovery, Home, Layout, MyList, Event } from './containers';

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
    name: "Home",
    path: "/event/:eventId",
    component: Event
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
        <Route component={() => <div style={{ height: '100vh' }}>404: Incorrect url</div>} />
      </Switch>
    </Layout>
  </Router>
);

render(router, document.getElementById('root'));