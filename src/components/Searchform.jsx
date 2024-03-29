import { useState } from 'react';
const SearchForm = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

// 1) mount
// 2) render
//2.5) logic before next mount
// 3) unmount
// useeffect runs at least one
// useEffect(()=>{
//   console.log("search option changes" , searchOption)
//   return(()=>{
//     console.log("search option before " , searchOption)
//   })
// },[searchOption])

  const onInputChange = ev => {
    setInputValue(ev.target.value);
  };
  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };
  const onSubmit = ev => {
    ev.preventDefault();
    const options = {
      q: inputValue,
      searchOption,
    };
    onSearch(options);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={inputValue} onChange={onInputChange} />
      <label>
        Shows
        <input
          type="radio"
          name="search-option"
          value="shows"
          checked={searchOption === 'shows'}
          onChange={onRadioChange}
        />
      </label>
      <label>
        Actors
        <input
          type="radio"
          name="search-option"
          value="actors"
          checked={searchOption === 'actors'}
          onChange={onRadioChange}
        />
      </label>
      {/* <Link to={'/started'}>go to srart page</Link>  */}
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
