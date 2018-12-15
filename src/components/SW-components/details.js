import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import { SwapiServiceConsumer } from '../SwapiServiceContext';

const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPeopleById, getPersonUrl }) => {
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
        }
      }
    </SwapiServiceConsumer>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPlanetById, getPlanetUrl }) => {
          return (
            <ItemDetails 
              itemId={ itemId }
              getData={ getPlanetById }
              getImageUrl={ getPlanetUrl }>
              <Record field='name' label='Name:' />
              <Record field='population' label='Population:' />
              <Record field='diameter' label='Diameter:' />
            </ItemDetails>
          );
        }
      }
    </SwapiServiceConsumer>
  );
};

const StarshipDetails = ( { itemId } ) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getStarshipsById, getStarshipUrl }) => {
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
        }
      }
    </SwapiServiceConsumer>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};