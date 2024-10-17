import {
  PRODUCT_QUANTITIES_FAIL,
  PRODUCT_QUANTITIES_LAST_LIST_FAIL,
  PRODUCT_QUANTITIES_LAST_LIST_REQUEST,
  PRODUCT_QUANTITIES_LAST_LIST_SUCCESS,
  PRODUCT_QUANTITIES_LIST_FAIL,
  PRODUCT_QUANTITIES_LIST_REQUEST,
  PRODUCT_QUANTITIES_LIST_SUCCESS,
  PRODUCT_QUANTITIES_REQUEST,
  PRODUCT_QUANTITIES_RESET,
  PRODUCT_QUANTITIES_SUCCESS,
  PRODUCT_QUANTITIES_UPDATE_FAIL,
  PRODUCT_QUANTITIES_UPDATE_REQUEST,
  PRODUCT_QUANTITIES_UPDATE_RESET,
  PRODUCT_QUANTITIES_UPDATE_SUCCESS,
} from '../constants/productQuantitiesConstands';

export const QuantitiesSaveReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_QUANTITIES_REQUEST:
      return { loading: true };
    case PRODUCT_QUANTITIES_SUCCESS:
      return { loading: false, success: true, QtyId: action.payload };
    case PRODUCT_QUANTITIES_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_QUANTITIES_RESET:
      return {};
    default:
      return state;
  }
};

export const QuantityUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_QUANTITIES_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_QUANTITIES_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_QUANTITIES_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_QUANTITIES_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const QuantityListReducer = (
  state = { loading: true, quantity: [] },
  action,
) => {
  switch (action.type) {
    case PRODUCT_QUANTITIES_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_QUANTITIES_LIST_SUCCESS:
      return {
        loading: false,
        quantity: action.payload,
      };
    case PRODUCT_QUANTITIES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const QuantityLastListReducer = (
  state = { loading: true, quantitylist: [] },
  action,
) => {
  switch (action.type) {
    case PRODUCT_QUANTITIES_LAST_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_QUANTITIES_LAST_LIST_SUCCESS:
      return {
        loading: false,
        quantitylist: action.payload,
      };
    case PRODUCT_QUANTITIES_LAST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};