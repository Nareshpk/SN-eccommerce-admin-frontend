import Axios from "axios";
import {
  GENERAL_DETAIL_ACTIVATE_FAIL,
  GENERAL_DETAIL_ACTIVATE_REQUEST,
  GENERAL_DETAIL_ACTIVATE_SUCCESS,
  GENERAL_DETAIL_ALLLIST_FAIL,
  GENERAL_DETAIL_ALLLIST_REQUEST,
  GENERAL_DETAIL_ALLLIST_SUCCESS,
  GENERAL_DETAIL_DELETE_FAIL,
  GENERAL_DETAIL_DELETE_REQUEST,
  GENERAL_DETAIL_DELETE_SUCCESS,
  GENERAL_DETAIL_ENABLE_FAIL,
  GENERAL_DETAIL_ENABLE_REQUEST,
  GENERAL_DETAIL_ENABLE_SUCCESS,
  GENERAL_DETAIL_FAIL,
  GENERAL_DETAIL_LIST_FAIL,
  GENERAL_DETAIL_LIST_REQUEST,
  GENERAL_DETAIL_LIST_SUCCESS,
  GENERAL_DETAIL_REQUEST,
  GENERAL_DETAIL_SUCCESS,
  GENERAL_DETAIL_UPDATE_FAIL,
  GENERAL_DETAIL_UPDATE_REQUEST,
  GENERAL_DETAIL_UPDATE_SUCCESS,
  GENERAL_ENABLE_FAIL,
  GENERAL_ENABLE_REQUEST,
  GENERAL_ENABLE_SUCCESS,
  GENERAL_MULTIPLE_DELETE_FAIL,
  GENERAL_MULTIPLE_DELETE_REQUEST,
  GENERAL_MULTIPLE_DELETE_SUCCESS,
} from "../constants/GeneralConstants";

export const GeneralDetails = (general) => async (dispatch, getState) => {
  const fd = new FormData();
  fd.append("image", general.imageFile[0]);
  fd.append("name", general.name);
  fd.append("track", general.track);
  dispatch({ type: GENERAL_DETAIL_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post("/api/generaldetails", fd, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({
      type: GENERAL_DETAIL_SUCCESS,
      payload: data.savegendetail,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GENERAL_DETAIL_FAIL, payload: message });
  }
};

export const updateGeneral = (generalUpdate) => async (dispatch, getState) => {
  const fd = new FormData();

  fd.append("image", generalUpdate.imageFile[0]);
  fd.append("name", generalUpdate.name);
  fd.append("track", generalUpdate.track);
  dispatch({ type: GENERAL_DETAIL_UPDATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/generaldetails/updategen/${generalUpdate.id}`,
      fd,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: GENERAL_DETAIL_UPDATE_SUCCESS,
      payload: data.updatedetail,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GENERAL_DETAIL_UPDATE_FAIL, error: message });
  }
};

export const genSettingList = () => async (dispatch) => {
  dispatch({
    type: GENERAL_DETAIL_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/generaldetails/generallist`);
    dispatch({ type: GENERAL_DETAIL_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GENERAL_DETAIL_LIST_FAIL, payload: error.message });
  }
};

export const genSettingAllList = () => async (dispatch) => {
  dispatch({
    type: GENERAL_DETAIL_ALLLIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/generaldetails/generallallist`);
    dispatch({ type: GENERAL_DETAIL_ALLLIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GENERAL_DETAIL_ALLLIST_FAIL, payload: error.message });
  }
};

export const deletegeneralMasterlist = (id) => async (dispatch, getState) => {
  dispatch({ type: GENERAL_DETAIL_DELETE_REQUEST, payload: id });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/generaldetails/generalmasterdel/${id}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: GENERAL_DETAIL_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GENERAL_DETAIL_DELETE_FAIL, payload: message });
  }
};

export const updategeneralActivate =
  (checkboxId) => async (dispatch, getState) => {
    dispatch({ type: GENERAL_DETAIL_ACTIVATE_REQUEST, payload: checkboxId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/generaldetails/checkboxitem/${checkboxId.checkboxId}`,
        checkboxId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: GENERAL_DETAIL_ACTIVATE_SUCCESS,
        payload: data.generalmaster,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: GENERAL_DETAIL_ACTIVATE_FAIL, error: message });
    }
  };

export const updateGeneralEnable =
  (generalId) => async (dispatch, getState) => {
    dispatch({ type: GENERAL_DETAIL_ENABLE_REQUEST, payload: generalId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/generaldetails/updateEnables/${generalId.id}`,
        generalId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: GENERAL_DETAIL_ENABLE_SUCCESS,
        payload: data.generalEnable,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: GENERAL_DETAIL_ENABLE_FAIL, error: message });
    }
  };

export const updateGeneralEnableStatus =
  (generalStatusId) => async (dispatch, getState) => {
    // console.log("generalStatusId", generalStatusId);
    dispatch({ type: GENERAL_ENABLE_REQUEST, payload: generalStatusId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/generaldetails/updateStatusEnables/${generalStatusId.id}`,
        generalStatusId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: GENERAL_ENABLE_SUCCESS,
        payload: data.generalStatusEnable,
      });
      // console.log("data", data);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: GENERAL_ENABLE_FAIL, error: message });
    }
  };

export const deleteMultiplegeneral = (delId) => async (dispatch, getState) => {
  console.log('delId-------dddddddddddd->>>', delId);

  dispatch({ type: GENERAL_MULTIPLE_DELETE_REQUEST, payload: delId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(
      "/api/generaldetails/deletemultiple/",
      { data: delId },
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );

    dispatch({ type: GENERAL_MULTIPLE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GENERAL_MULTIPLE_DELETE_FAIL, payload: message });
  }
};
