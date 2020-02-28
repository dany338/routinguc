import React from 'react';
import PropTypes from 'prop-types';

/* Style Components */
import { Container } from './styled';

const Users = props => {
  return (
    <Container>
      ...Users
    </Container>
  )
};

Users.propTypes = {
  props: PropTypes.object
};

Users.defaultProps = {
  props: {}
};

export default Users;
