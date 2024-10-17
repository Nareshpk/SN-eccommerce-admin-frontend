import {
  PRODUCT_SHIPPING_DETAILS_FAIL,
  PRODUCT_SHIPPING_DETAILS_REQUEST,
  PRODUCT_SHIPPING_DETAILS_RESET,
  PRODUCT_SHIPPING_DETAILS_SUCCESS,
  PRODUCT_SHIPPING_LIST_FAIL,
  PRODUCT_SHIPPING_LIST_REQUEST,
  PRODUCT_SHIPPING_LIST_SUCCESS,
  PRODUCT_SHIPPING_UPDATE_FAIL,
  PRODUCT_SHIPPING_UPDATE_REQUEST,
  PRODUCT_SHIPPING_UPDATE_RESET,
  PRODUCT_SHIPPING_UPDATE_SUCCESS,
} from '../constants/ProductSippingConstants';

export const shippingSaveReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_SHIPPING_DETAILS_REQUEST:
      return { loading: true };
    case PRODUCT_SHIPPING_DETAILS_SUCCESS:
      return { loading: false, success: true, ShipId: action.payload };
    case PRODUCT_SHIPPING_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_SHIPPING_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};

export const ShipUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_SHIPPING_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_SHIPPING_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_SHIPPING_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_SHIPPING_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const ShipListReducer = (
  state = { loading: true, shippingdetail: [] },
  action,
) => {
  switch (action.type) {
    case PRODUCT_SHIPPING_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_SHIPPING_LIST_SUCCESS:
      return {
        loading: false,
        shippingdetail: action.payload,
      };
    case PRODUCT_SHIPPING_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};