import Axios from "axios";
import {
  SHIPPING_ALLLIST_FAIL,
  SHIPPING_ALLLIST_REQUEST,
  SHIPPING_ALLLIST_SUCCESS,
  SHIPPING_LIST_FAIL,
  SHIPPING_LIST_REQUEST,
  SHIPPING_LIST_SUCCESS,
  SHIPPING_SAVE_FAIL,
  SHIPPING_SAVE_REQUEST,
  SHIPPING_SAVE_SUCCESS,
  SHIPPING_UPDATE_FAIL,
  SHIPPING_UPDATE_REQUEST,
  SHIPPING_UPDATE_SUCCESS
} from "../constants/shippingLocConstants";

export const shippingDetails =
  (shippingdetail) => async (dispatch, getState) => {
    console.log('shippingdetail', shippingdetail);
    dispatch({ type: SHIPPING_SAVE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        "/api/shippinglocdetails/shipcost",
        shippingdetail,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        },
      );
      dispatch({
        type: SHIPPING_SAVE_SUCCESS,
        payload: data.shiploclist,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SHIPPING_SAVE_FAIL, payload: message });
    }
  };

export const ShippingList = () => async (dispatch) => {
  dispatch({
    type: SHIPPING_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/shippinglocdetails/shipviewlist`);
    dispatch({ type: SHIPPING_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SHIPPING_LIST_FAIL, payload: error.message });
  }
};

export const ShippingAllList = () => async (dispatch) => {
  dispatch({
    type: SHIPPING_ALLLIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/shippinglocdetails/shipalllist`);
    dispatch({ type: SHIPPING_ALLLIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SHIPPING_ALLLIST_FAIL, payload: error.message });
  }
};

export const updateShippingDetails =
  (ShippingId) => async (dispatch, getState) => {
    dispatch({ type: SHIPPING_UPDATE_REQUEST, payload: ShippingId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/shippinglocdetails/updateFreeShip/${ShippingId.id}`,
        ShippingId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        },
      );
      dispatch({ type: SHIPPING_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SHIPPING_UPDATE_FAIL, error: message });
    }
  };


