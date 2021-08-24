import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

export const Header = ({title}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "Home"
};

export default Header;