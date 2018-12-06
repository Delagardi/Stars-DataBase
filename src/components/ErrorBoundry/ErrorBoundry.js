import React, { Component } from 'react';
import ErrorMessage from '../ErrorMessage';

class ErrorBoundry extends Component {
  constructor() {
    super();

    this.state = {
      haseError: false
    }
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {
    const { hasError } = this.state;
    
    if (hasError) {
      return <ErrorMessage/>
    }

    return (
      this.props.children
    );
  }
}

export default ErrorBoundry;