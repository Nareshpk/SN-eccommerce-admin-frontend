import {
  ORDER_STATUS_DELETE_FAIL,
  ORDER_STATUS_DELETE_REQUEST,
  ORDER_STATUS_DELETE_SUCCESS,
  ORDER_STATUS_LIST_FAIL,
  ORDER_STATUS_LIST_REQUEST,
  ORDER_STATUS_LIST_SUCCESS,
  ORDER_STATUS_SAVE_FAIL,
  ORDER_STATUS_SAVE_REQUEST,
  ORDER_STATUS_SAVE_SUCCESS,
} from "../constants/orderConstants";
import Axios from "axios";
export const orderStatus = (orderstatus) => async (dispatch, getState) => {
  console.log("orderstatus", orderstatus);
  dispatch({ type: ORDER_STATUS_SAVE_REQUEST, payload: orderstatus });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.post(
      "/api/StatusDetails/status",
      orderstatus,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: ORDER_STATUS_SAVE_SUCCESS, payload: data.order });
  } catch (error) {
    dispatch({
      type: ORDER_STATUS_SAVE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const StatuslistOrderMine = () => async (dispatch, getState) => {
  dispatch({ type: ORDER_STATUS_LIST_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get("/api/StatusDetails/statuslist", {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: ORDER_STATUS_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_STATUS_LIST_FAIL, payload: message });
  }
};

export const deleteStatus = (StatusId) => async (dispatch, getState) => {
  console.log("StatusId", StatusId);
  dispatch({ type: ORDER_STATUS_DELETE_REQUEST, payload: StatusId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/StatusDetails/deleteStatus/${StatusId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: ORDER_STATUS_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_STATUS_DELETE_FAIL, payload: message });
  }
};
