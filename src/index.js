import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/index.css';
import { Discovery, Home, Layout, MyList, Item } from './containers';

const router = (
  <Router>
    <Layout >
      <Route exact path="/" component={Home} />
      <Route path="/discovery" component={Discovery} />
      <Route path="/my-list" component={MyList} />
      <Route path="/item/:itemId" component={Item} />
    </Layout>
  </Router>
)

render(router, document.getElementById('root'));
