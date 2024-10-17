import Axios from "axios";
import {
  OPTIONS_DETAILS_LIST_FAIL,
  OPTIONS_DETAILS_LIST_REQUEST,
  OPTIONS_DETAILS_LIST_SUCCESS,
  OPTIONS_DETAILS_UPDATE_FAIL,
  OPTIONS_DETAILS_UPDATE_REQUEST,
  OPTIONS_DETAILS_UPDATE_SUCCESS,
  OPTIONS_SAVE_FAIL,
  OPTIONS_SAVE_REQUEST,
  OPTIONS_SAVE_SUCCESS,
} from "../constants/OptionConstants";
export const saveOptions = (optId) => async (dispatch, getState) => {
  dispatch({ type: OPTIONS_SAVE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post("/api/optionsDetails/options", optId, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({
      type: OPTIONS_SAVE_SUCCESS,
      payload: data.category,
    });
  } catch (error) {
    const message =
      error.response && error.responce.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: OPTIONS_SAVE_FAIL, payload: message });
  }
};

export const OptionListDetails = () => async (dispatch) => {
  dispatch({
    type: OPTIONS_DETAILS_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/optionsDetails/optionslist");
    dispatch({ type: OPTIONS_DETAILS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: OPTIONS_DETAILS_LIST_FAIL, payload: error.message });
  }
};


export const updateOptiondetail = (OptionId) => async (dispatch, getState) => {
  dispatch({ type: OPTIONS_DETAILS_UPDATE_REQUEST, payload: OptionId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/optionsDetails/optionupdate/${OptionId.prodId}`,
      OptionId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );
    dispatch({ type: OPTIONS_DETAILS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: OPTIONS_DETAILS_UPDATE_FAIL, error: message });
  }
};