import React from 'react';
import './ItemList.css';
//import SwapiServices from '../../services/swapiServices';

const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;
  
  const items = data.map( (item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li 
        key={id}
        className="list-group-item"
        onClick={ () => onItemSelected(id)}>
        {label}
      </li>
    );
  });
  
  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
}

//const { getPeopleAll } = new SwapiServices();

export default ItemList;
//export default WithData(ItemList, getPeopleAll);

