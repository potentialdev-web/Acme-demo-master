import React from 'react';
import SearchImg from "../assets/img/search.png";

const SearchBox = ({onChange}) => {

  return (
    <div className="search-box">
      <img 
        src={SearchImg} 
        className="add-conversation-button" 
        alt="search" 
      />
      <input
        type="text"
        className="input-search"
        placeholder="Search or a new chat..."
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
