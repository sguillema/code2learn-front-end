import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/global.css';
import { Discovery, Home, Layout, MyList, Event } from './containers';

const router = (
  <Router>
    <Layout>
      <Switch>
        <Route name="Home" exact path="/" component={Home} />
        <Route name="Discovery" path="/discovery" component={Discovery} />
        <Route name="My List" path="/my-list" component={MyList} />
        <Route name="Event" path="/event/:eventId" component={Event} />
        <Route component={() => <div style={{ height: '100vh' }}>404: Incorrect Url</div>} />
      </Switch>
    </Layout>
  </Router>
);

render(router, document.getElementById('root'));
