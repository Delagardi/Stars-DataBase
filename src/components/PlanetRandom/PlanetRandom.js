import React, { Component } from 'react';
import Spinner from '../Spinner';
import './PlanetRandom.css';
import SwapiServices from '../../services/swapiServices';
import ErrorMessage from '../ErrorMessage';

export default class PlanetRandom extends Component {
  swapiService = new SwapiServices();

  constructor() {
    super();

    this.state = {
      planet: {},
      loading: true,
      error: false
    }

    this.updatePlanet();
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(() => {
      this.updatePlanet();
    }, 5000);
    //clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState ({ 
      planet,
      loading: false,
    })
  }

  onError = (error) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updatePlanet() {
    const id = Math.floor(Math.random()*10 + 1);

    this.swapiService
      .getPlanetById(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render(){
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMsg = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner /> : null;
    const planetView = hasData ? <PlanetView planet={ planet }/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        { errorMsg }
        { spinner }
        { planetView }
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, planetName, population, rotationPeriod, diametr } = planet;

  return (
    <React.Fragment>
      <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=''/>
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
    </React.Fragment>
  );
}