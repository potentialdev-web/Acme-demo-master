import React from 'react';
import ArrowDownImg from '../assets/img/arrow-down.png';

const SelectBox = ({onChange}) => {

  return (
    <div className="select-categories">
      <div className="select-box">
        <select 
          className="select-conversation"
          onChange={onChange}
        >
          <option value="all">All Conversations</option>
          <option value="favorite">Favorites</option>
          <option value="unfavorite">Unfavorites</option>
        </select>
        <img
          src={ArrowDownImg}
          alt="select box arrow down"
        />
      </div>
    </div>
  );
};

export default SelectBox;
