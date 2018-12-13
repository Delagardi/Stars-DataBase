import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import SwapiServices from '../../services/swapiServices';

const swapiService = new SwapiServices();

const {
  getPeopleById,
  getStarshipsById,
  //getPlanetById,
  getPersonUrl,
  //getPlanetUrl,
  getStarshipUrl
} = swapiService;

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails 
      itemId={ itemId }
      getData={ getPeopleById }
      getImageUrl={ getPersonUrl }>
      <Record field='gender' label='Gender:' />
      <Record field='birthDate' label='Birth year:' />
      <Record field='eyeColor' label='Eye color:' />
    </ItemDetails>
  );
};

//const PlanetDetails = () => {};

const StarshipDetails = ( { itemId } ) => {
  return (
    <ItemDetails 
      itemId={ itemId }
      getData={ getStarshipsById }
      getImageUrl={ getStarshipUrl }>
      <Record field='model' label='Model:' />
      <Record field='length' label='Length:' />
      <Record field='price' label='Cost:' />
    </ItemDetails>
  );
};

export {
  PersonDetails,
  //PlanetDetails,
  StarshipDetails
};