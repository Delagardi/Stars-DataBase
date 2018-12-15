import React, { Component } from 'react';
import Header from '../Header';
import PlanetRandom from '../PlanetRandom';
import ErrorMessage from '../ErrorMessage';
import SwapiServices from '../../services/swapiServices';
import { SwapiServiceProvider } from '../SwapiServiceContext';
import { PeoplePage } from '../Pages';
import { StarshipPage } from '../Pages';
import { PlanetPage } from '../Pages';

import './App.css';

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
          <SwapiServiceProvider value={this.swapiService}>
            <Header />
            <PlanetRandom />
            <PeoplePage/>
            <StarshipPage/>
            <PlanetPage/>
          </SwapiServiceProvider>
        </div>
      </div>
    );
  }
}
