import Axios from 'axios';
import {
  PRODUCT_SHIPPING_DETAILS_FAIL,
  PRODUCT_SHIPPING_DETAILS_REQUEST,
  PRODUCT_SHIPPING_DETAILS_SUCCESS,
  PRODUCT_SHIPPING_LIST_FAIL,
  PRODUCT_SHIPPING_LIST_REQUEST,
  PRODUCT_SHIPPING_LIST_SUCCESS,
  PRODUCT_SHIPPING_UPDATE_FAIL,
  PRODUCT_SHIPPING_UPDATE_REQUEST,
  PRODUCT_SHIPPING_UPDATE_SUCCESS,
} from '../constants/ProductSippingConstants';


export const shippingDetail = (ShipDetail) => async (dispatch, getState) => {
  //console.log('ShipDetail================', ShipDetail);
  dispatch({ type: PRODUCT_SHIPPING_DETAILS_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/catogoryProductDetails/Shipping',
      ShipDetail,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: PRODUCT_SHIPPING_DETAILS_SUCCESS,
      payload: data.category,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_SHIPPING_DETAILS_FAIL, payload: message });
  }
};


export const updateShipdetail = (ShipId) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_SHIPPING_UPDATE_REQUEST, payload: ShipId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/catogoryProductDetails/updateship/${ShipId.prodId}`,
      ShipId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );
    dispatch({ type: PRODUCT_SHIPPING_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_SHIPPING_UPDATE_FAIL, error: message });
  }
};


export const ShipListDetails = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_SHIPPING_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/catogoryProductDetails/shiplist");
    dispatch({ type: PRODUCT_SHIPPING_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_SHIPPING_LIST_FAIL, payload: error.message });
  }
};