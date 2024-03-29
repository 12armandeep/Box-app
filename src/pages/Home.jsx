// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { searchForShow, searchForPerson } from '../api/tvmaze';
import SearchForm from '../components/Searchform';
import ShowGrid from '../components/shows/ShowGrid';
import ActorGrid from '../components/actors/ActorGrid';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apidata, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption == 'shows'
        ? searchForShow(filter.q)
        : searchForPerson(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });
  // const [apidata, setApiData] = useState(null);
  // const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
    //   try {
    //     setApiDataError(null);
    //     if (searchOption == 'shows') {
    //       const results = await searchForShow(q);
    //       setApiData(results);
    //     } else {
    //       const results = await searchForPerson(q);
    //       setApiData(results);
    //     }
    //   } catch (error) {
    //     setApiDataError(error);
    //   }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured:{apiDataError.message}</div>;
    }
    if (apidata?.length === 0) {
      return <div>No results</div>;
    }
    if (apidata) {
      return apidata[0].show ? (
        <ShowGrid shows={apidata} />
      ) : (
        <ActorGrid actors={apidata} />
      );
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
