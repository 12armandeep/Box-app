import { useState } from 'react';
import { SearchState } from '../lib/useSearchState';
import CustomRadio from './CustomRadio';

const SearchForm = ({ onSearch }) => {
  const [inputValue, setInputValue] = SearchState();
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
      <CustomRadio
        label="Shows"
        name="search-option"
        value="shows"
        checked={searchOption === 'shows'}
        onChange={onRadioChange}
      />
      <CustomRadio
        label="Actors"
        name="search-option"
        value="actors"
        checked={searchOption === 'actors'}
        onChange={onRadioChange}
      />

      {/* <Link to={'/started'}>go to srart page</Link>  */}
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
