import React, { Component } from 'react';

import Header from '../Header';
import ItemList from '../ItemList';
import PeopleDetails from '../PeopleDetails';
import PlanetDetails from '../PlanetDetails';
import PlanetRandom from '../PlanetRandom';
import StarshipDetails from '../StarshipDetails';

export default class App extends Component {
  render() {
    return(
      <div>
        <h1>Hello all</h1>
        <Header/>
        <ItemList/>
        <PeopleDetails/>
        <PlanetDetails/>
        <PlanetRandom/>
        <StarshipDetails/>
      </div>
    );
  }
}
