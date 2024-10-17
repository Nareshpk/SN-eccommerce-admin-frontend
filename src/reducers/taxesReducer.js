import {
  TAXES_CREATE_FAIL,
  TAXES_CREATE_REQUEST,
  TAXES_CREATE_RESET,
  TAXES_CREATE_SUCCESS,
  TAXES_ENABLE_FAIL,
  TAXES_ENABLE_REQUEST,
  TAXES_ENABLE_RESET,
  TAXES_ENABLE_SUCCESS,
  TAXES_LIST_FAIL,
  TAXES_LIST_REQUEST,
  TAXES_LIST_SUCCESS,
  TAXES_MASTER_DEL_FAIL,
  TAXES_MASTER_DEL_REQUEST,
  TAXES_MASTER_DEL_RESET,
  TAXES_MASTER_DEL_SUCCESS,
  TAXES_MASTER_UPDATE_FAIL,
  TAXES_MASTER_UPDATE_REQUEST,
  TAXES_MASTER_UPDATE_SUCCESS,
  TAXES_MULTIPLE_DELETE_FAIL,
  TAXES_MULTIPLE_DELETE_REQUEST,
  TAXES_MULTIPLE_DELETE_RESET,
  TAXES_MULTIPLE_DELETE_SUCCESS,
  TAXES_UPDATES_FAIL,
  TAXES_UPDATES_REQUEST,
  TAXES_UPDATES_RESET,
  TAXES_UPDATES_SUCCESS,
} from '../constants/taxesConstants';

export const TaxesCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case TAXES_CREATE_REQUEST:
      return { loading: true };
    case TAXES_CREATE_SUCCESS:
      return { loading: false, success: true, category: action.payload };
    case TAXES_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case TAXES_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const TaxesListReducer = (
  state = { loading: true, taxes: [] },
  action
) => {
  switch (action.type) {
    case TAXES_LIST_REQUEST:
      return { loading: true };
    case TAXES_LIST_SUCCESS:
      return {
        loading: false,
        taxes: action.payload,
      };
    case TAXES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const TaxesMasterDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case TAXES_MASTER_DEL_REQUEST:
      return { loading: true };
    case TAXES_MASTER_DEL_SUCCESS:
      return { loading: false, success: true };
    case TAXES_MASTER_DEL_FAIL:
      return { loading: false, error: action.payload };
    case TAXES_MASTER_DEL_RESET:
      return {};
    default:
      return state;
  }
};

export const TaxesUpdateReducer = (
  state = { loading: true, Taxesdetails: [] },
  action
) => {
  switch (action.type) {
    case TAXES_MASTER_UPDATE_REQUEST:
      return { loading: true };
    case TAXES_MASTER_UPDATE_SUCCESS:
      return {
        loading: false,
        Featuresdetails: action.payload,
      };
    case TAXES_MASTER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const taxesCheckboxReducer = (state = {}, action) => {
  switch (action.type) {
    case TAXES_UPDATES_REQUEST:
      return { loading: true };
    case TAXES_UPDATES_SUCCESS:
      return { loading: false, success: true };
    case TAXES_UPDATES_FAIL:
      return { loading: false, error: action.payload };
    case TAXES_UPDATES_RESET:
      return {};
    default:
      return state;
  }
};

export const TaxmultipleDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case TAXES_MULTIPLE_DELETE_REQUEST:
      return { loading: true };
    case TAXES_MULTIPLE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case TAXES_MULTIPLE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case TAXES_MULTIPLE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const TaxEnableReducer = (state = {}, action) => {
  switch (action.type) {
    case TAXES_ENABLE_REQUEST:
      return { loading: true };
    case TAXES_ENABLE_SUCCESS:
      return { loading: false, success: true };
    case TAXES_ENABLE_FAIL:
      return { loading: false, error: action.payload };
    case TAXES_ENABLE_RESET:
      return {};
    default:
      return state;
  }
};
