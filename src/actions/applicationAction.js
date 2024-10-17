import {
  APPLICATION_DELETE_FAIL,
  APPLICATION_DELETE_REQUEST,
  APPLICATION_DELETE_SUCCESS,
  APPLICATION_ENABLE_UPDATE_FAIL,
  APPLICATION_ENABLE_UPDATE_REQUEST,
  APPLICATION_ENABLE_UPDATE_SUCCESS,
  APPLICATION_SETTING_FAIL,
  APPLICATION_SETTING_LIST_FAIL,
  APPLICATION_SETTING_LIST_REQUEST,
  APPLICATION_SETTING_LIST_SUCCESS,
  APPLICATION_SETTING_REQUEST,
  APPLICATION_SETTING_SUCCESS,
} from '../constants/applicationConstant';
import Axios from 'axios';

export const saveApplicationSetting =
  (appsetting) => async (dispatch, getState) => {
    const fd = new FormData();
    fd.append('image', appsetting.imageFile[0]);
    fd.append('name', appsetting.name);
    dispatch({ type: APPLICATION_SETTING_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post('/api/application', fd, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({
        type: APPLICATION_SETTING_SUCCESS,
        payload: data.appsetting,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: APPLICATION_SETTING_FAIL, payload: message });
    }
  };

export const applicatinSettingList = () => async (dispatch) => {
  dispatch({
    type: APPLICATION_SETTING_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/application/appList`);
    dispatch({ type: APPLICATION_SETTING_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: APPLICATION_SETTING_LIST_FAIL, payload: error.message });
  }
};

export const deleteApp = (appId) => async (dispatch, getState) => {
  dispatch({ type: APPLICATION_DELETE_REQUEST, payload: appId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/application/deleteapp/${appId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });

    dispatch({ type: APPLICATION_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: APPLICATION_DELETE_FAIL, payload: message });
  }
};

export const updateAppEnable = (EnableId) => async (dispatch, getState) => {
  dispatch({ type: APPLICATION_ENABLE_UPDATE_REQUEST, payload: EnableId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/application/updateEnable/${EnableId.id}`,
      EnableId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: APPLICATION_ENABLE_UPDATE_SUCCESS,
      payload: data.Attmaster,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: APPLICATION_ENABLE_UPDATE_FAIL, error: message });
  }
};
