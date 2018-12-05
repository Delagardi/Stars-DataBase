import React, { Component } from 'react';
import Header from '../Header';
import PlanetRandom from '../PlanetRandom';
import './App.css';
import PeoplePage from '../PeoplePage/PeoplePage';
import ErrorMessage from '../ErrorMessage';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    }
  }

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
        <Header />
        <PlanetRandom />
        <PeoplePage/>
      </div>
    );
  }
}
