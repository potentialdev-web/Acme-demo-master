import React from 'react';
import PropTypes from 'prop-types';

const MainView = ({
  children,
}) => {
  return (
    <div
      className="main-view"
    >
      <div className="conversation-content">
        <p>
          Hello!
        </p>
      </div>
      <div className="conversation-send">
        <input placeholder="Your message here..." />
        <button
          className="button-follow-up"
        >
          Send
        </button>
      </div>
    </div>
  );
}

MainView.propTypes = {
  children: PropTypes.node,
};

export default MainView;
