// import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getElementById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/seasons';
import Cast from '../components/shows/cast';
// const useShowById = showId => {
//   const [showData, setShowData] = useState(null);
//   const [ShowError, setShowError] = useState(null);
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getElementById(showId);
//         setShowData(data);
//       } catch (err) {
//         setShowError(err);
//       }
//     }

//     fetchData();
//   }, [showId]);

//   return { showData, ShowError };
// };
const Show = () => {
  const { showId } = useParams();
  // const { showData, ShowError } = useShowById(showId);
  const { data: showData, error: ShowError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getElementById(showId),
  });
  if (ShowError) {
    return <div>We have an error :{ShowError.message}</div>;
  }
  if (showData) {
    return (
      <div>
        <Link to="/">Go To Home Page</Link>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <div>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>
        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>

        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }
  return <div>Show page for show {showId}</div>;
};

export default Show;
