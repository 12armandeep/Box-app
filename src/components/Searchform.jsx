import { useState } from 'react';
import { SearchState } from '../lib/useSearchState';
import CustomRadio from './CustomRadio';
import styled from 'styled-components';

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
      <SearchInput
        type="text"
        placeholder="Search for something"
        value={inputValue}
        onChange={onInputChange}
      />
      <RadioWrapper>
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
      </RadioWrapper>

      {/* <Link to={'/started'}>go to srart page</Link>
       */}
      <SearchButtonWrapper>
        <button type="submit">Search</button>
      </SearchButtonWrapper>
    </form>
  );
};
export default SearchForm;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 30px;
  button {
    color: #fff;
    background-color: blue;
    margin: auto;
    pading: 10px 45px;
    font-size: 25px;
    border: none;
    outline: none;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
  }
`;
