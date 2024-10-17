import {
  CUSTOMER_ADDRESS_DELETE_FAIL,
  CUSTOMER_ADDRESS_DELETE_REQUEST,
  CUSTOMER_ADDRESS_DELETE_RESET,
  CUSTOMER_ADDRESS_DELETE_SUCCESS,
  CUSTOMER_ADDRESS_FAIL,
  CUSTOMER_ADDRESS_LIST_FAIL,
  CUSTOMER_ADDRESS_LIST_REQUEST,
  CUSTOMER_ADDRESS_LIST_SUCCESS,
  CUSTOMER_ADDRESS_REQUEST,
  CUSTOMER_ADDRESS_RESET,
  CUSTOMER_ADDRESS_SUCCESS,
  CUSTOMER_ADDRESS_UPDATE_FAIL,
  CUSTOMER_ADDRESS_UPDATE_REQUEST,
  CUSTOMER_ADDRESS_UPDATE_RESET,
  CUSTOMER_ADDRESS_UPDATE_SUCCESS,
} from "../constants/customerConstant";

export const customerAddressReducer = (state = {}, customerAddress) => {
  switch (customerAddress.type) {
    case CUSTOMER_ADDRESS_REQUEST:
      return { loading: true };
    case CUSTOMER_ADDRESS_SUCCESS:
      return { loading: false, success: true, product: customerAddress.payload };
    case CUSTOMER_ADDRESS_FAIL:
      return { loading: false, error: customerAddress.payload };
    case CUSTOMER_ADDRESS_RESET:
      return {};
    default:
      return state;
  }
};

export const customAddListReducer = (
  state = { loading: true, custAddList: [] },action) => {
  switch (action.type) {
    case CUSTOMER_ADDRESS_LIST_REQUEST:
      return { loading: true };
    case CUSTOMER_ADDRESS_LIST_SUCCESS:
      return {
        loading: false,
        custAddList: action.payload,
      };
    case CUSTOMER_ADDRESS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const customAddressUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_ADDRESS_UPDATE_REQUEST:
      return { loading: true };
    case CUSTOMER_ADDRESS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case CUSTOMER_ADDRESS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CUSTOMER_ADDRESS_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const customAddDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_ADDRESS_DELETE_REQUEST:
      return { loading: true };
    case CUSTOMER_ADDRESS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CUSTOMER_ADDRESS_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case CUSTOMER_ADDRESS_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
