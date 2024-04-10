// import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getElementById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/seasons';
import Cast from '../components/shows/cast';
import styled from 'styled-components';
import { FlexGrid } from '../components/common/flexGrid';
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
    return <FlexGrid>We have an error :{ShowError.message}</FlexGrid>;
  }
  if (showData) {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to="/started">Go To Home Page</Link>
        </BackHomeWrapper>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <InfoBack>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </InfoBack>
        <InfoBack>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </InfoBack>

        <InfoBack>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </InfoBack>
      </ShowPageWrapper>
    );
  }
  return <FlexGrid>Show page for show {showId}</FlexGrid>;
};

export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: dark;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBack = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
