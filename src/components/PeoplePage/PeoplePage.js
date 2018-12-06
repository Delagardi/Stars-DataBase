import React, { Component} from 'react';
import './PeoplePage.css';
import ItemList from  '../ItemList';
import ItemDetails from '../ItemDetails';
import SwapiService from '../../services/swapiServices';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';

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
      <ItemList 
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getPeopleAll}>
        { 
          ({ name, gender, birthDate }) => 
            `${name}, (${gender}, ${birthDate})` }
      </ItemList>
    );

    const peopleDetails = (
      <ItemDetails 
        itemId={selectedPerson}
        getData={ (itemId) => this.swapiService.getPeopleById(itemId) }
        getImageUrl={this.swapiService.getPersonUrl}
      />
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