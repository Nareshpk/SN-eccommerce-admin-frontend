import Axios from "axios";
import {
  CITY_BULKDELETE_FAIL,
  CITY_BULKDELETE_REQUEST,
  CITY_BULKDELETE_SUCCESS,
  CITY_CHECKBOX_FAIL,
  CITY_CHECKBOX_REQUEST,
  CITY_CHECKBOX_SUCCESS,
  CITY_DELETE_FAIL,
  CITY_DELETE_REQUEST,
  CITY_DELETE_SUCCESS,
  CITY_ENABLE_FAIL,
  CITY_ENABLE_REQUEST,
  CITY_ENABLE_SUCCESS,
  CITY_LIST_FAIL,
  CITY_LIST_REQUEST,
  CITY_LIST_SUCCESS,
  CITY_SAVE_FAIL,
  CITY_SAVE_REQUEST,
  CITY_SAVE_SUCCESS,
  CITY_UPDATE_FAIL,
  CITY_UPDATE_REQUEST,
  CITY_UPDATE_SUCCESS,
  CITY_ZONEASSIGHN_FAIL,
  CITY_ZONEASSIGHN_REQUEST,
  CITY_ZONEASSIGHN_SUCCESS,
} from "../constants/CityConstants";
export const saveCity = (Citydetails) => async (dispatch, getState) => {
  console.log("Citydetails", Citydetails);
  dispatch({ type: CITY_SAVE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post("/api/CityDetails/City", Citydetails, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: CITY_SAVE_SUCCESS, payload: data.category });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CITY_SAVE_FAIL, payload: message });
  }
};

export const CityListDetails = () => async (dispatch) => {
  dispatch({ type: CITY_LIST_REQUEST });
  try {
    const { data } = await Axios.get("/api/CityDetails/citylist");
    dispatch({ type: CITY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CITY_LIST_FAIL, payload: error.message });
  }
};

export const updateCity = (CityId) => async (dispatch, getState) => {
  console.log("CITYId", CityId);
  dispatch({ type: CITY_UPDATE_REQUEST, payload: CityId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/CityDetails/updatecity/${CityId.id}`,
      CityId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );
    dispatch({ type: CITY_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CITY_UPDATE_FAIL, error: message });
  }
};

export const deleteCity = (CityId) => async (dispatch, getState) => {
  dispatch({ type: CITY_DELETE_REQUEST, payload: CityId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/CityDetails/deleteCity/${CityId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: CITY_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CITY_DELETE_FAIL, payload: message });
  }
};
export const ActiveCity = (EnableId) => async (dispatch, getState) => {
  dispatch({ type: CITY_ENABLE_REQUEST, payload: EnableId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/CityDetails/activenable/${EnableId.id}`,
      EnableId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );
    dispatch({
      type: CITY_ENABLE_SUCCESS,
      payload: data.Enablemaster,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CITY_ENABLE_FAIL, error: message });
  }
};

export const updateCityActivate =
  (checkboxId) => async (dispatch, getState) => {
    console.log("checkboxId", checkboxId);
    dispatch({ type: CITY_CHECKBOX_REQUEST, payload: checkboxId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/CityDetails/checkboxitem/${checkboxId.checkboxId}`,
        checkboxId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        },
      );
      dispatch({ type: CITY_CHECKBOX_SUCCESS, payload: data.citymaster });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CITY_CHECKBOX_FAIL, error: message });
    }
  };

export const deleteMultipleCity = (CityId) => async (dispatch, getState) => {
  dispatch({ type: CITY_BULKDELETE_REQUEST, payload: CityId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(
      "/api/CityDetails/deletebulk/" + CityId,
      { data: CityId },
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );

    dispatch({ type: CITY_BULKDELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CITY_BULKDELETE_FAIL, payload: message });
  }
};

export const AssignZoneCityActivate =
  (checkboxId) => async (dispatch, getState) => {
    console.log("checkboxId", checkboxId);
    dispatch({ type: CITY_ZONEASSIGHN_REQUEST, payload: checkboxId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/CityDetails/checkzone/${checkboxId.checkboxId}`,
        checkboxId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        },
      );
      dispatch({ type: CITY_ZONEASSIGHN_SUCCESS, payload: data.citymaster });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CITY_ZONEASSIGHN_FAIL, error: message });
    }
  };
