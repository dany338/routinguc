import React from 'react';
import PropTypes from 'prop-types';

/* Style Components */
import { Container } from './styled';

const Dashboard = props => {
  return (
    <Container>
      ...Dashboard
    </Container>
  )
};

Dashboard.propTypes = {
  props: PropTypes.object
};

Dashboard.defaultProps = {
  props: {}
};

export default Dashboard;
