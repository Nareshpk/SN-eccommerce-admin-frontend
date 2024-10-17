import Axios from "axios";
import {
  CUSTOMER_BULK_DELETE_FAIL,
  CUSTOMER_BULK_DELETE_REQUEST,
  CUSTOMER_BULK_DELETE_SUCCESS,
  CUSTOMER_BULK_UPDATE_FAIL,
  CUSTOMER_BULK_UPDATE_REQUEST,
  CUSTOMER_BULK_UPDATE_SUCCESS,
  CUSTOMER_DELETE_FAIL,
  CUSTOMER_DELETE_REQUEST,
  CUSTOMER_DELETE_SUCCESS,
  CUSTOMER_DETAILS_FAIL,
  CUSTOMER_DETAILS_REQUEST,
  CUSTOMER_DETAILS_SUCCESS,
  CUSTOMER_ENABLE_UPDATE_FAIL,
  CUSTOMER_ENABLE_UPDATE_REQUEST,
  CUSTOMER_ENABLE_UPDATE_SUCCESS,
  CUSTOMER_LIST_FAIL,
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_UPDATE_FAIL,
  CUSTOMER_UPDATE_REQUEST,
  CUSTOMER_UPDATE_SUCCESS,
} from "../constants/customerrConstants";

export const saveDetail = (Cusdetails) => async (dispatch, getState) => {
  //console.log('Cusdetails', dispatch);
  dispatch({ type: CUSTOMER_DETAILS_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      "/api/Customerdetails/customer",
      Cusdetails,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: CUSTOMER_DETAILS_SUCCESS,
      payload: data.category,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CUSTOMER_DETAILS_FAIL, payload: message });
  }
};
//*****************************List***********************************/
export const CustomerListDetails = () => async (dispatch) => {
  dispatch({
    type: CUSTOMER_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/Customerdetails/customerDetail`);
    dispatch({ type: CUSTOMER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CUSTOMER_LIST_FAIL, payload: error.message });
  }
};
//************************Update***************************************/
export const updateCustomerDetails =
  (customerId) => async (dispatch, getState) => {
    console.log(customerId);
    dispatch({ type: CUSTOMER_UPDATE_REQUEST, payload: customerId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/Customerdetails/updateCustomer/${customerId.id}`,
        customerId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: CUSTOMER_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CUSTOMER_UPDATE_FAIL, error: message });
    }
  };
//****************************Delete************************************

export const deleteCustomer = (cusId) => async (dispatch, getState) => {
  dispatch({ type: CUSTOMER_DELETE_REQUEST, payload: cusId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/Customerdetails/deleteCustomer/${cusId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: CUSTOMER_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CUSTOMER_DELETE_FAIL, payload: message });
  }
};

//*************************Enable switch***********************/
export const ActiveCustomerEnable =
  (EnableId) => async (dispatch, getState) => {
    dispatch({ type: CUSTOMER_ENABLE_UPDATE_REQUEST, payload: EnableId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/Customerdetails/activeEnable/${EnableId.id}`,
        EnableId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: CUSTOMER_ENABLE_UPDATE_SUCCESS,
        payload: data.Attmaster,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CUSTOMER_ENABLE_UPDATE_FAIL, error: message });
    }
  };
//**********************************************************************************/
export const updatetCustomerActivate =
  (checkboxId) => async (dispatch, getState) => {
    dispatch({ type: CUSTOMER_BULK_UPDATE_REQUEST, payload: checkboxId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/Customerdetails/checkboxitem/${checkboxId.checkboxId}`,
        checkboxId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: CUSTOMER_BULK_UPDATE_SUCCESS, payload: data.Attmaster });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CUSTOMER_BULK_UPDATE_FAIL, error: message });
    }
  };

export const deleteMultipleCustomer = (empId) => async (dispatch, getState) => {
  console.log("empId", empId);
  dispatch({ type: CUSTOMER_BULK_DELETE_REQUEST, payload: empId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(
      "/api/Customerdetails/deletemultiple/" + empId,
      { data: empId },
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );

    dispatch({ type: CUSTOMER_BULK_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CUSTOMER_BULK_DELETE_FAIL, payload: message });
  }
};
