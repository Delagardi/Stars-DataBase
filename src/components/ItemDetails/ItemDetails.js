import React, { Component } from 'react';
import SwapiService from '../../services/swapiServices';
import Spinner from '../Spinner';
import './ItemDetails.css';

const Record = ({ item, field, label }) => {
  const content = item === null ? <Spinner/> : item[field];

  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{ content }</span>
    </li>
  );
};

export {
  Record
};

export default class ItemDetails extends Component {
  constructor() {
    super();

    this.state = {
      item: null,
      image: null,
      loading: true
    }
  }

  swapiService = new SwapiService();

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId ) {
      this.updateItem();
    }
  }

  onItemDetailsLoaded = (item) => {
    this.setState({
      item,
      loading: false
    });
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    this.setState({
      loading: true
    });

    if (!itemId) {
      return;
    }

    getData(itemId)
      .then( (item) => {
          this.setState({
            item,
            loading: false,
            image: getImageUrl(item)
          })
        }
      )
      .catch( (error) => ('We catch error while updating the item:' + error) );
    
  }

  render() {
    const { item, image, loading } = this.state;
    const children = this.props.children;
    
    const spinner = (loading || (item === null)) ? <Spinner/> : null;
    const kids =  React.Children.map(children, (child) => {
      return React.cloneElement(child, { item });
    });
    const content = !loading ? <ItemDetailsView 
                                  itemName={item.name} 
                                  image={image}
                                  children={children} 
                                  kids={kids}/> : null;

    return (
      <div className="item-details card">
        {spinner}
        {content}
      </div>
    );
  }
}

const ItemDetailsView = ({itemName, image, kids}) => {
  return (
    <React.Fragment>
      <img className="item-image"
        src={image} 
        alt={itemName}/>
      <div className="card-body">
        <h4>{itemName}</h4>
        <ul className="list-group list-group-flush">
          {kids}
        </ul>
      </div>
    </React.Fragment>
  );
}