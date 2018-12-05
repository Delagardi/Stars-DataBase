export default class SwapiServices {
  _apiBase = 'https://swapi.co/api';

  async getResourse(url) {
    
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`We couldn't FETCH url ${url}. We get error: ${response.status}`);
    }

    const body = await response.json();

    return body;
  }

  async getPeopleAll() {
    const response = await this.getResourse(`/people/`);

    return response.results.map(this._transformPersonData);
  }

  async getPeopleById(id) {
    const response = await this.getResourse(`/people/${id}`);
    return this._transformPersonData(response);
  }

  async getPlanetsAll() {
    const response = await this.getResourse(`/planets/`);
    return response.results.map(this._transformPlanetData);
  }

  async getPlanetById(id) {
    const response = await this.getResourse(`/planets/${id}`);
    return this._transformPlanetData(response);
  }

  async getStarshipsAll() {
    const response = await this.getResourse(`/starships/`);
    return response.results.map(this._tranformStarshipData);
  }

  async getStarshipsById(id) {
    const response = await this.getResourse(`/starships/${id}`);
    return this._tranformStarshipData(response);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = item.url.match(idRegExp)[1];
    
    return id;
  }
  
  _transformPlanetData = (planet) => {

    return {
      id: this._extractId(planet),
      planetName: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diametr: planet.diametr
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