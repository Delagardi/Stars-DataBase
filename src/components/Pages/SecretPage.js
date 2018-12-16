import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isOnLoggedIn }) => {
  if (isOnLoggedIn) {
    return(
      <div className="jumbotron text-center">
        <h3>Page full of secrets!</h3>
      </div>
    );
  }

  return (
    <Redirect to="/login" />
  );
}

export default SecretPage;