import { useEffect, useReducer } from 'react';
import ShowCards from './ShowCards';

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const presistedValue = localStorage.getItem(localStorageKey);
    return presistedValue ? JSON.parse(presistedValue) : initial;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};
const starredShowsReducer = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.showId);
    case 'UNSTAR':
      return currentStarred.filter(showId => showId !== action.showId);
    default:
      return currentStarred;
  }
};
const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = usePersistedReducer(
    starredShowsReducer,
    [],
    'starredShows'
  ); //to store the shows into an array and add it into starrted shows
  console.log({ starredShows });

  // this is done for the localstorage in the browser whch can help us to add the show in the localstorage by refreshing the page our data is not remove it is store in the storage

  const OnStarMeCLick = showId => {
    const isStarred = starredShows.includes(showId);
    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };

  return (
    <div>
      {shows.map(data => (
        <ShowCards
          key={data.show.name}
          id={data.show.id}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : '/not-found-image.png'
          }
          summary={data.show.summary}
          OnStarMeCLick={OnStarMeCLick}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
