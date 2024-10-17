import {
  OPTIONS_DETAILS_LIST_FAIL,
  OPTIONS_DETAILS_LIST_REQUEST,
  OPTIONS_DETAILS_LIST_SUCCESS,
  OPTIONS_DETAILS_UPDATE_FAIL,
  OPTIONS_DETAILS_UPDATE_REQUEST,
  OPTIONS_DETAILS_UPDATE_RESET,
  OPTIONS_DETAILS_UPDATE_SUCCESS,
  OPTIONS_SAVE_FAIL,
  OPTIONS_SAVE_REQUEST,
  OPTIONS_SAVE_RESET,
  OPTIONS_SAVE_SUCCESS,
} from "../constants/OptionConstants";
export const OptionSaveReducer = (state = {}, brand) => {
  switch (brand.type) {
    case OPTIONS_SAVE_REQUEST:
      return { loading: true };
    case OPTIONS_SAVE_SUCCESS:
      return { loading: false, success: true, optId: brand.payload };
    case OPTIONS_SAVE_FAIL:
      return { loading: false, error: brand.payload };
    case OPTIONS_SAVE_RESET:
      return {};
    default:
      return state;
  }
};

export const OptionListReducer = (
  state = { loading: true, options: [] },
  action,
) => {
  switch (action.type) {
    case OPTIONS_DETAILS_LIST_REQUEST:
      return { loading: true };
    case OPTIONS_DETAILS_LIST_SUCCESS:
      return {
        loading: false,
        options: action.payload,
      };
    case OPTIONS_DETAILS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const OptionUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case OPTIONS_DETAILS_UPDATE_REQUEST:
      return { loading: true };
    case OPTIONS_DETAILS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case OPTIONS_DETAILS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case OPTIONS_DETAILS_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};