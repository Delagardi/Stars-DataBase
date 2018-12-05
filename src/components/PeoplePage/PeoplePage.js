import React, { Component} from 'react';
import './PeoplePage.css';
import ItemList from  '../ItemList';
import PeopleDetails from '../PeopleDetails';
import ErrorMessage from '../ErrorMessage';

export default class PeoplePage extends Component {
  constructor() {
    super();

    this.state = {
      selectedPerson: 4,
      hasError: false
    }
  }

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
    );
  }
}