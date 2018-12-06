export default class SwapiServices {
  _apiBase = 'https://swapi.co/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResourse = async (url) => {
    
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`We couldn't FETCH url ${url}. We get error: ${response.status}`);
    }

    const body = await response.json();

    return body;
  }

  getPeopleAll = async () => {
    const response = await this.getResourse(`/people/`);

    return response.results.map(this._transformPersonData);
  }

  getPeopleById = async (id) => {
    const response = await this.getResourse(`/people/${id}`);
    return this._transformPersonData(response);
  }

  getPersonUrl = ({ id }) => {
    return `${this._imageBase}/characters/${id}.jpg`
  }

  getPlanetsAll = async () => {
    const response = await this.getResourse(`/planets/`);
    return response.results.map(this._transformPlanetData);
  }

  getPlanetById = async (id) => {
    const response = await this.getResourse(`/planets/${id}`);
    return this._transformPlanetData(response);
  }

  getPlanetUrl = ({ id }) => {
    return `${this._imageBase}/planets/${id}.jpg`
  }

  getStarshipsAll = async () => {
    const response = await this.getResourse(`/starships/`);
    return response.results.map(this._tranformStarshipData);
  }

  getStarshipsById = async (id) => {
    const response = await this.getResourse(`/starships/${id}`);
    return this._tranformStarshipData(response);
  }

  getStarshipUrl = ({ id }) => {
    return `${this._imageBase}/starships/${id}.jpg`
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = item.url.match(idRegExp)[1];
    
    return id;
  }
  
  _transformPlanetData = (planet) => {

    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _tranformStarshipData = (ship) => {
    return {
      id: this._extractId(ship),
      name: ship.name,
      length: ship.length,
      manufacturer: ship.manufacturer,
      model: ship.model,
      price: ship.cost_in_credits,
      crew: ship.crew,
      cargoCapacity: ship.cargo_capacity,
      passengers: ship.passengers
    }
  }

  _transformPersonData = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthDate: person.birth_year,
      eyeColor: person.eye_color
    }
  }
}