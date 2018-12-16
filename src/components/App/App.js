import React, { Component } from 'react';
import Header from '../Header';
import PlanetRandom from '../PlanetRandom';
import ErrorMessage from '../ErrorMessage';
import ErrorBoundry from '../ErrorBoundry';
import SwapiServices from '../../services/swapiServices';
import { SwapiServiceProvider } from '../SwapiServiceContext';
import { PeoplePage } from '../Pages';
import { StarshipPage } from '../Pages';
import { PlanetPage } from '../Pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
        <ErrorBoundry>
          <SwapiServiceProvider value={ this.swapiService }>
            <Router>
              <div>
                <Header />
                <PlanetRandom />

                <Route path="/people" component={ PeoplePage } />
                <Route path="/planets" component={ PlanetPage } />
                <Route path="/starships" component={ StarshipPage } />
              </div>
            </Router>
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    );
  }
}
