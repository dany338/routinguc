import React from 'react';
import PropTypes from 'prop-types';

/* Style Components */
import { Container } from './styled';

const Header = props => {
  return (
    <Container>
      ...Header
    </Container>
  )
};

Header.propTypes = {
  props: PropTypes.object
};

Header.defaultProps = {
  props: {}
};

export default Header;
