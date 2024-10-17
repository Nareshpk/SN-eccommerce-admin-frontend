const {
    WOMEN_LIST_REQUEST,
    WOMEN_LIST_SUCCESS,
    WOMEN_LIST_FAIL,
    WOMEN_DETAILS_REQUEST,
    WOMEN_DETAILS_SUCCESS,
    WOMEN_DETAILS_FAIL,
    WOMEN_CREATE_REQUEST,
    WOMEN_CREATE_SUCCESS,
    WOMEN_CREATE_FAIL,
    WOMEN_CREATE_RESET,
    WOMEN_UPDATE_REQUEST,
    WOMEN_UPDATE_SUCCESS,
    WOMEN_UPDATE_FAIL,
    WOMEN_UPDATE_RESET,
    WOMEN_DELETE_REQUEST,
    WOMEN_DELETE_SUCCESS,
    WOMEN_DELETE_FAIL,
    WOMEN_DELETE_RESET,
    WOMEN_CATEGORY_LIST_REQUEST,
    WOMEN_CATEGORY_LIST_SUCCESS,
    WOMEN_CATEGORY_LIST_FAIL,
    WOMEN_REVIEW_CREATE_REQUEST,
    WOMEN_REVIEW_CREATE_SUCCESS,
    WOMEN_REVIEW_CREATE_FAIL,
    WOMEN_REVIEW_CREATE_RESET,
  } = require("../constants/womenConstants");
  
  export const womenListReducer = (
    state = { loading: true, womens: [] },
    action
  ) => {
    switch (action.type) {
      case WOMEN_LIST_REQUEST:
        return { loading: true };
      case WOMEN_LIST_SUCCESS:
        return {
          loading: false,
          womens: action.payload.womens,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case WOMEN_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const womenCategoryListReducer = (
    state = { loading: true, womens: [] },
    action
    ) => {
      switch (action.type) {
        case WOMEN_CATEGORY_LIST_REQUEST:
          return { loading: true };
        case WOMEN_CATEGORY_LIST_SUCCESS:
          return { loading: false, categories: action.payload };
        case WOMEN_CATEGORY_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
    };
  
  export const womenDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case WOMEN_DETAILS_REQUEST:
        return { loading: true };
      case WOMEN_DETAILS_SUCCESS:
        return { loading: false, women: action.payload };
      case WOMEN_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const womenCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case WOMEN_CREATE_REQUEST:
        return { loading: true };
      case WOMEN_CREATE_SUCCESS:
        return { loading: false, success: true, women: action.payload };
      case WOMEN_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case WOMEN_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const womenUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case WOMEN_UPDATE_REQUEST:
        return { loading: true };
      case WOMEN_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case WOMEN_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case WOMEN_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const womenDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case WOMEN_DELETE_REQUEST:
        return { loading: true };
      case WOMEN_DELETE_SUCCESS:
        return { loading: false, success: true };
      case WOMEN_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case WOMEN_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const womenReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case WOMEN_REVIEW_CREATE_REQUEST:
        return { loading: true };
      case WOMEN_REVIEW_CREATE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case WOMEN_REVIEW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case WOMEN_REVIEW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };