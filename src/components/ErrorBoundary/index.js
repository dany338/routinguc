/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      return <div><b>Something went wrong:</b> <p style={{ color: 'red' }}>{error.message}</p></div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
