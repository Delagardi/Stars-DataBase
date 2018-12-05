import React, { Component } from 'react';
import SwapiService from '../../services/swapiServices';
import Spinner from '../Spinner';
import './PeopleDetails.css';

export default class PeopleDetails extends Component {
  constructor() {
    super();

    this.state = {
      person: null,
      loading: true
    }
  }

  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId ) {
      this.updatePerson();
    }
  }

  onPersonDetailsLoaded = (person) => {
    this.setState({
      person,
      loading: false
    });
  }

  updatePerson() {
    const { personId } = this.props;

    this.setState({
      loading: true
    });

    if (!personId) {
      return;
    }

    this.swapiService
      .getPeopleById( personId )
      .then( this.onPersonDetailsLoaded )
      .catch( (error) => ('We catch error while updating the person:' + error) );
  }

  render() {
    const { person, loading } = this.state;

    const spinner = loading ? <Spinner/> : null;
    const content = !loading ? <PeopleDetailsView personDetails={person}/> : null;

    if (!person) {
      return <span>Select person from the list</span>
    }

    return (
      <div className="person-details card">
        {spinner}
        {content}    
      </div>
    );
  }
}

const PeopleDetailsView = ({personDetails}) => {
  const {
    id,
    name,
    gender,
    birthDate,
    eyeColor
  } = personDetails;

  return (
    <React.Fragment>
      <img className="person-image"
      src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
      alt={name}/>
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthDate}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}