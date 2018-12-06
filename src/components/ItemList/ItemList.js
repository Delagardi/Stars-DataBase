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

  renderItems(array) {
    return array.map( (item) => {
      const { id } = item;
      const label = this.props.children(item);

      return (
        <li 
          key={id}
          className="list-group-item"
          onClick={ () => this.props.onPersonSelected(id)}>
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;
    
    if( !itemList ) {
      return <Spinner/>
    }

    const itemView = this.renderItems(itemList);
    
    return (
      <ul className="item-list list-group">
        {itemView}
      </ul>
    );
  }
}