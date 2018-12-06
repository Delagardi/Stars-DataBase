import React, { Component } from 'react';
import Header from '../Header';
import PlanetRandom from '../PlanetRandom';
import './App.css';
import PeoplePage from '../PeoplePage/';
import ErrorMessage from '../ErrorMessage';
import ItemList from '../ItemList';
import SwapiServices from '../../services/swapiServices';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    }
  }

  swapiService = new SwapiServices();

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorMessage />
    }

    return(
      <div>
        <div>
          <Header />
          <PlanetRandom />
          <PeoplePage/>
        </div>
      
        <div className="row mb-2">
          <div className="col-md-6">
            <ItemList 
              onPersonSelected={this.onPersonSelected}
              getData={this.swapiService.getPlanetsAll}
              renderItem={ ({ name, population, diameter }) => (
                <span>
                  <span>{name}</span>
                  <span>(diameter: {diameter}, population: {population})</span>
                </span>) }/>
          </div>
        </div>
        
        <div className="row mb-2">
          <div className="col-md-6">
            <ItemList 
              onPersonSelected={this.onPersonSelected}
              getData={this.swapiService.getStarshipsAll}
              renderItem={ (item) => item.name } />
          </div>
        </div>
      </div>
    );
  }
}
