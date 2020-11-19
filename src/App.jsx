/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import { Table } from './components/Table/Table';
// import { Switch, Link, Route } from 'react-router-dom';

export const App = () => (
  <div>
    <Table />

    {/* <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
    </nav>

    <Switch>
      <Route path="/users">
        <div>Users page</div>
      </Route>
      <Route path="/">
        <div>Home page</div>
      </Route>
    </Switch>
  </div> */}
  </div>
);
