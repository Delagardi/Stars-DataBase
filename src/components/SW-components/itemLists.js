import React from 'react';
import ItemList from '../ItemList';
import SwapiServices from '../../services/swapiServices';
import { WithData } from '../hoc-helpers';

const swapiServices = new SwapiServices();
const {
  getPeopleAll,
  getPlanetsAll,
  getStarshipsAll
} = swapiServices;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
}

const renderName = ({ name }) => <span>{ name } </span>;
const renderNameAndModel = ({ name, model }) => <span>{ name } ( { model } )</span>;
const renderNameAndRotation = ({ name, rotationPeriod }) => <span>{ name } (Rotation peiod: { rotationPeriod } )</span>;
//const ListWithChildren = withChildFunction(ItemList, renderName);

const PersonList = WithData(withChildFunction(ItemList, renderName), getPeopleAll);
const StarshipList = WithData(withChildFunction(ItemList, renderNameAndModel), getStarshipsAll);
const PlanetList = WithData(withChildFunction(ItemList, renderNameAndRotation), getPlanetsAll);

export {
  PersonList,
  PlanetList,
  StarshipList
};