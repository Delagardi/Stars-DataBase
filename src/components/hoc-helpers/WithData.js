import React, { Component } from 'react';
import Spinner from '../Spinner';
import ErrorBoundry from '../ErrorBoundry';

const WithData = (View, getData) => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        data: null
      }
    }
  
    componentDidMount() {      
      getData()
        .then((data) => {
          this.setState({
            data
          });
        }).catch( (error) => console.log ('We catch some error here!', error));
    }

    render() {
      const { data } = this.state;

      if( !data ) {
        return <Spinner/>
      }

      return (
        <ErrorBoundry>
          <View {...this.props} data={ data }/>
        </ErrorBoundry>        
      );
    }
  }
}

export default WithData;