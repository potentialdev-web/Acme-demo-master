import React from 'react';
import SearchBox from '../../../components/SearchBox';
import SelectBox from '../../../components/Select';
import AddConversationImg from "../../../assets/img/add-conversation.png";

const TopBar = ({
  onQueryChange,
  onFilterChange
}) => {

  return (
    <div className="top-bar">
      <div className="top-bar-line">
        <SearchBox
          onChange={onQueryChange}
        />
        <a href="/">
          <img 
            className="add-conversation-button"
            src={AddConversationImg} 
            alt="add conversation" 
          />
        </a>
      </div>
      <div className="top-bar-line">
        <SelectBox 
          onChange={onFilterChange}
        />
        <button
          className="button-follow-up"
        >
          Follow Up
        </button>
      </div>
    </div>
  );
};

export default TopBar;
