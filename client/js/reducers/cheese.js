import * as actions from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
}

export const cheeseReducer = (state=initialState, action) => {
  switch(action.type) {
    case actions.FETCH_CHEESES_REQUEST:
      return {...state, loading: true};
    case actions.FETCH_CHEESES_ERROR:
      return {...state, loading: false, error: action.error};
    case actions.FETCH_CHEESES_SUCCESS:
      return {...state, loading: false, error: null, cheeses: action.cheeses};
    default:
      return state;
  }
};
