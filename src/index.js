import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/global.css';
import { Discovery, Home, Layout, MyList, Event } from './containers';

const router = (
  <Router>
    <Layout >
      <Route exact path="/" component={Home} />
      <Route path="/discovery" component={Discovery} />
      <Route path="/my-list" component={MyList} />
      <Route path="/event/:eventId" component={Event} />
    </Layout>
  </Router>
)

render(router, document.getElementById('root'));
