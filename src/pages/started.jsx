import { useQuery } from '@tanstack/react-query';
import { useStartedShows } from '../lib/useStartedShows';
import { gerShowById } from '../api/tvmaze';
import ShowGrid from '../components/shows/ShowGrid';
import { TextCenter } from '../components/common/TextCenter';

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
    return <TextCenter>No Started Show Yet</TextCenter>;
  }
  if (starredShowsError) {
    return <TextCenter>Error occur: {starredShowsError.message}</TextCenter>;
  }

  return <TextCenter>Shows are loading</TextCenter>;
};

export default Started;
