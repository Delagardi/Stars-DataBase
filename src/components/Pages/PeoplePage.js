import React, { Component} from 'react';
import SwapiService from '../../services/swapiServices';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';
import { PersonList } from '../SW-components';
import { PersonDetails } from '../SW-components';

export default class PeoplePage extends Component {
  constructor() {
    super();

    this.state = {
      selectedPerson: 4
    }
  }

  swapiService = new SwapiService();

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  }

  render() {
    const { selectedPerson } = this.state;
    
    const itemList = (
      <PersonList
        onItemSelected={this.onPersonSelected}>
      </PersonList>
      
    );

    const peopleDetails = (
      <PersonDetails itemId={ selectedPerson } />
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