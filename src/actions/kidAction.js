import Axios from 'axios';
import {
  KID_CREATE_FAIL,
  KID_CREATE_REQUEST,
  KID_CREATE_SUCCESS,
  KID_DETAILS_FAIL,
  KID_DETAILS_REQUEST,
  KID_DETAILS_SUCCESS,
  KID_LIST_FAIL,
  KID_LIST_REQUEST,
  KID_LIST_SUCCESS,
  KID_UPDATE_REQUEST,
  KID_UPDATE_SUCCESS,
  KID_UPDATE_FAIL,
  KID_DELETE_REQUEST,
  KID_DELETE_FAIL,
  KID_DELETE_SUCCESS,
  KID_CATEGORY_LIST_SUCCESS,
  KID_CATEGORY_LIST_REQUEST,
  KID_CATEGORY_LIST_FAIL,
  KID_REVIEW_CREATE_REQUEST,
  KID_REVIEW_CREATE_SUCCESS,
  KID_REVIEW_CREATE_FAIL,
} from '../constants/kidConstants';

export const listKids =
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
      type: KID_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/kids?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
      );
      dispatch({ type: KID_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: KID_LIST_FAIL, payload: error.message });
    }
  };

export const listKidCategories = () => async (dispatch) => {
  dispatch({
    type: KID_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/kids/categories`);
    dispatch({ type: KID_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: KID_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsKid = (kidId) => async (dispatch) => {
  dispatch({ type: KID_DETAILS_REQUEST, payload: kidId });
  try {
    const { data } = await Axios.get(`/api/kids/${kidId}`);
    dispatch({ type: KID_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: KID_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createKid = () => async (dispatch, getState) => {
  dispatch({ type: KID_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/kids',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: KID_CREATE_SUCCESS,
      payload: data.kid,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: KID_CREATE_FAIL, payload: message });
  }
};
export const updateKid = (kid) => async (dispatch, getState) => {
  dispatch({ type: KID_UPDATE_REQUEST, payload: kid });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/kids/${kid._id}`, kid, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: KID_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: KID_UPDATE_FAIL, error: message });
  }
};
export const deleteKid = (kidId) => async (dispatch, getState) => {
  dispatch({ type: KID_DELETE_REQUEST, payload: kidId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/kids/${kidId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: KID_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: KID_DELETE_FAIL, payload: message });
  }
};
export const createReview =
  (kidId, review) => async (dispatch, getState) => {
    dispatch({ type: KID_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/kids/${kidId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: KID_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: KID_REVIEW_CREATE_FAIL, payload: message });
    }
  };