const {
    KID_LIST_REQUEST,
    KID_LIST_SUCCESS,
    KID_LIST_FAIL,
    KID_DETAILS_REQUEST,
    KID_DETAILS_SUCCESS,
    KID_DETAILS_FAIL,
    KID_CREATE_REQUEST,
    KID_CREATE_SUCCESS,
    KID_CREATE_FAIL,
    KID_CREATE_RESET,
    KID_UPDATE_REQUEST,
    KID_UPDATE_SUCCESS,
    KID_UPDATE_FAIL,
    KID_UPDATE_RESET,
    KID_DELETE_REQUEST,
    KID_DELETE_SUCCESS,
    KID_DELETE_FAIL,
    KID_DELETE_RESET,
    KID_CATEGORY_LIST_REQUEST,
    KID_CATEGORY_LIST_SUCCESS,
    KID_CATEGORY_LIST_FAIL,
    KID_REVIEW_CREATE_REQUEST,
    KID_REVIEW_CREATE_SUCCESS,
    KID_REVIEW_CREATE_FAIL,
    KID_REVIEW_CREATE_RESET,
  } = require("../constants/kidConstants");
  
  export const kidListReducer = (
    state = { loading: true, kids: [] },
    action
  ) => {
    switch (action.type) {
      case KID_LIST_REQUEST:
        return { loading: true };
      case KID_LIST_SUCCESS:
        return {
          loading: false,
          kids: action.payload.kids,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case KID_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const kidCategoryListReducer = (
    state = { loading: true, kids: [] },
    action
    ) => {
      switch (action.type) {
        case KID_CATEGORY_LIST_REQUEST:
          return { loading: true };
        case KID_CATEGORY_LIST_SUCCESS:
          return { loading: false, categories: action.payload };
        case KID_CATEGORY_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
    };
  
  export const kidDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case KID_DETAILS_REQUEST:
        return { loading: true };
      case KID_DETAILS_SUCCESS:
        return { loading: false, kid: action.payload };
      case KID_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const kidCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case KID_CREATE_REQUEST:
        return { loading: true };
      case KID_CREATE_SUCCESS:
        return { loading: false, success: true, kid: action.payload };
      case KID_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case KID_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const kidUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case KID_UPDATE_REQUEST:
        return { loading: true };
      case KID_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case KID_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case KID_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const kidDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case KID_DELETE_REQUEST:
        return { loading: true };
      case KID_DELETE_SUCCESS:
        return { loading: false, success: true };
      case KID_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case KID_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const kidReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case KID_REVIEW_CREATE_REQUEST:
        return { loading: true };
      case KID_REVIEW_CREATE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case KID_REVIEW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case KID_REVIEW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };