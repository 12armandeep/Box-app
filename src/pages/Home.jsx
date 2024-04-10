// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { searchForShow, searchForPerson } from '../api/tvmaze';
import SearchForm from '../components/Searchform';
import ShowGrid from '../components/shows/ShowGrid';
import ActorGrid from '../components/actors/ActorGrid';

import { useQuery } from '@tanstack/react-query';
// to understand the concept of reducer this is for understanding only
// const reducefn = (currentCounter, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return currentCounter + 1;
//     case 'DECREMENT':
//       return currentCounter - 1;
//     case 'RESET':
//       return 0;
//     case 'SET_VALUE':
//       return action.newCounterValue;
//   }
// };

const Home = () => {
  const [filter, setFilter] = useState(null);
  // const [counter, dispatch] = useReducer(reducefn);

  const { data: apidata, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption == 'shows'
        ? searchForShow(filter.q)
        : searchForPerson(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  // const onIncrement = () => {
  //   dispatch({ type: 'INCREMENT' });
  // };
  // const onDecrement = () => {
  //   dispatch({ type: 'DECREMENT' });
  // };
  // const onReset = () => {
  //   dispatch({ type: 'RESET' });
  // };
  // const Set_Value = () => {
  //   dispatch({ type: 'SET_VALUE', newCounterValue: 500 });
  // };
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
      <div>
        <img
          src="C:/Users/91628/.vscode/React js/moviehub/Moviehub/Movie-hub/Movie/src/assets/bg.jpg"
          alt=""
        />
      </div>

      <SearchForm onSearch={onSearch} />
      {/* <div>Counter :{counter}</div>
      <button type="button" onClick={onIncrement}>
        Increment
      </button>
      <button type="button" onClick={onDecrement}>
        Decrement
      </button>
      <button type="button" onClick={onReset}>
        Reset
      </button>
      <button type="button" onClick={Set_Value}>
        Set Value to 500
      </button> */}
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
