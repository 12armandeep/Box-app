import ShowCards from './ShowCards';
import { useStartedShows } from '../../lib/useStartedShows';
import { FlexGrid } from '../common/flexGrid';
import NotFoundImgSrc from '../../lib/image-not-found.jpg';
const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = useStartedShows();

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
    <FlexGrid>
      {shows.map(data => (
        <ShowCards
          key={data.show.name}
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : NotFoundImgSrc}
          summary={data.show.summary}
          OnStarMeCLick={OnStarMeCLick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
