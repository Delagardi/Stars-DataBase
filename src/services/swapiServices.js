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
    return response.results;
  }

  async getPeopleById(id) {
    const response = await this.getResourse(`/people/${id}`);
    return response;
  }

  async getPlanetsAll() {
    const response = await this.getResourse(`/planets/`);
    return response.results;
  }

  async getPlanetById(id) {
    const response = await this.getResourse(`/planets/${id}`);
    return response;
  }

  async getStarshipsAll() {
    const response = await this.getResourse(`/starships/`);
    return response.results;
  }

  async getStarshipsById(id) {
    const response = await this.getResourse(`/starships/${id}`);
    return response;
  }
}