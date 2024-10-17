const {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_RESET,
  PRODUCT_CATEGORY_LIST_REQUEST,
  PRODUCT_CATEGORY_LIST_SUCCESS,
  PRODUCT_CATEGORY_LIST_FAIL,

  PRODUCT_CATEGORYGROUP_LIST_REQUEST,
  PRODUCT_CATEGORYGROUP_LIST_SUCCESS,
  PRODUCT_CATEGORYGROUP_LIST_FAIL,
  PRODUCT_CATEGORYTYPE_LIST_REQUEST,
  PRODUCT_CATEGORYTYPE_LIST_SUCCESS,
  PRODUCT_CATEGORYTYPE_LIST_FAIL,

  PRODUCT_REVIEW_CREATE_REQUEST,
  PRODUCT_REVIEW_CREATE_SUCCESS,
  PRODUCT_REVIEW_CREATE_FAIL,
  PRODUCT_REVIEW_CREATE_RESET,
  PRODUCT_DETAILS_RESET,
  PRODUCT_MEN_LIST_REQUEST,
  PRODUCT_MEN_LIST_SUCCESS,
  PRODUCT_MEN_LIST_FAIL,
  PRODUCT_KIDS_LIST_FAIL,
  PRODUCT_KIDS_LIST_SUCCESS,
  PRODUCT_KIDS_LIST_REQUEST,
  PRODUCT_WOMEN_LIST_FAIL,
  PRODUCT_WOMEN_LIST_SUCCESS,
  PRODUCT_WOMEN_LIST_REQUEST,
 
} = require("../constants/productConstants");

export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productMenListReducer = (
  state = { loading: true, menProducts: [] },action) => {
  switch (action.type) {
    case PRODUCT_MEN_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_MEN_LIST_SUCCESS:
      return {
        loading: false,
        menProducts: action.payload,
       
      };
    case PRODUCT_MEN_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productWomenListReducer = (
  state = { loading: true, womenProducts: [] },action) => {
  switch (action.type) {
    case PRODUCT_WOMEN_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_WOMEN_LIST_SUCCESS:
      return {
        loading: false,
        womenProducts: action.payload,
       
      };
    case PRODUCT_WOMEN_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productKidsListReducer = (
  state = { loading: true, kidProducts: [] },action) => {
  switch (action.type) {
    case PRODUCT_KIDS_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_KIDS_LIST_SUCCESS:
      return {
        loading: false,
        kidProducts: action.payload,
       
      };
    case PRODUCT_KIDS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCategoryListReducer = (
  state = { loading: true, products: [] },
  action
  ) => {
    switch (action.type) {
      case PRODUCT_CATEGORY_LIST_REQUEST:
        return { loading: true };
      case PRODUCT_CATEGORY_LIST_SUCCESS:
        return { loading: false, categories: action.payload };
      case PRODUCT_CATEGORY_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const productCategorygroupListReducer = (
    state = { loading: true, products: [] },
    action
    ) => {
      switch (action.type) {
        case PRODUCT_CATEGORYGROUP_LIST_REQUEST:
          return { loadingfrp: true };
        case PRODUCT_CATEGORYGROUP_LIST_SUCCESS:
          return { loadinggrp: false, categoriesGroup: action.payload };
        case PRODUCT_CATEGORYGROUP_LIST_FAIL:
          return { loadinggrp: false, errorcategrp: action.payload };
        default:
          return state;
      }
    };

    export const productCategorytypeListReducer = (
      state = { loading: true, products: [] },
      action
      ) => {
        switch (action.type) {
          case PRODUCT_CATEGORYTYPE_LIST_REQUEST:
            return { loadingtype: true };
          case PRODUCT_CATEGORYTYPE_LIST_SUCCESS:
            return { loadingtype: false, categoriesType: action.payload };
          case PRODUCT_CATEGORYTYPE_LIST_FAIL:
            return { loadingtype: false, errorcategtype: action.payload };
          default:
            return state;
        }
      };

export const productDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
      case PRODUCT_DETAILS_RESET:
        return {};
    default:
      return state;
  }
};
export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
export const productUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_REVIEW_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_REVIEW_CREATE_SUCCESS:
      return { loading: false, success: true, review: action.payload };
    case PRODUCT_REVIEW_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_REVIEW_CREATE_RESET:
      return {};
    default:
      return state;
  }
};