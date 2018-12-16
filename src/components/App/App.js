import React, { Component } from 'react';
import Header from '../Header';
import PlanetRandom from '../PlanetRandom';
import ErrorMessage from '../ErrorMessage';
import ErrorBoundry from '../ErrorBoundry';
import SwapiServices from '../../services/swapiServices';
import { SwapiServiceProvider } from '../SwapiServiceContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StarshipDetails } from '../SW-components';
import { 
  PeoplePage,
  StarshipPage,
  PlanetPage,
  LoginPage,
  SecretPage
} from '../Pages';


import './App.css';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
      isOnLoggedIn: false
    }
  }

  swapiService = new SwapiServices();

  onLogin = () => {
    this.setState({
      isOnLoggedIn: true
    });
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {
    const { hasError, isOnLoggedIn } = this.state;

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

                <Route path="/" render={ () => <h3>Welcome to Star DB</h3> } exact />
                <Route path="/people/:id?" component={ PeoplePage } />
                <Route path="/planets" component={ PlanetPage } />
                <Route path="/starships" exact component={ StarshipPage } />
                <Route 
                  path="/starships/:id"
                  render={ ({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={ id } />
                  } } 
                />
                <Route 
                  path="/login" 
                  render={ 
                    () => (
                      <LoginPage 
                        isOnLoggedIn={ isOnLoggedIn }
                        onLogin={ this.onLogin }/>
                    )
                  }
                />
                <Route 
                  path="/secret" 
                  render={ 
                    () => (
                      <SecretPage isOnLoggedIn={ isOnLoggedIn }/>
                    )
                  }
                />

              </div>
            </Router>
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    );
  }
}
