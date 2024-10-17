import Axios from "axios";
import { CUSTOMER_ADDRESS_DELETE_FAIL, CUSTOMER_ADDRESS_DELETE_REQUEST, CUSTOMER_ADDRESS_DELETE_SUCCESS, CUSTOMER_ADDRESS_FAIL, CUSTOMER_ADDRESS_LIST_FAIL, CUSTOMER_ADDRESS_LIST_REQUEST, CUSTOMER_ADDRESS_LIST_SUCCESS, CUSTOMER_ADDRESS_REQUEST, CUSTOMER_ADDRESS_SUCCESS, CUSTOMER_ADDRESS_UPDATE_FAIL, CUSTOMER_ADDRESS_UPDATE_REQUEST, CUSTOMER_ADDRESS_UPDATE_SUCCESS } from "../constants/customerConstant";

export const saveCustomerAddress = (custAddress) => async (dispatch, getState) => {

    dispatch({ type: CUSTOMER_ADDRESS_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post("/api/customerAddress", custAddress, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({
        type: CUSTOMER_ADDRESS_SUCCESS,
        payload: data.appsetting,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CUSTOMER_ADDRESS_FAIL, payload: message });
    }
  };

  export const customerAddressList = () => async (dispatch) => {
    dispatch({
      type: CUSTOMER_ADDRESS_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(`/api/customerAddress/customerAddList`);
      dispatch({ type: CUSTOMER_ADDRESS_LIST_SUCCESS, payload: data });
     
    } catch (error) {
      dispatch({ type: CUSTOMER_ADDRESS_LIST_FAIL, payload: error.message });
    }
  };

  export const deletecustomerAddress = (cusAddId) => async (dispatch, getState) => {
    dispatch({ type: CUSTOMER_ADDRESS_DELETE_REQUEST, payload: cusAddId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
     
      await Axios.delete(`/api/customerAddress/${cusAddId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      
      dispatch({ type: CUSTOMER_ADDRESS_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CUSTOMER_ADDRESS_DELETE_FAIL, payload: message });
    }
  };

  export const updatecustomerAddress = (customAddressUpdate) => async (dispatch, getState) => {

  
    dispatch({ type: CUSTOMER_ADDRESS_UPDATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(`/api/customerAddress/${customAddressUpdate._id}`,customAddressUpdate, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: CUSTOMER_ADDRESS_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CUSTOMER_ADDRESS_UPDATE_FAIL, error: message });
    }
  };