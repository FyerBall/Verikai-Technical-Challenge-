import {
  SUBMIT_SUCCESS,
  FETCH_DATA_ON_BEGIN,
  FETCH_DATA_SUCCESS,
} from "../actionTypes";
import { dates } from "../../constant/data";

// get all the dates form local files
export const getAllDates = () => async (dispatch) => {
  dispatch({ type: FETCH_DATA_ON_BEGIN });
  setTimeout(() => {
    dispatch({ type: FETCH_DATA_SUCCESS, payload: dates });
  }, 2000);
};

// add valid dates
export const addDates = (dateInfo) => async (dispatch) => {
  dispatch({ type: SUBMIT_SUCCESS, payload: dateInfo });
};
