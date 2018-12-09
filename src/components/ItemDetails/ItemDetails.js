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
    
    const spinner = (loading || (item === null)) ? <Spinner/> : null;
    const content = !loading ? <ItemDetailsView itemDetails={item} image={image}/> : null;

    return (
      <div className="item-details card">
        {spinner}
        {content}
        <ul>
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
        </ul>
      </div>
    );
  }
}

const ItemDetailsView = ({itemDetails, image}) => {
  const {
    name,
    gender,
    birthDate,
    eyeColor
  } = itemDetails;

  return (
    <React.Fragment>
      <img className="item-image"
      src={image} 
      alt={name}/>
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthDate}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}