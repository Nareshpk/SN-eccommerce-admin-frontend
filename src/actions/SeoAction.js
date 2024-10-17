import Axios from "axios";
import {
  SEO_DETAILS_LIST_FAIL,
  SEO_DETAILS_LIST_REQUEST,
  SEO_DETAILS_LIST_SUCCESS,
  SEO_DETAILS_UPDATE_FAIL,
  SEO_DETAILS_UPDATE_REQUEST,
  SEO_DETAILS_UPDATE_SUCCESS,
  SEO_SAVE_FAIL,
  SEO_SAVE_REQUEST,
  SEO_SAVE_SUCCESS,
} from "../constants/SeoConstants";

export const seoDetails = (seoId) => async (dispatch, getState) => {
  dispatch({ type: SEO_SAVE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post("/api/seoDetails/seo", seoId, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({
      type: SEO_SAVE_SUCCESS,
      payload: data.category,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SEO_SAVE_FAIL, payload: message });
  }
};

export const SeoListDetails = () => async (dispatch) => {
  dispatch({
    type: SEO_DETAILS_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/seoDetails/seolist");
    dispatch({ type: SEO_DETAILS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SEO_DETAILS_LIST_FAIL, payload: error.message });
  }
};

export const updateSeodetail = (SeoId) => async (dispatch, getState) => {
  dispatch({ type: SEO_DETAILS_UPDATE_REQUEST, payload: SeoId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/seoDetails/updateseo/${SeoId.prodId}`,
      SeoId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );
    dispatch({ type: SEO_DETAILS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SEO_DETAILS_UPDATE_FAIL, error: message });
  }
};