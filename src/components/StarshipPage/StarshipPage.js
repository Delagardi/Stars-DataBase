import React, { Component} from 'react';
import ItemList from  '../ItemList';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import SwapiService from '../../services/swapiServices';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';

import './StarshipPage.css';

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
      <ItemList 
        onItemSelected={this.onStarshipSelected}
        getData={this.swapiService.getStarshipsAll}>
        { 
          ({ name, model, length }) => 
            `${name}, (${model}, ${length})` }
      </ItemList>
    );

    const itemDetails = (
      <ItemDetails 
        itemId={selectedStarship}
        getData={ (itemId) => this.swapiService.getStarshipsById(itemId)}
        getImageUrl={this.swapiService.getStarshipUrl}>
        <Record field="length" label='Length:' />
        <Record field="model" label='Model:' />
      </ItemDetails>
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