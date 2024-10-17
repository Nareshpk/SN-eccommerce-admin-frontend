import {
  CAT_PRODUCT_ACTIVE_UPDATE_FAIL, CAT_PRODUCT_ACTIVE_UPDATE_REQUEST, CAT_PRODUCT_ACTIVE_UPDATE_RESET, CAT_PRODUCT_ACTIVE_UPDATE_SUCCESS, CAT_PRODUCT_DELETE_FAIL,
  CAT_PRODUCT_DELETE_REQUEST,
  CAT_PRODUCT_DELETE_RESET,
  CAT_PRODUCT_DELETE_SUCCESS, CAT_PRODUCT_DETAILS_FAIL, CAT_PRODUCT_DETAILS_REQUEST, CAT_PRODUCT_DETAILS_RESET, CAT_PRODUCT_DETAILS_SUCCESS, CAT_PRODUCT_FAIL,
  CAT_PRODUCT_REQUEST,
  CAT_PRODUCT_SAVE_FAIL,
  CAT_PRODUCT_SAVE_REQUEST,
  CAT_PRODUCT_SAVE_RESET,
  CAT_PRODUCT_SAVE_SUCCESS,
  CAT_PRODUCT_SUCCESS,
  CAT_PRODUCT_UPDATE_FAIL,
  CAT_PRODUCT_UPDATE_REQUEST, CAT_PRODUCT_UPDATE_RESET, CAT_PRODUCT_UPDATE_SUCCESS, CAT_PRODUCT_VIEW_FAIL, CAT_PRODUCT_VIEW_REQUEST, CAT_PRODUCT_VIEW_SUCCESS, COMBINATION_CHILD_LIST_FAIL, COMBINATION_CHILD_LIST_REQUEST,
  COMBINATION_CHILD_LIST_SUCCESS, COMBINATION_LIST_FAIL, COMBINATION_LIST_REQUEST, COMBINATION_LIST_SUCCESS, COMBINATION_SAVE_FAIL, COMBINATION_SAVE_REQUEST, COMBINATION_SAVE_RESET, COMBINATION_SAVE_SUCCESS, PRODUCT_ENABLE_UPDATE_FAIL, PRODUCT_ENABLE_UPDATE_REQUEST, PRODUCT_ENABLE_UPDATE_RESET, PRODUCT_ENABLE_UPDATE_SUCCESS, PRODUCT_MULTIPLE_DELETE_FAIL, PRODUCT_MULTIPLE_DELETE_REQUEST, PRODUCT_MULTIPLE_DELETE_RESET, PRODUCT_MULTIPLE_DELETE_SUCCESS, WISHLIST_UPDATE_FAIL, WISHLIST_UPDATE_REQUEST, WISHLIST_UPDATE_RESET, WISHLIST_UPDATE_SUCCESS
} from "../constants/catBrandConstant";

export const catProductReducer = (state = {}, brand) => {

  switch (brand.type) {
    case CAT_PRODUCT_SAVE_REQUEST:
      return { loading: true };
    case CAT_PRODUCT_SAVE_SUCCESS:
      return { loading: false, success: true, productId: brand.payload };
    case CAT_PRODUCT_SAVE_FAIL:
      return { loading: false, error: brand.payload };
    case CAT_PRODUCT_SAVE_RESET:
      return {};
    default:
      return state;
  }
};

export const catalogProdReducer = (
  state = { loading: true, catProducts: [] },
  action
) => {
  switch (action.type) {
    case CAT_PRODUCT_REQUEST:
      return { loading: true };
    case CAT_PRODUCT_SUCCESS:
      return {
        loading: false,
        catProducts: action.payload,
      };
    case CAT_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const catalogProdViewReducer = (
  state = { loading: true, catProducts: [] },
  action
) => {
  switch (action.type) {
    case CAT_PRODUCT_VIEW_REQUEST:
      return { loading: true };
    case CAT_PRODUCT_VIEW_SUCCESS:
      return {
        loading: false,
        catProducts: action.payload,
      };
    case CAT_PRODUCT_VIEW_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const catalogProdUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case CAT_PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case CAT_PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case CAT_PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CAT_PRODUCT_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const catProddeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CAT_PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case CAT_PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CAT_PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case CAT_PRODUCT_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const catProdDetailReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case CAT_PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case CAT_PRODUCT_DETAILS_SUCCESS:
      return { loading: false, catalogIndProd: action.payload };
    case CAT_PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case CAT_PRODUCT_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};

export const wishListUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case WISHLIST_UPDATE_REQUEST:
      return { loading: true };
    case WISHLIST_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case WISHLIST_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case WISHLIST_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
// ****************************Combination*****************

export const catComReducer = (state = {}, brand) => {

  switch (brand.type) {
    case COMBINATION_SAVE_REQUEST:
      return { loading: true };
    case COMBINATION_SAVE_SUCCESS:
      return { loading: false, success: true, productId: brand.payload };
    case COMBINATION_SAVE_FAIL:
      return { loading: false, error: brand.payload };
    case COMBINATION_SAVE_RESET:
      return {};
    default:
      return state;
  }
};


export const CombinationListReducer = (
  state = { loading: true, CominationItem: [] },
  action
) => {
  switch (action.type) {
    case COMBINATION_LIST_REQUEST:
      return { loading: true };
    case COMBINATION_LIST_SUCCESS:
      return {
        loading: false,
        CominationItem: action.payload,
      };
    case COMBINATION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const CombinationchildListReducer = (
  state = { loading: true, childComination: [] },
  action
) => {
  switch (action.type) {
    case COMBINATION_CHILD_LIST_REQUEST:
      return { loading: true };
    case COMBINATION_CHILD_LIST_SUCCESS:
      return {
        loading: false,
        childComination: action.payload,
      };
    case COMBINATION_CHILD_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const ProductActiveReducer = (state = {}, action) => {
  switch (action.type) {
    case CAT_PRODUCT_ACTIVE_UPDATE_REQUEST:
      return { loading: true };
    case CAT_PRODUCT_ACTIVE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case CAT_PRODUCT_ACTIVE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CAT_PRODUCT_ACTIVE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const EnableproductUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_ENABLE_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_ENABLE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_ENABLE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_ENABLE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};





export const ProductmultipleDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_MULTIPLE_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_MULTIPLE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_MULTIPLE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_MULTIPLE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};