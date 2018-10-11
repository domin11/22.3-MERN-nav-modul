import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './Navbar.css';

const Navbar = (props, context) => {
  return <div className={styles['navbar']}>
    <Link to="/home"><FormattedMessage id="home" /></Link>
    <Link to="/"><FormattedMessage id="posts" /></Link>
    <Link to="/about"><FormattedMessage id="about" /></Link>
  </div>
};

Navbar.propTypes = {
};

export default Navbar;
