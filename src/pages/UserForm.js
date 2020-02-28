import React from 'react';
import PropTypes from 'prop-types';

/* Style Components */
import { Container } from './styled';

const UserForm = props => {
  return (
    <Container>
      ...UserForm
    </Container>
  )
};

UserForm.propTypes = {
  props: PropTypes.object
};

UserForm.defaultProps = {
  props: {}
};

export default UserForm;
