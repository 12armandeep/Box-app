import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getElementById } from '../api/tvmaze';
const Show = () => {
  const { showId } = useParams();
  const [showData, setShowData] = useState(null);
  const [ShowError, setShowError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getElementById(showId);
        setShowData(data);
      } catch (err) {
        setShowError(err);
      }
    }

    fetchData();
  }, [showId]);

  if (ShowError) {
    return <div>We have an error :{ShowError.message}</div>;
  }
  if (showData) {
    return <div>Got show data :{showData.name}</div>;
  }
  return <div>Show page for show {showId}</div>;
};

export default Show;
