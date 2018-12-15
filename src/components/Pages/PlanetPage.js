import React, { Component} from 'react';
import SwapiService from '../../services/swapiServices';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';
import { PlanetList } from '../SW-components';
import { PlanetDetails } from '../SW-components';

export default class PlanetPage extends Component {
  constructor() {
    super();

    this.state = {
      selectedPlanet: 4
    }
  }

  swapiService = new SwapiService();

  onPlanetSelected = (id) => {
    this.setState({
      selectedPlanet: id
    });
  }

  render() {
    const { selectedPlanet } = this.state;
    
    const itemList = (
      <PlanetList
        onItemSelected={this.onPlanetSelected}>
      </PlanetList>
      
    );

    const peopleDetails = (
      <PlanetDetails itemId={ selectedPlanet } />
    );

    return(
      <ErrorBoundry>
        <Row 
          left={itemList}
          right={peopleDetails}/>
      </ErrorBoundry>
    );
  }
}