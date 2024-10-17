import Axios from 'axios';
import {
  WOMEN_CREATE_FAIL,
  WOMEN_CREATE_REQUEST,
  WOMEN_CREATE_SUCCESS,
  WOMEN_DETAILS_FAIL,
  WOMEN_DETAILS_REQUEST,
  WOMEN_DETAILS_SUCCESS,
  WOMEN_LIST_FAIL,
  WOMEN_LIST_REQUEST,
  WOMEN_LIST_SUCCESS,
  WOMEN_UPDATE_REQUEST,
  WOMEN_UPDATE_SUCCESS,
  WOMEN_UPDATE_FAIL,
  WOMEN_DELETE_REQUEST,
  WOMEN_DELETE_FAIL,
  WOMEN_DELETE_SUCCESS,
  WOMEN_CATEGORY_LIST_SUCCESS,
  WOMEN_CATEGORY_LIST_REQUEST,
  WOMEN_CATEGORY_LIST_FAIL,
  WOMEN_REVIEW_CREATE_REQUEST,
  WOMEN_REVIEW_CREATE_SUCCESS,
  WOMEN_REVIEW_CREATE_FAIL,
} from '../constants/womenConstants';

export const listWomens =
  ({
    pageNumber = '',
    seller = '',
    name = '',
    category = '',
    order = '',
    min = 0,
    max = 0,
    rating = 0,
  }) =>
  async (dispatch) => {
    dispatch({
      type: WOMEN_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/womens?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type: WOMEN_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: WOMEN_LIST_FAIL, payload: error.message });
    }
  };

export const listWomenCategories = () => async (dispatch) => {
  dispatch({
    type: WOMEN_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/womens/categories`);
    dispatch({ type: WOMEN_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: WOMEN_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsWomen = (womenId) => async (dispatch) => {
  dispatch({ type: WOMEN_DETAILS_REQUEST, payload: womenId });
  try {
    const { data } = await Axios.get(`/api/womens/${womenId}`);
    dispatch({ type: WOMEN_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: WOMEN_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createWomen = () => async (dispatch, getState) => {
  dispatch({ type: WOMEN_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/womens',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: WOMEN_CREATE_SUCCESS,
      payload: data.women,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: WOMEN_CREATE_FAIL, payload: message });
  }
};
export const updateWomen = (women) => async (dispatch, getState) => {
  dispatch({ type: WOMEN_UPDATE_REQUEST, payload: women });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/womens/${women._id}`, women, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: WOMEN_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: WOMEN_UPDATE_FAIL, error: message });
  }
};
export const deleteWomen = (womenId) => async (dispatch, getState) => {
  dispatch({ type: WOMEN_DELETE_REQUEST, payload: womenId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/womens/${womenId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: WOMEN_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: WOMEN_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (womenId, review) => async (dispatch, getState) => {
    dispatch({ type: WOMEN_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/womens/${womenId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: WOMEN_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: WOMEN_REVIEW_CREATE_FAIL, payload: message });
    }
  };