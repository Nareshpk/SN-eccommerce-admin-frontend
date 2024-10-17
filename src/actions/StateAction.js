import Axios from "axios";
import {
  STATE_BULKDELETE_FAIL,
  STATE_BULKDELETE_REQUEST,
  STATE_BULKDELETE_SUCCESS,
  STATE_CHECKBOX_FAIL,
  STATE_CHECKBOX_REQUEST,
  STATE_CHECKBOX_SUCCESS,
  STATE_DELETE_FAIL,
  STATE_DELETE_REQUEST,
  STATE_DELETE_SUCCESS,
  STATE_ENABLE_FAIL,
  STATE_ENABLE_REQUEST,
  STATE_ENABLE_SUCCESS,
  STATE_LIST_FAIL,
  STATE_LIST_REQUEST,
  STATE_LIST_SUCCESS,
  STATE_SAVE_FAIL,
  STATE_SAVE_REQUEST,
  STATE_SAVE_SUCCESS,
  STATE_UPDATE_FAIL,
  STATE_UPDATE_REQUEST,
  STATE_UPDATE_SUCCESS,
  STATE_ZONEASSIGHN_FAIL,
  STATE_ZONEASSIGHN_REQUEST,
  STATE_ZONEASSIGHN_SUCCESS,
} from "../constants/StateConstants";
export const saveState = (statedetails) => async (dispatch, getState) => {
  console.log("zonedetails", statedetails);
  dispatch({ type: STATE_SAVE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post("/api/stateDetails/state", statedetails, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: STATE_SAVE_SUCCESS, payload: data.category });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: STATE_SAVE_FAIL, payload: message });
  }
};

export const StateListDetails = () => async (dispatch) => {
  dispatch({ type: STATE_LIST_REQUEST });
  try {
    const { data } = await Axios.get("/api/stateDetails/statelist");
    dispatch({ type: STATE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: STATE_LIST_FAIL, payload: error.message });
  }
};

export const updateState = (stateId) => async (dispatch, getState) => {
  console.log("stateId", stateId);
  dispatch({ type: STATE_UPDATE_REQUEST, payload: stateId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/stateDetails/updatestate/${stateId.id}`,
      stateId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );
    dispatch({ type: STATE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: STATE_UPDATE_FAIL, error: message });
  }
};

export const deleteState = (stateId) => async (dispatch, getState) => {
  dispatch({ type: STATE_DELETE_REQUEST, payload: stateId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/stateDetails/deletestate/${stateId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: STATE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: STATE_DELETE_FAIL, payload: message });
  }
};
export const ActiveState = (EnableId) => async (dispatch, getState) => {
  dispatch({ type: STATE_ENABLE_REQUEST, payload: EnableId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/stateDetails/activeenable/${EnableId.id}`,
      EnableId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );
    dispatch({
      type: STATE_ENABLE_SUCCESS,
      payload: data.Enablemaster,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: STATE_ENABLE_FAIL, error: message });
  }
};

export const updateStateActivate =
  (checkboxId) => async (dispatch, getState) => {
    dispatch({ type: STATE_CHECKBOX_REQUEST, payload: checkboxId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/stateDetails/checkboxitem/${checkboxId.checkboxId}`,
        checkboxId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        },
      );
      dispatch({ type: STATE_CHECKBOX_SUCCESS, payload: data.statemaster });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: STATE_CHECKBOX_FAIL, error: message });
    }
  };

export const deleteMultiplestate = (stateId) => async (dispatch, getState) => {
  dispatch({ type: STATE_BULKDELETE_REQUEST, payload: stateId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(
      "/api/stateDetails/deletebulk/" + stateId,
      { data: stateId },
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );

    dispatch({ type: STATE_BULKDELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: STATE_BULKDELETE_FAIL, payload: message });
  }
};

export const AssignZoneActivate =
  (checkboxId) => async (dispatch, getState) => {
    console.log("checkboxId", checkboxId);
    dispatch({ type: STATE_ZONEASSIGHN_REQUEST, payload: checkboxId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/stateDetails/checkzone/${checkboxId.checkboxId}`,
        checkboxId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        },
      );
      dispatch({ type: STATE_ZONEASSIGHN_SUCCESS, payload: data.statemaster });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: STATE_ZONEASSIGHN_FAIL, error: message });
    }
  };
