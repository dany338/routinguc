import React from 'react';
import PropTypes from 'prop-types';

/* Style Components */
import { Container } from './styled';

const HomePage = props => {
  return (
    <Container>
      ...HomePage
    </Container>
  )
};

HomePage.propTypes = {
  props: PropTypes.object
};

HomePage.defaultProps = {
  props: {}
};

export default HomePage;
