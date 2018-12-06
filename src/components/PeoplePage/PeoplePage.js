import React, { Component} from 'react';
import './PeoplePage.css';
import ItemList from  '../ItemList';
import PeopleDetails from '../PeopleDetails';
import ErrorMessage from '../ErrorMessage';
import SwapiService from '../../services/swapiServices';

export default class PeoplePage extends Component {
  constructor() {
    super();

    this.state = {
      selectedPerson: 4,
      hasError: false
    }
  }

  swapiService = new SwapiService();

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  }
  
  render() {
    const { selectedPerson, hasError } = this.state;
    
    if (hasError) {
      return <ErrorMessage/>
    }

    return(
      <div className="row mb-2">
        <div className="col-md-6">
          <ItemList 
            onPersonSelected={this.onPersonSelected}
            getData={this.swapiService.getPeopleAll}
            dataType='peopleType'/>
        </div>
        <div className="col-md-6">
          <PeopleDetails 
            personId={selectedPerson}/>
        </div>
      </div>
    );
  }
}