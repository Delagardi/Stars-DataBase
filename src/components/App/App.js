import React, { Component } from 'react';

import Header from '../Header';
import ItemList from '../ItemList';
import PeopleDetails from '../PeopleDetails';
import PlanetRandom from '../PlanetRandom';

import './App.css';

export default class App extends Component {
  render() {
    return(
      <div>
      <Header />
      <PlanetRandom />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PeopleDetails />
        </div>
      </div>
    </div>
    );
  }
}
