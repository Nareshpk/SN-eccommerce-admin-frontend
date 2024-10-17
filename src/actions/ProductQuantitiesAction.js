import Axios from 'axios';
import {
  PRODUCT_QUANTITIES_FAIL,
  PRODUCT_QUANTITIES_LAST_LIST_FAIL,
  PRODUCT_QUANTITIES_LAST_LIST_REQUEST,
  PRODUCT_QUANTITIES_LAST_LIST_SUCCESS,
  PRODUCT_QUANTITIES_LIST_FAIL,
  PRODUCT_QUANTITIES_LIST_REQUEST,
  PRODUCT_QUANTITIES_LIST_SUCCESS,
  PRODUCT_QUANTITIES_REQUEST,
  PRODUCT_QUANTITIES_SUCCESS,
  PRODUCT_QUANTITIES_UPDATE_FAIL,
  PRODUCT_QUANTITIES_UPDATE_REQUEST,
  PRODUCT_QUANTITIES_UPDATE_SUCCESS,
} from '../constants/productQuantitiesConstands';

export const quantityDetail =
  (QuantityDetail) => async (dispatch, getState) => {
    //console.log('QuantityDetail', QuantityDetail);
    dispatch({ type: PRODUCT_QUANTITIES_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        '/api/catProductDetails/Quantities',
        QuantityDetail,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: PRODUCT_QUANTITIES_SUCCESS,
        payload: data.category,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: PRODUCT_QUANTITIES_FAIL, payload: message });
    }
  };

export const updateQuantitydetail = (QtyId) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_QUANTITIES_UPDATE_REQUEST, payload: QtyId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/catProductDetails/updatequantity/${QtyId.prodId}`,
      QtyId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );
    dispatch({ type: PRODUCT_QUANTITIES_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_QUANTITIES_UPDATE_FAIL, error: message });
  }
};

export const QuantityListDetails = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_QUANTITIES_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/catProductDetails/quantitylist");
    dispatch({ type: PRODUCT_QUANTITIES_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_QUANTITIES_LIST_FAIL, payload: error.message });
  }
};

export const QuantityLastdataDetails = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_QUANTITIES_LAST_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/catProductDetails/lastquantitylist");
    dispatch({ type: PRODUCT_QUANTITIES_LAST_LIST_SUCCESS, payload: data });

    console.log('data----------->>', data);
  } catch (error) {
    dispatch({ type: PRODUCT_QUANTITIES_LAST_LIST_FAIL, payload: error.message });
  }
};