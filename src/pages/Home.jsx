// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { searchForShow, searchForPerson } from '../api/tvmaze';
import SearchForm from '../components/Searchform';

const Home = () => {
  const [apidata, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setApiDataError(null);
      if (searchOption == 'shows') {
        const results = await searchForShow(q);
        setApiData(results);
      } else {
        const results = await searchForPerson(q);
        setApiData(results);
      }
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured:{apiDataError.message}</div>;
    }
    if (apidata) {
      return apidata[0].show
        ? apidata.map(data => {
            <div key={data.show.id}>{data.show.name}</div>;
          })
        : apidata.map(data => {
            <div key={data.person.id}>{data.person.name}</div>;
          });
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
