import React, { Component } from 'react';

import Header from '../Header';
import ItemList from '../ItemList';
import PeopleDetails from '../PeopleDetails';
import PlanetRandom from '../PlanetRandom';

import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedPerson: 5
    }
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  }

  render() {
    const { selectedPerson } = this.state;
    
    return(
      <div>
        <Header />
        <PlanetRandom />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList 
              onPersonSelected={this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PeopleDetails 
              personId={selectedPerson}/>
          </div>
        </div>
      </div>
    );
  }
}
