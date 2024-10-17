import Axios from "axios";
import {
  SUMMARY_LIST_FAIL,
  SUMMARY_LIST_REQUEST,
  SUMMARY_LIST_SUCCESS,
  SUMMARY_SAVE_FAIL,
  SUMMARY_SAVE_REQUEST,
  SUMMARY_SAVE_SUCCESS,
  SUMMARY_UPDATE_FAIL,
  SUMMARY_UPDATE_REQUEST,
  SUMMARY_UPDATE_SUCCESS,
} from "../constants/SizeWeightGroup";
// import Axios form "axios";

export const saveSummaryDetailss = (Summarydetail) => async (dispatch) => {
  console.log("Summarydetail", Summarydetail);
  dispatch({ type: SUMMARY_SAVE_REQUEST });
  try {
    const { data } = await Axios.post(
      "/api/summaryDetails/summary",
      Summarydetail,
      {},
    );
    dispatch({ type: SUMMARY_SAVE_SUCCESS, payload: data.category });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SUMMARY_SAVE_FAIL, payload: message });
  }
};

export const SummaryList = () => async (dispatch) => {
  dispatch({
    type: SUMMARY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/summaryDetails/summaryallist`);
    dispatch({ type: SUMMARY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SUMMARY_LIST_FAIL, payload: error.message });
  }
};

export const updateSummary = (sumId) => async (dispatch, getState) => {
  console.log("sumId", sumId);
  dispatch({ type: SUMMARY_UPDATE_REQUEST, payload: sumId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/summaryDetails/updatesum/${sumId.id}`,
      sumId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );
    dispatch({ type: SUMMARY_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SUMMARY_UPDATE_FAIL, error: message });
  }
};
