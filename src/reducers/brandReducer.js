import {
  BRAND_ADDRESS_FAIL,
  BRAND_ADDRESS_REQUEST,
  BRAND_ADDRESS_RESET,
  BRAND_ADDRESS_SUCCESS,
  BRAND_ADDRESS_UPDATE_FAIL,
  BRAND_ADDRESS_UPDATE_REQUEST,
  BRAND_ADDRESS_UPDATE_RESET,
  BRAND_ADDRESS_UPDATE_SUCCESS,
  BRAND_DELETE_FAIL,
  BRAND_DELETE_REQUEST,
  BRAND_DELETE_RESET,
  BRAND_DELETE_SUCCESS,
  BRAND_ENABLE_UPDATE_FAIL,
  BRAND_ENABLE_UPDATE_REQUEST,
  BRAND_ENABLE_UPDATE_RESET,
  BRAND_ENABLE_UPDATE_SUCCESS,
  BRAND_FAIL,
  BRAND_MULTIPLE_DELETE_FAIL,
  BRAND_MULTIPLE_DELETE_REQUEST,
  BRAND_MULTIPLE_DELETE_RESET,
  BRAND_MULTIPLE_DELETE_SUCCESS,
  BRAND_REQUEST,
  BRAND_SAVE_FAIL,
  BRAND_SAVE_REQUEST,
  BRAND_SAVE_RESET,
  BRAND_SAVE_SUCCESS,
  BRAND_SUCCESS,
  BRAND_UPDATES_FAIL,
  BRAND_UPDATES_REQUEST,
  BRAND_UPDATES_RESET,
  BRAND_UPDATES_SUCCESS,
  BRAND_UPDATE_FAIL,
  BRAND_UPDATE_REQUEST,
  BRAND_UPDATE_RESET,
  BRAND_UPDATE_SUCCESS,
} from "../constants/brandConstant";

export const brandReducer = (state = {}, brand) => {
  switch (brand.type) {
    case BRAND_SAVE_REQUEST:
      return { loading: true };
    case BRAND_SAVE_SUCCESS:
      return { loading: false, success: true, product: brand.payload };
    case BRAND_SAVE_FAIL:
      return { loading: false, error: brand.payload };
    case BRAND_SAVE_RESET:
      return {};
    default:
      return state;
  }
};

export const brandListReducer = (
  state = { loading: true, brandLists: [] },
  action
) => {
  switch (action.type) {
    case BRAND_REQUEST:
      return { loading: true };
    case BRAND_SUCCESS:
      return {
        loading: false,
        brandLists: action.payload,
      };
    case BRAND_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const brandUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case BRAND_UPDATE_REQUEST:
      return { loading: true };
    case BRAND_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case BRAND_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case BRAND_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const brandDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BRAND_DELETE_REQUEST:
      return { loading: true };
    case BRAND_DELETE_SUCCESS:
      return { loading: false, success: true };
    case BRAND_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case BRAND_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const brandCheckboxReducer = (state = {}, action) => {
  switch (action.type) {
    case BRAND_UPDATES_REQUEST:
      return { loading: true };
    case BRAND_UPDATES_SUCCESS:
      return { loading: false, success: true };
    case BRAND_UPDATES_FAIL:
      return { loading: false, error: action.payload };
    case BRAND_UPDATES_RESET:
      return {};
    default:
      return state;
  }
};

export const brandAddressReducer = (state = {}, address) => {
  switch (address.type) {
    case BRAND_ADDRESS_REQUEST:
      return { loading: true };
    case BRAND_ADDRESS_SUCCESS:
      return { loading: false, success: true, product: address.payload };
    case BRAND_ADDRESS_FAIL:
      return { loading: false, error: address.payload };
    case BRAND_ADDRESS_RESET:
      return {};
    default:
      return state;
  }
};

export const brandAddressListReducer = (
  state = { loading: true, brandAddLists: [] },
  action
) => {
  switch (action.type) {
    case BRAND_ADDRESS_REQUEST:
      return { loading: true };
    case BRAND_ADDRESS_SUCCESS:
      return {
        loading: false,
        brandAddLists: action.payload,
      };
    case BRAND_ADDRESS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const brandAddressUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case BRAND_ADDRESS_UPDATE_REQUEST:
      return { loading: true };
    case BRAND_ADDRESS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case BRAND_ADDRESS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case BRAND_ADDRESS_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const brandAddressDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BRAND_DELETE_REQUEST:
      return { loading: true };
    case BRAND_DELETE_SUCCESS:
      return { loading: false, success: true };
    case BRAND_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case BRAND_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const EnablebrandUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case BRAND_ENABLE_UPDATE_REQUEST:
      return { loading: true };
    case BRAND_ENABLE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case BRAND_ENABLE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case BRAND_ENABLE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const BrandmultipleDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BRAND_MULTIPLE_DELETE_REQUEST:
      return { loading: true };
    case BRAND_MULTIPLE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case BRAND_MULTIPLE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case BRAND_MULTIPLE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
