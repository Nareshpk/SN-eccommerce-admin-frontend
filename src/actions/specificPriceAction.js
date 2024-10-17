import Axios from "axios";
import {
  PRODUCT_LIST_GRID_FAIL,
  PRODUCT_LIST_GRID_REQUEST,
  PRODUCT_LIST_GRID_SUCCESS,
  SPECIFIC_DELETE_FAIL,
  SPECIFIC_DELETE_REQUEST,
  SPECIFIC_DELETE_SUCCESS,
  SPECIFIC_PRICE_CONDITION_FAIL,
  SPECIFIC_PRICE_CONDITION_REQUEST,
  SPECIFIC_PRICE_CONDITION_SUCCESS,
  SPECIFIC_PRICE_LIST_FAIL,
  SPECIFIC_PRICE_LIST_REQUEST,
  SPECIFIC_PRICE_LIST_SUCCESS,
  SPECIFIC_UPDATE_FAIL,
  SPECIFIC_UPDATE_REQUEST,
  SPECIFIC_UPDATE_SUCCESS,
} from "../constants/specificPriceConstants";

export const specificPriceDetail = (speId) => async (dispatch, getState) => {
  dispatch({ type: SPECIFIC_PRICE_CONDITION_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      "/api/specificPriceDetails/specificPrice",
      speId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );

    dispatch({
      type: SPECIFIC_PRICE_CONDITION_SUCCESS,
      payload: data.category,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SPECIFIC_PRICE_CONDITION_FAIL, payload: message });
  }
};

export const productGridList = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_GRID_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/specificPriceDetails/gridList");

    dispatch({ type: PRODUCT_LIST_GRID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_GRID_FAIL, payload: error.message });
  }
};

export const productPriceList = () => async (dispatch) => {
  dispatch({
    type: SPECIFIC_PRICE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/specificPriceDetails/specificList");

    dispatch({ type: SPECIFIC_PRICE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SPECIFIC_PRICE_LIST_FAIL, payload: error.message });
  }
};

export const deleteSpecific = (speId) => async (dispatch, getState) => {
  dispatch({ type: SPECIFIC_DELETE_REQUEST, payload: speId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/specificPriceDetails/deleteSpecifics/${speId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: SPECIFIC_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.responce && error.responce.data.message
        ? error.responce.data.message
        : error.message;
    dispatch({ type: SPECIFIC_DELETE_FAIL, payload: message });
  }
};

export const updateSpecificPrice =
  (productId) => async (dispatch, getState) => {
    dispatch({ type: SPECIFIC_UPDATE_REQUEST, payload: productId });
    // console.log("productId", productId);
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/specificPriceDetails/updateSpecific/${productId.prodId}`,
        productId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: SPECIFIC_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SPECIFIC_UPDATE_FAIL, error: message });
    }
  };
