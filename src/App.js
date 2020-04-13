import React, { Fragment } from 'react';
import './App.scss';
import { UserActivity } from './components/user-activity';
import { Header } from './components/header';

function App() {
  return (
    <Fragment>
      <Header />
      <UserActivity />
    </Fragment>
  );
}

export default App;
