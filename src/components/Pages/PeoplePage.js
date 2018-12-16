import React from 'react';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';
import { PersonList, PersonDetails } from '../SW-components';
import { withRouter } from 'react-router-dom';

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;

  return(
    <ErrorBoundry>
      <Row 
        left={ <PersonList 
                  onItemSelected={ (id) => history.push(id) }
                /> }
        right={ <PersonDetails itemId={ id } /> }/>
    </ErrorBoundry>
  );  
}

export default withRouter(PeoplePage);