import React, { Component } from 'react';

import SwapiServices from '../../services/swapiServices';

export default class PlanetRandom extends Component {
  swapiService = new SwapiServices();

  constructor() {
    super();

    this.state = {
      planetName: null,
      population: null,
      rotationPeriod: null,
      diametr: null
    }

    this.updatePlanet();
  }

  updatePlanet() {
    this.swapiService
      .getPlanetById(10)
      .then( (planet) => {
        this.setState({
          planetName: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diametr: planet.diametr
        });
      })
  }

  render(){
    const { planetName, population, rotationPeriod, diametr } = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
            src="https://starwars-visualguide.com/assets/img/planets/5.jpg" />
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