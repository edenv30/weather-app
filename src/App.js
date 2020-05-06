import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Particles from 'react-particles-js';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import FavoritesPage from './pages/favoritespage/favoritesPage.component';

const particlesOptions = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
  return (
    <div>
      <Particles className='particles'
          params={particlesOptions}
      />
      <Header />
      <Switch>
        <Route exact path='keen-morse-78de06.netlify.app/weather-app' component={HomePage} />
        <Route path='keen-morse-78de06.netlify.app//weather-app/favorites' component={FavoritesPage} />
      </Switch>
    </div>
  );
}

export default App;
