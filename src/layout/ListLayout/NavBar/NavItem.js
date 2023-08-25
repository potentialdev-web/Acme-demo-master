import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StarFilledImg from '../../../assets/img/star-filled.png';
import StarEmptyImg from '../../../assets/img/star-empty.png';

const NavItem = ({
  isFavorite,
  href,
  name,
  onSelectFavorite,
}) => {

  return (
    <Link
      className="list-item-button"
      to={href}
    >
      <div className="list-item-avatar">
        <span />
      </div>
      <div className="list-item-left">
        <div className="list-item-sub">
          <span className="list-item-title">
            {name}
          </span>
          <span>1h</span>
        </div>
        <div className="list-item-sub">
          <span className="list-item-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
          <img 
            src={isFavorite ? StarFilledImg : StarEmptyImg} 
            className="list-item-time-star"
            alt="favorite"
            onClick={onSelectFavorite}
          />
        </div>
      </div>
    </Link>
  );
};

NavItem.propTypes = {
  isFavorite: PropTypes.bool,
  href: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default NavItem;
