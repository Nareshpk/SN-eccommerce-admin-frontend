import {
  SHIPPING_ALLLIST_FAIL,
  SHIPPING_ALLLIST_REQUEST,
  SHIPPING_ALLLIST_SUCCESS,
  SHIPPING_LIST_FAIL,
  SHIPPING_LIST_REQUEST,
  SHIPPING_LIST_SUCCESS,
  SHIPPING_SAVE_FAIL,
  SHIPPING_SAVE_REQUEST,
  SHIPPING_SAVE_RESET,
  SHIPPING_SAVE_SUCCESS,
  SHIPPING_UPDATE_FAIL,
  SHIPPING_UPDATE_REQUEST,
  SHIPPING_UPDATE_RESET,
  SHIPPING_UPDATE_SUCCESS
} from "../constants/shippingLocConstants";

export const shippingReducer = (state = {}, action) => {
  switch (action.type) {
    case SHIPPING_SAVE_REQUEST:
      return { loading: true };
    case SHIPPING_SAVE_SUCCESS:
      return { loading: false, success: true, shippingId: action.payload };
    case SHIPPING_SAVE_FAIL:
      return { loading: false, error: action.payload };
    case SHIPPING_SAVE_RESET:
      return {};
    default:
      return state;
  }
};

export const ShippingcostReducer = (
  state = { loading: true, shippingdata: [] },
  action
) => {
  switch (action.type) {
    case SHIPPING_LIST_REQUEST:
      return { loading: true };
    case SHIPPING_LIST_SUCCESS:
      return {
        loading: false,
        shippingdata: action.payload,
      };
    case SHIPPING_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ShippingAllListReducer = (
  state = { loading: true, shippinglistdata: [] },
  action
) => {
  switch (action.type) {
    case SHIPPING_ALLLIST_REQUEST:
      return { loading: true };
    case SHIPPING_ALLLIST_SUCCESS:
      return {
        loading: false,
        shippinglistdata: action.payload,
      };
    case SHIPPING_ALLLIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const shippingUpdatesReducer = (state = {}, action) => {
  switch (action.type) {
    case SHIPPING_UPDATE_REQUEST:
      return { loading: true };
    case SHIPPING_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case SHIPPING_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case SHIPPING_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};


