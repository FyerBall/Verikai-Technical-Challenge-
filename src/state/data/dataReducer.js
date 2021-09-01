import {
  SUBMIT_SUCCESS,
  FETCH_DATA_ON_BEGIN,
  FETCH_DATA_SUCCESS,
} from "../actionTypes";
const initialState = {
  loading: false,
  dates: [],
};

const dataReducer = (state = initialState, action) => {
  if (action.type === FETCH_DATA_ON_BEGIN) {
    return { ...state, loading: true };
  }
  if (action.type === FETCH_DATA_SUCCESS) {
    return { ...state, dates: action.payload, loading: false };
  }
  if (action.type === SUBMIT_SUCCESS) {
    let dates = [action.payload.dates];
    return { ...state, dates };
  }
  //   always return the state
  return state;
};

export default dataReducer;
