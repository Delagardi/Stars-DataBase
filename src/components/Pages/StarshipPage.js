import React from 'react';
import ErrorBoundry from '../ErrorBoundry';
import { StarshipList } from '../SW-components';
import { withRouter } from 'react-router-dom';

const StarshipPage = ({ history }) => {
    return(
      <ErrorBoundry>
        <StarshipList
        onItemSelected={ (itemId) => { history.push(itemId) } }/>
      </ErrorBoundry>
    );
}

export default withRouter(StarshipPage);