import React, { Component } from 'react';
import Spinner from '../Spinner';
import './ItemList.css';

export default class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      itemList: null
    }
  }

  componentDidMount() {
    const { getData } = this.props;
    console.log('getData:');
    console.log(getData);
    getData()
      .then((itemList) => {
        this.setState({
          itemList
        });
      }).catch( (error) => console.log ('We catch some error here!', error));
  }

  renderItem(array) {
    return array.map( ({ id, name}) => {
      return (
        <li 
          key={id}
          className="list-group-item"
          onClick={ () => this.props.onPersonSelected(id)}>
          {name}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;
    
    if( !itemList ) {
      return <Spinner/>
    }

    const itemView = this.renderItem(itemList);
    
    return (
      <ul className="item-list list-group">
        {itemView}
      </ul>
    );
  }
}