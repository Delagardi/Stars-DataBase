import React, { Component} from 'react';
import './PeoplePage.css';
import ItemList from  '../ItemList';
import PeopleDetails from '../PeopleDetails';
import ErrorMessage from '../ErrorMessage';
import SwapiService from '../../services/swapiServices';

const Row = ({ left, right }) => {
  return (
    <div className="row mb-2">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
  );
}

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

    const itemList = (
      <ItemList 
        onPersonSelected={this.onPersonSelected}
        getData={this.swapiService.getPeopleAll}
        renderItem={ ({ name, gender, birthDate }) => `${name}, (${gender}, ${birthDate})` }/>
    );

    const peopleDetails = (
      <PeopleDetails 
            personId={selectedPerson}/>
    );

    return(
        <Row 
          left={itemList}
          right={peopleDetails}/>
    );
  }
}