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
    const { hasError, selectedPerson } = this.state;

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
              getData={this.swapiService.getPlanetsAll}/>
          </div>
        </div>
        
        <div className="row mb-2">
          <div className="col-md-6">
            <ItemList 
              onPersonSelected={this.onPersonSelected}
              getData={this.swapiService.getStarshipsAll}/>
          </div>
        </div>
      </div>
    );
  }
}
