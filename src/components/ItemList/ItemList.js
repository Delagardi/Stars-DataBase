import React, { Component } from 'react';
import SwapiService from '../../services/swapiServices';
import Spinner from '../Spinner';
import './ItemList.css';

export default class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      peopleList: null
    }
  }

  swapiService = new SwapiService();

  componentDidMount() {
    this.swapiService
      .getPeopleAll()
      .then((peopleList) => {
        this.setState({
          peopleList
        });
      }).catch( (error) => console.log ('We catch some error here!', error));
  }

  renderItem(array) {
    return array.map( ({ id, name}) => {
      return (
        <li 
          key={id}
          className="list-group-item">
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;
    
    if( !peopleList ) {
      return <Spinner/>
    }

    const itemView = this.renderItem(peopleList);
    
    return (
      <ul className="item-list list-group">
        {itemView}
      </ul>
    );
  }
}