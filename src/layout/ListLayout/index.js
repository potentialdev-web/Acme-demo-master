import React, { 
  useEffect,
  useState,
  useCallback
} from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import axios from '../../utils/axios';
import LoadingScreen from '../../components/LoadingScreen';

const updateElementById = (arr, index, newValue) => arr.map((item, i) => i === index ? newValue: item)

const applyFilters = (conversations, query, filter) => {
  return conversations && conversations.filter((conversation) => {
    let matches = true;

    if (query) {
      const properties = ['firstName', 'lastName'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (conversation[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (!containsQuery) {
        matches = false;
      }
    }

    if (filter.selectFavorite) {
      if (filter.selectFavorite === 'favorite' && !conversation.isFavorite) {
        matches = false;
      }

      if (filter.selectFavorite === 'unfavorite' && conversation.isFavorite) {
        matches = false;
      }
    }

    return matches;
  });
};

const ListLayout = ({
  ...rest
}) => {
  const isMountedRef = useIsMountedRef();

  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState({
    selectFavorite: null
  });
  const [conversations, setConversations] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleSelectFavoriteConversations = (conversationId) => {
    const index = conversations.findIndex(conversation => conversation.id === conversationId);

    if (index >= 0) {
      setConversations(updateElementById(conversations, index, {...conversations[index], isFavorite: !conversations[index].isFavorite}));
    }
  };

  const handleFavoriteFilterChange = (event) => {
    event.persist();
    let value = null;

    if (event.target.value !== 'all') {
      value = event.target.value;
    }

    setFilter({
      selectFavorite: value
    });
  };

  const getConversations = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/conversations');

      if (isMountedRef.current) {
        setConversations(response.data.conversations);
      }
    } catch (err) {
      console.error(err);
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [isMountedRef]);

  useEffect(() => {
    getConversations();
  }, [getConversations]);

  const filteredConversations = applyFilters(conversations, query, filter);

  return (
    <div
      className="list-layout"
      {...rest}
    >
      <TopBar
        onQueryChange={handleQueryChange}
        onFilterChange={handleFavoriteFilterChange}
      />
      {isLoading || !filteredConversations ? (
        <LoadingScreen />
      ) : (
        <NavBar 
          conversations={filteredConversations}
          onSelectFavorite={handleSelectFavoriteConversations}
        />
      )}
    </div>
  );
}

export default ListLayout;
