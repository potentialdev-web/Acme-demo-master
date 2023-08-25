/* eslint-disable no-use-before-define */
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import NavItem from './NavItem';

const NavBar = ({
  conversations,
  onSelectFavorite
}) => {

  const content = (
    <PerfectScrollbar options={{ suppressScrollX: true }}>
      <ul>
        {conversations.map((conversation) => (
          <NavItem
            key={conversation.id}
            href={`/conversation/${conversation.id}/view`}
            name={`${conversation.firstName} ${conversation.lastName}`}
            isFavorite={conversation.isFavorite}
            onSelectFavorite={() => onSelectFavorite(conversation.id)}
          />
        ))}
      </ul>
    </PerfectScrollbar>
  );

  return (
    <div
      className="nav-bar"
    >
      {content}
    </div>
  );
};

export default NavBar;
