import {
  APPLICATION_DELETE_FAIL,
  APPLICATION_DELETE_REQUEST,
  APPLICATION_DELETE_RESET,
  APPLICATION_DELETE_SUCCESS,
  APPLICATION_ENABLE_UPDATE_FAIL,
  APPLICATION_ENABLE_UPDATE_REQUEST,
  APPLICATION_ENABLE_UPDATE_RESET,
  APPLICATION_ENABLE_UPDATE_SUCCESS,
  APPLICATION_SETTING_FAIL,
  APPLICATION_SETTING_LIST_FAIL,
  APPLICATION_SETTING_LIST_REQUEST,
  APPLICATION_SETTING_LIST_SUCCESS,
  APPLICATION_SETTING_REQUEST,
  APPLICATION_SETTING_RESET,
  APPLICATION_SETTING_SUCCESS,
} from "../constants/applicationConstant";

export const applicationSettingReducer = (state = {}, action) => {
  switch (action.type) {
    case APPLICATION_SETTING_REQUEST:
      return { loading: true };
    case APPLICATION_SETTING_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case APPLICATION_SETTING_FAIL:
      return { loading: false, error: action.payload };
    case APPLICATION_SETTING_RESET:
      return {};
    default:
      return state;
  }
};

export const appSettingListReducer = (
  state = { loading: true, appSettingList: [] },action) => {
  switch (action.type) {
    case APPLICATION_SETTING_LIST_REQUEST:
      return { loading: true };
    case APPLICATION_SETTING_LIST_SUCCESS:
      return {
        loading: false,
        appSettingList: action.payload,
       
      };
    case APPLICATION_SETTING_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const applicationDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case APPLICATION_DELETE_REQUEST:
      return { loading: true };
    case APPLICATION_DELETE_SUCCESS:
      return { loading: false, success: true };
    case APPLICATION_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case APPLICATION_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const appEnableUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case APPLICATION_ENABLE_UPDATE_REQUEST:
      return { loading: true };
    case APPLICATION_ENABLE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case APPLICATION_ENABLE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case APPLICATION_ENABLE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};