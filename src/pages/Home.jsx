// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { searchForShow } from '../api/tvmaze';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [apidata, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const onInputChange = ev => {
    setInputValue(ev.target.value);
  };

  const onSearch = async event => {
    event.preventDefault();
    try {
      setApiDataError(null);
      const results = await searchForShow(inputValue);
      setApiData(results);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured:{apiDataError.message}</div>;
    }
    if (apidata) {
      return apidata.map(data => {
        <div key={data.show.id}>{data.show.name}</div>;
      });
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={inputValue} onChange={onInputChange} />
        {/* <Link to={'/started'}>go to srart page</Link>  */}
        <button type="submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
