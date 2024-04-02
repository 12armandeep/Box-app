import { useStartedShows } from '../lib/useStartedShows';

const Started = () => {
  const [starredShows] = useStartedShows();
  //
  return <div>Start page , started {starredShows.length}</div>;
};

export default Started;
