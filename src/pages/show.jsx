// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getElementById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';

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
    return <div>Got show data :{showData.name}</div>;
  }
  return <div>Show page for show {showId}</div>;
};

export default Show;
