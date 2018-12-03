import React from 'react';

import './Spinner.css';

const Spinner = () => {
  return (
    <div className="lds-css ng-scope mx-auto">
      <div className="lds-flickr">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;