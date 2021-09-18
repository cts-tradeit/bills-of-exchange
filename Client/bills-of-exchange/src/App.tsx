import React from 'react';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderAppBar from './Components/HeaderAppBar/HeaderAppBar';
import Osoby from './Components/Osoby/Osoby';
import Smenky from './Components/Smenky/Smenky';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderAppBar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/osoby' exact component={Osoby} />
          <Route path='/smenky' exact component={Smenky} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
