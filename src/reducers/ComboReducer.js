import {
  COMBO_DELETE_FAIL,
  COMBO_DELETE_REQUEST,
  COMBO_DELETE_RESET,
  COMBO_DELETE_SUCCESS,
  COMBO_DETAILS_FAIL,
  COMBO_DETAILS_REQUEST,
  COMBO_DETAILS_SUCCESS,
  COMBO_SAVE_FAIL,
  COMBO_SAVE_REQUEST,
  COMBO_SAVE_RESET,
  COMBO_SAVE_SUCCESS,
  COMBO_UPDATE_FAIL,
  COMBO_UPDATE_REQUEST,
  COMBO_UPDATE_RESET,
  COMBO_UPDATE_SUCCESS,
} from '../constants/ComboConstants';

export const ComboSaveReducer = (state = {}, brand) => {
  switch (brand.type) {
    case COMBO_SAVE_REQUEST:
      return { loading: true };
    case COMBO_SAVE_SUCCESS:
      return { loading: false, success: true, productId: brand.payload };
    case COMBO_SAVE_FAIL:
      return { loading: false, error: brand.payload };
    case COMBO_SAVE_RESET:
      return {};
    default:
      return state;
  }
};

export const ComboUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case COMBO_UPDATE_REQUEST:
      return { loading: true };
    case COMBO_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case COMBO_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case COMBO_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const ComboDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COMBO_DELETE_REQUEST:
      return { loading: true };
    case COMBO_DELETE_SUCCESS:
      return { loading: false, success: true };
    case COMBO_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case COMBO_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const ComboTaxReducer = (
  state = { loading: true, combotax: [] },
  action
) => {
  switch (action.type) {
    case COMBO_DETAILS_REQUEST:
      return { loading: true };
    case COMBO_DETAILS_SUCCESS:
      return { loading: false, combotax: action.payload };
    case COMBO_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
