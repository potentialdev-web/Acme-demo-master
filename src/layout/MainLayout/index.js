import React from 'react';
import PropTypes from 'prop-types';

const MainLayout = ({
  children,
  ...rest
}) => {
  return (
    <div 
      className="main-layout"
      {...rest}
    >
      {children}
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
