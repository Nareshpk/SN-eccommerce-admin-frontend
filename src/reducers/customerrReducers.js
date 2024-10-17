import {
  CUSTOMER_BULK_DELETE_FAIL,
  CUSTOMER_BULK_DELETE_REQUEST,
  CUSTOMER_BULK_DELETE_RESET,
  CUSTOMER_BULK_DELETE_SUCCESS,
  CUSTOMER_BULK_UPDATE_FAIL,
  CUSTOMER_BULK_UPDATE_REQUEST,
  CUSTOMER_BULK_UPDATE_RESET,
  CUSTOMER_BULK_UPDATE_SUCCESS,
  CUSTOMER_DELETE_FAIL,
  CUSTOMER_DELETE_REQUEST,
  CUSTOMER_DELETE_RESET,
  CUSTOMER_DELETE_SUCCESS,
  CUSTOMER_DETAILS_FAIL,
  CUSTOMER_DETAILS_REQUEST,
  CUSTOMER_DETAILS_RESET,
  CUSTOMER_DETAILS_SUCCESS,
  CUSTOMER_ENABLE_UPDATE_FAIL,
  CUSTOMER_ENABLE_UPDATE_REQUEST,
  CUSTOMER_ENABLE_UPDATE_RESET,
  CUSTOMER_ENABLE_UPDATE_SUCCESS,
  CUSTOMER_LIST_FAIL,
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_UPDATE_FAIL,
  CUSTOMER_UPDATE_REQUEST,
  CUSTOMER_UPDATE_RESET,
  CUSTOMER_UPDATE_SUCCESS,
} from "../constants/customerrConstants";

export const CustomerSaveReducer = (state = {}, brand) => {
  switch (brand.type) {
    case CUSTOMER_DETAILS_REQUEST:
      return { loading: true };
    case CUSTOMER_DETAILS_SUCCESS:
      return { loading: false, success: true, productId: brand.payload };
    case CUSTOMER_DETAILS_FAIL:
      return { loading: false, error: brand.payload };
    case CUSTOMER_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};
export const CustomerListReducer = (
  state = { loading: true, customers: [] },
  action,
) => {
  switch (action.type) {
    case CUSTOMER_LIST_REQUEST:
      return { loading: true };
    case CUSTOMER_LIST_SUCCESS:
      return { loading: false, customers: action.payload };
    case CUSTOMER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const CustomerUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_UPDATE_REQUEST:
      return { loading: true };
    case CUSTOMER_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case CUSTOMER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CUSTOMER_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
export const CusomerDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_DELETE_REQUEST:
      return { loading: true };
    case CUSTOMER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CUSTOMER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case CUSTOMER_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const activeCustomerEnableReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_ENABLE_UPDATE_REQUEST:
      return { loading: true };
    case CUSTOMER_ENABLE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case CUSTOMER_ENABLE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CUSTOMER_ENABLE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const CustomerBulkEnableReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_BULK_UPDATE_REQUEST:
      return { loading: true };
    case CUSTOMER_BULK_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case CUSTOMER_BULK_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CUSTOMER_BULK_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
export const CusmultipleDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_BULK_DELETE_REQUEST:
      return { loading: true };
    case CUSTOMER_BULK_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CUSTOMER_BULK_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case CUSTOMER_BULK_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
