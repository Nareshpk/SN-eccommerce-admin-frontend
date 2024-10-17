import Axios from "axios";
import {
  ZONE_BULKDELETE_FAIL,
  ZONE_BULKDELETE_REQUEST,
  ZONE_BULKDELETE_SUCCESS,
  ZONE_CHECKBOX_FAIL,
  ZONE_CHECKBOX_REQUEST,
  ZONE_CHECKBOX_SUCCESS,
  ZONE_DELETE_FAIL,
  ZONE_DELETE_REQUEST,
  ZONE_DELETE_SUCCESS,
  ZONE_ENABLE_FAIL,
  ZONE_ENABLE_REQUEST,
  ZONE_ENABLE_SUCCESS,
  ZONE_LIST_FAIL,
  ZONE_LIST_REQUEST,
  ZONE_LIST_SUCCESS,
  ZONE_SAVE_FAIL,
  ZONE_SAVE_REQUEST,
  ZONE_SAVE_SUCCESS,
  ZONE_UPDATE_FAIL,
  ZONE_UPDATE_REQUEST,
  ZONE_UPDATE_SUCCESS,
} from "../constants/ZoneConstants";
export const saveZone = (zonedetails) => async (dispatch, getState) => {
  dispatch({ type: ZONE_SAVE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post("/api/zoneDetails/zone", zonedetails, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: ZONE_SAVE_SUCCESS, payload: data.category });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ZONE_SAVE_FAIL, payload: message });
  }
};
export const ZoneListDetails = () => async (dispatch) => {
  dispatch({
    type: ZONE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/zoneDetails/zonelist");
    dispatch({ type: ZONE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ZONE_LIST_FAIL, payload: error.message });
  }
};

export const updateZone = (zoneId) => async (dispatch, getState) => {
  dispatch({ type: ZONE_UPDATE_REQUEST, payload: zoneId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/zoneDetails/updatezone/${zoneId.id}`,
      zoneId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );
    dispatch({ type: ZONE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ZONE_UPDATE_FAIL, error: message });
  }
};

export const deleteZone = (zoneId) => async (dispatch, getState) => {
  dispatch({ type: ZONE_DELETE_REQUEST, payload: zoneId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/zoneDetails/deletezone/${zoneId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: ZONE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ZONE_DELETE_FAIL, payload: message });
  }
};

export const ActiveZone = (EnableId) => async (dispatch, getState) => {
  dispatch({ type: ZONE_ENABLE_REQUEST, payload: EnableId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/zoneDetails/activeenable/${EnableId.id}`,
      EnableId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );
    dispatch({
      type: ZONE_ENABLE_SUCCESS,
      payload: data.Enablemaster,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ZONE_ENABLE_FAIL, error: message });
  }
};

export const updateZoneActivate =
  (checkboxId) => async (dispatch, getState) => {
    dispatch({ type: ZONE_CHECKBOX_REQUEST, payload: checkboxId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/zoneDetails/checkboxitem/${checkboxId.checkboxId}`,
        checkboxId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        },
      );
      dispatch({ type: ZONE_CHECKBOX_SUCCESS, payload: data.statemaster });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ZONE_CHECKBOX_FAIL, error: message });
    }
  };

export const deleteMultiplezone = (zoneId) => async (dispatch, getState) => {
  console.log("zoneId", zoneId);
  dispatch({ type: ZONE_BULKDELETE_REQUEST, payload: zoneId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(
      "/api/zoneDetails/deletebulk/" + zoneId,
      { data: zoneId },
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );

    dispatch({ type: ZONE_BULKDELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ZONE_BULKDELETE_FAIL, payload: message });
  }
};
