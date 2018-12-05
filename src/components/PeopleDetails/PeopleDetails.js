import React, { Component } from 'react';
import SwapiService from '../../services/swapiServices';
import './PeopleDetails.css';

export default class PeopleDetails extends Component {
  constructor() {
    super();

    this.state = {
      person: null
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

  updatePerson() {
    const { personId } = this.props;

    if (!personId) {
      return;
    }

    this.swapiService
      .getPeopleById(personId)
      .then( (person) => {
        this.setState({
          person
        });
      })
      .catch( (error) => ('We catch error while updating the person:' + error) );
  }

  render() {
    if (!this.state.person) {
      return <span>Select person from the list</span>
    }
    const {
      id,
      name,
      gender,
      birthDate,
      eyeColor
    } = this.state.person;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
          alt={name}/>

        <div className="card-body">
          <h4>{name} {this.props.personId}</h4>
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
      </div>
    );
}
}