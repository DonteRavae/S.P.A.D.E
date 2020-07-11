//React
import React, { FunctionComponent } from 'react';
//Components
import HeaderNavigation from './components/header-nav/header-nav.component';
import Landing from './components/landing/landing.component';
//Styles
import './App.css';

const App: FunctionComponent = () => (
  <div className="App">
    <HeaderNavigation />
    <Landing />
  </div>
);

export default App;
