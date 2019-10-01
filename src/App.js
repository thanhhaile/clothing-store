import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>ADFAJDLAKLKASDF</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' componet={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
