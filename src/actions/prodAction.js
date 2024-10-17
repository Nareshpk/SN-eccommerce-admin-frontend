import Axios from "axios";
import {
  PRICING_DETAILS_FAIL,
  PRICING_DETAILS_LAST_LIST_FAIL,
  PRICING_DETAILS_LAST_LIST_REQUEST,
  PRICING_DETAILS_LAST_LIST_SUCCESS,
  PRICING_DETAILS_LIST_FAIL,
  PRICING_DETAILS_LIST_REQUEST,
  PRICING_DETAILS_LIST_SUCCESS,
  PRICING_DETAILS_REQUEST,
  PRICING_DETAILS_SUCCESS,
  PRICING_DETAILS_UPDATE_FAIL,
  PRICING_DETAILS_UPDATE_REQUEST,
  PRICING_DETAILS_UPDATE_SUCCESS,
} from "../constants/prodConstants";

export const priceDetails = (priceDetails) => async (dispatch, getState) => {
  dispatch({ type: PRICING_DETAILS_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      "/api/catpriceDetails/pricing",
      priceDetails,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: PRICING_DETAILS_SUCCESS,
      payload: data.category,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRICING_DETAILS_FAIL, payload: message });
  }
};

export const updatePricingdetail = (PriceId) => async (dispatch, getState) => {
  dispatch({ type: PRICING_DETAILS_UPDATE_REQUEST, payload: PriceId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/catpriceDetails/updatepricing/${PriceId.prodId}`,
      PriceId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );
    dispatch({ type: PRICING_DETAILS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRICING_DETAILS_UPDATE_FAIL, error: message });
  }
};

export const PricingListDetails = () => async (dispatch) => {
  dispatch({
    type: PRICING_DETAILS_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/catpriceDetails/pricinglist");
    dispatch({ type: PRICING_DETAILS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRICING_DETAILS_LIST_FAIL, payload: error.message });
  }
};

export const PricingLastListDetails = () => async (dispatch) => {
  dispatch({
    type: PRICING_DETAILS_LAST_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/catpriceDetails/pricinglastlist");
    dispatch({ type: PRICING_DETAILS_LAST_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRICING_DETAILS_LAST_LIST_FAIL, payload: error.message });
  }
};