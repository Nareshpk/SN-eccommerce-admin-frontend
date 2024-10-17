import {
  GENERAL_DETAIL_ACTIVATE_FAIL,
  GENERAL_DETAIL_ACTIVATE_REQUEST,
  GENERAL_DETAIL_ACTIVATE_RESET,
  GENERAL_DETAIL_ACTIVATE_SUCCESS,
  GENERAL_DETAIL_ALLLIST_FAIL,
  GENERAL_DETAIL_ALLLIST_REQUEST,
  GENERAL_DETAIL_ALLLIST_SUCCESS,
  GENERAL_DETAIL_DELETE_FAIL,
  GENERAL_DETAIL_DELETE_REQUEST,
  GENERAL_DETAIL_DELETE_RESET,
  GENERAL_DETAIL_DELETE_SUCCESS,
  GENERAL_DETAIL_ENABLE_FAIL,
  GENERAL_DETAIL_ENABLE_REQUEST,
  GENERAL_DETAIL_ENABLE_RESET,
  GENERAL_DETAIL_ENABLE_SUCCESS,
  GENERAL_DETAIL_FAIL,
  GENERAL_DETAIL_LIST_FAIL,
  GENERAL_DETAIL_LIST_REQUEST,
  GENERAL_DETAIL_LIST_SUCCESS,
  GENERAL_DETAIL_REQUEST,
  GENERAL_DETAIL_RESET,
  GENERAL_DETAIL_SUCCESS,
  GENERAL_DETAIL_UPDATE_FAIL,
  GENERAL_DETAIL_UPDATE_REQUEST,
  GENERAL_DETAIL_UPDATE_RESET,
  GENERAL_DETAIL_UPDATE_SUCCESS,
  GENERAL_ENABLE_FAIL,
  GENERAL_ENABLE_REQUEST,
  GENERAL_ENABLE_RESET,
  GENERAL_ENABLE_SUCCESS,
  GENERAL_MULTIPLE_DELETE_FAIL,
  GENERAL_MULTIPLE_DELETE_REQUEST,
  GENERAL_MULTIPLE_DELETE_RESET,
  GENERAL_MULTIPLE_DELETE_SUCCESS,
} from "../constants/GeneralConstants";

export const GeneralSaveReducer = (state = {}, Generaldetail) => {
  switch (Generaldetail.type) {
    case GENERAL_DETAIL_REQUEST:
      return { loading: true };
    case GENERAL_DETAIL_SUCCESS:
      return {
        loading: false,
        success: true,
        productId: Generaldetail.payload,
      };
    case GENERAL_DETAIL_FAIL:
      return { loading: false, error: Generaldetail.payload };
    case GENERAL_DETAIL_RESET:
      return {};
    default:
      return state;
  }
};

export const GeneralListReducer = (
  state = { loading: true, generaldata: [] },
  action
) => {
  switch (action.type) {
    case GENERAL_DETAIL_LIST_REQUEST:
      return { loading: true };
    case GENERAL_DETAIL_LIST_SUCCESS:
      return {
        loading: false,
        generaldata: action.payload,
      };
    case GENERAL_DETAIL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const generalUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case GENERAL_DETAIL_UPDATE_REQUEST:
      return { loading: true };
    case GENERAL_DETAIL_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case GENERAL_DETAIL_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case GENERAL_DETAIL_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const GeneralallListReducer = (
  state = { loading: true, generaldatum: [] },
  action
) => {
  switch (action.type) {
    case GENERAL_DETAIL_ALLLIST_REQUEST:
      return { loading: true };
    case GENERAL_DETAIL_ALLLIST_SUCCESS:
      return {
        loading: false,
        generaldatum: action.payload,
      };
    case GENERAL_DETAIL_ALLLIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const generalMasterDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case GENERAL_DETAIL_DELETE_REQUEST:
      return { loading: true };
    case GENERAL_DETAIL_DELETE_SUCCESS:
      return { loading: false, success: true };
    case GENERAL_DETAIL_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case GENERAL_DETAIL_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const generalCheckboxReducer = (state = {}, action) => {
  switch (action.type) {
    case GENERAL_DETAIL_ACTIVATE_REQUEST:
      return { loading: true };
    case GENERAL_DETAIL_ACTIVATE_SUCCESS:
      return { loading: false, success: true };
    case GENERAL_DETAIL_ACTIVATE_FAIL:
      return { loading: false, error: action.payload };
    case GENERAL_DETAIL_ACTIVATE_RESET:
      return {};
    default:
      return state;
  }
};

export const GeneralEnableReducer = (state = {}, action) => {
  switch (action.type) {
    case GENERAL_DETAIL_ENABLE_REQUEST:
      return { loading: true };
    case GENERAL_DETAIL_ENABLE_SUCCESS:
      return { loading: false, success: true };
    case GENERAL_DETAIL_ENABLE_FAIL:
      return { loading: false, error: action.payload };
    case GENERAL_DETAIL_ENABLE_RESET:
      return {};
    default:
      return state;
  }
};

export const GeneralStatusEnableReducer = (state = {}, action) => {
  switch (action.type) {
    case GENERAL_ENABLE_REQUEST:
      return { loading: true };
    case GENERAL_ENABLE_SUCCESS:
      return { loading: false, success: true };
    case GENERAL_ENABLE_FAIL:
      return { loading: false, error: action.payload };
    case GENERAL_ENABLE_RESET:
      return {};
    default:
      return state;
  }
};

export const GeneralmultipleDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case GENERAL_MULTIPLE_DELETE_REQUEST:
      return { loading: true };
    case GENERAL_MULTIPLE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case GENERAL_MULTIPLE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case GENERAL_MULTIPLE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
