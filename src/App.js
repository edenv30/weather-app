import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import FavoritesPage from './pages/favoritespage/favoritesPage.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/favorites' component={FavoritesPage} />
      </Switch>
    </div>
  );
}

export default App;
