

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (data) => ({
  type: FETCH_CHEESES_SUCCESS,
  cheeses: data
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (error) => ({
  type: FETCH_CHEESES_ERROR,
  error: error
});

export const FETCH_CHEESES = 'FETCH_CHEESES';
export const fetchCheeses = () => dispatch => {
    dispatch(fetchCheesesRequest());
  return fetch('/cheeses').then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  }).then(data => {
      console.log(data);
    dispatch(fetchCheesesSuccess(data.cheeses));
  }).catch(error => {
    dispatch(fetchCheesesError(error));
  });
};
