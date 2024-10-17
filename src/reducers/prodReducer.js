import {
  PRICING_DETAILS_FAIL,
  PRICING_DETAILS_LAST_LIST_FAIL,
  PRICING_DETAILS_LAST_LIST_REQUEST,
  PRICING_DETAILS_LAST_LIST_SUCCESS,
  PRICING_DETAILS_LIST_FAIL,
  PRICING_DETAILS_LIST_REQUEST,
  PRICING_DETAILS_LIST_SUCCESS,
  PRICING_DETAILS_REQUEST,
  PRICING_DETAILS_RESET,
  PRICING_DETAILS_SUCCESS,
  PRICING_DETAILS_UPDATE_FAIL,
  PRICING_DETAILS_UPDATE_REQUEST,
  PRICING_DETAILS_UPDATE_RESET,
  PRICING_DETAILS_UPDATE_SUCCESS
} from "../constants/prodConstants";


export const PricingDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case PRICING_DETAILS_REQUEST:
      return { loading: true };
    case PRICING_DETAILS_SUCCESS:
      return { loading: false, success: true, category: action.payload };
    case PRICING_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case PRICING_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};

export const PricingUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRICING_DETAILS_UPDATE_REQUEST:
      return { loading: true };
    case PRICING_DETAILS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PRICING_DETAILS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRICING_DETAILS_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const PriceListReducer = (
  state = { loading: true, pricingdetail: [] },
  action,
) => {
  switch (action.type) {
    case PRICING_DETAILS_LIST_REQUEST:
      return { loading: true };
    case PRICING_DETAILS_LIST_SUCCESS:
      return {
        loading: false,
        pricingdetail: action.payload,
      };
    case PRICING_DETAILS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const PriceLastListReducer = (
  state = { loading: true, pricinglist: [] },
  action,
) => {
  switch (action.type) {
    case PRICING_DETAILS_LAST_LIST_REQUEST:
      return { loading: true };
    case PRICING_DETAILS_LAST_LIST_SUCCESS:
      return {
        loading: false,
        pricinglist: action.payload,
      };
    case PRICING_DETAILS_LAST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};