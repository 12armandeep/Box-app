const BASE_URL = 'https://api.tvmaze.com';
const apiGet = async queryString => {
  const response = await fetch(` ${BASE_URL}${queryString}`);

  const body = await response.json();
  return body;
};

export const searchForShow = query => apiGet(`/search/shows?q=${query}`);
export const searchForPerson = query => apiGet(`/search/people?q=${query}`);
export const getElementById = showId =>
  apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`);
export const gerShowById = async showIds => {
  const promises = showIds.map(showId => apiGet(`/shows/${showId}`));
  const arr = await Promise.all(promises);
  return arr;
}; // this is used to run all the request at the same time we can also use the loops but in loops if one iteration stop the loop stop so we are using the promise where all the promise are execute at the same time
