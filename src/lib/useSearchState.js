import { useEffect, useState } from 'react';
const useSearchState = (initialState, sessionStorageKey) => {
  const [state, setState] = useState(() => {
    const presistedValue = sessionStorage.getItem(sessionStorageKey);
    return presistedValue ? JSON.parse(presistedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(sessionStorageKey, JSON.stringify(state));
  }, [state, sessionStorageKey]);

  return [state, setState];
};
export const SearchState = () => {
  return useSearchState('', 'searchString');
};
