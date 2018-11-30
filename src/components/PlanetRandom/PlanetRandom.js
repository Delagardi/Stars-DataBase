import React, { Component } from 'react';

import './PlanetRandom.css';
import SwapiServices from '../../services/swapiServices';

export default class PlanetRandom extends Component {
  swapiService = new SwapiServices();

  constructor() {
    super();

    this.state = {
      id: null,
      planetName: null,
      population: null,
      rotationPeriod: null,
      diametr: null
    }

    this.updatePlanet();
  }

  updatePlanet() {
    const id = Math.floor(Math.random()*25 + 1);

    this.swapiService
      .getPlanetById(id)
      .then( (planet) => {
        this.setState({
          id,
          planetName: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diametr: planet.diametr
        });
      })
  }

  render(){
    const { id, planetName, population, rotationPeriod, diametr } = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{planetName}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diametr}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}