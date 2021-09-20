import React from 'react';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderAppBar from './Components/HeaderAppBar/HeaderAppBar';
import Osoby from './Components/Osoby/Osoby';
import Smenky from './Components/Smenky/Smenky';
import HomePage from './Components/HomePage/HomePage';
import OsobaDetails from './Components/OsobaDetails/OsobaDetails';
import SmenkaDetails from './Components/SmenkaDetails/SmenkaDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderAppBar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/osoby' exact component={Osoby} />
          <Route path='/osobadetails/:id' component={OsobaDetails} />
          <Route path='/smenky' exact component={Smenky} />
          <Route path='/smenkadetails/:id' component={SmenkaDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
