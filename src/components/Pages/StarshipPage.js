import React, { Component} from 'react';
import SwapiService from '../../services/swapiServices';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';
import { StarshipList } from '../SW-components'
import { StarshipDetails } from '../SW-components';

export default class StarshipPage extends Component {
  constructor() {
    super();

    this.state = {
      selectedStarship: 5
    }
  }

  swapiService = new SwapiService();

  onStarshipSelected = (id) => {
    this.setState({
      selectedStarship: id
    });
  }
  
  render() {
    const { selectedStarship } = this.state;
    
    const itemList = (
      <StarshipList
        onItemSelected={this.onStarshipSelected}>
        
      </StarshipList>
    );

    const itemDetails = (
      <StarshipDetails itemId={ selectedStarship } />
    );

    return(
      <ErrorBoundry>
        <Row 
          left={itemList}
          right={itemDetails}/>
      </ErrorBoundry>
    );
  }
}