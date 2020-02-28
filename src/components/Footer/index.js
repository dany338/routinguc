import React from 'react';
import PropTypes from 'prop-types';

/* Style Components */
import { Container } from './styled';

const Footer = props => {
  return (
    <Container>
      ...Footer
    </Container>
  )
};

Footer.propTypes = {
  props: PropTypes.object
};

Footer.defaultProps = {
  props: {}
};

export default Footer;
