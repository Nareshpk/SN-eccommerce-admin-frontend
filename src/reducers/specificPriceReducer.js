import {
  PRODUCT_LIST_GRID_FAIL,
  PRODUCT_LIST_GRID_REQUEST,
  PRODUCT_LIST_GRID_SUCCESS,
  SPECIFIC_DELETE_FAIL,
  SPECIFIC_DELETE_REQUEST,
  SPECIFIC_DELETE_RESET,
  SPECIFIC_DELETE_SUCCESS,
  SPECIFIC_PRICE_CONDITION_FAIL,
  SPECIFIC_PRICE_CONDITION_REQUEST,
  SPECIFIC_PRICE_CONDITION_RESET,
  SPECIFIC_PRICE_CONDITION_SUCCESS,
  SPECIFIC_PRICE_LIST_FAIL,
  SPECIFIC_PRICE_LIST_REQUEST,
  SPECIFIC_PRICE_LIST_SUCCESS,
  SPECIFIC_UPDATE_FAIL,
  SPECIFIC_UPDATE_REQUEST,
  SPECIFIC_UPDATE_RESET,
  SPECIFIC_UPDATE_SUCCESS,
} from "../constants/specificPriceConstants";

export const specificPriceReducer = (state = {}, action) => {
  switch (action.type) {
    case SPECIFIC_PRICE_CONDITION_REQUEST:
      return { loading: true };
    case SPECIFIC_PRICE_CONDITION_SUCCESS:
      return { loading: false, success: true, ShipId: action.payload };
    case SPECIFIC_PRICE_CONDITION_FAIL:
      return { loading: false, error: action.payload };
    case SPECIFIC_PRICE_CONDITION_RESET:
      return {};
    default:
      return state;
  }
};
export const speciPriceGridListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_GRID_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_GRID_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_GRID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const speciPriceListReducer = (
  state = { loading: true, pricelist: [] },
  action
) => {
  switch (action.type) {
    case SPECIFIC_PRICE_LIST_REQUEST:
      return { loading: true };
    case SPECIFIC_PRICE_LIST_SUCCESS:
      return { loading: false, pricelist: action.payload };
    case SPECIFIC_PRICE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const SpecificDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SPECIFIC_DELETE_REQUEST:
      return { loading: true };
    case SPECIFIC_DELETE_SUCCESS:
      return { loading: false, success: true };
    case SPECIFIC_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case SPECIFIC_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
export const specificPriceUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SPECIFIC_UPDATE_REQUEST:
      return { loading: true };
    case SPECIFIC_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case SPECIFIC_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case SPECIFIC_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
