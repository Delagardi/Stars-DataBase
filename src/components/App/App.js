import React, { Component } from 'react';
import Header from '../Header';
import PlanetRandom from '../PlanetRandom';
import './App.css';
import PeoplePage from '../PeoplePage/';
import ErrorMessage from '../ErrorMessage';
import SwapiServices from '../../services/swapiServices';
import StarshipPage from '../StarshipPage';

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
          <StarshipPage/>
        </div>
      </div>
    );
  }
}
