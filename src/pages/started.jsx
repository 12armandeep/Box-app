import { useQuery } from '@tanstack/react-query';
import { useStartedShows } from '../lib/useStartedShows';
import { gerShowById } from '../api/tvmaze';
import ShowGrid from '../components/shows/ShowGrid';

const Started = () => {
  const [starredShowsIds] = useStartedShows();
  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      gerShowById(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),

    refetchOnWindowFocus: false,
  });
  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }
  if (starredShows?.length == 0) {
    return <div>No Started Show Yet</div>;
  }
  if (starredShowsError) {
    return <div>Error occur: {starredShowsError.message}</div>;
  }

  return <div>Shows are loading</div>;
};

export default Started;
