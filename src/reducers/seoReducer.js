import {
  SEO_DETAILS_LIST_FAIL,
  SEO_DETAILS_LIST_REQUEST,
  SEO_DETAILS_LIST_SUCCESS,
  SEO_DETAILS_UPDATE_FAIL,
  SEO_DETAILS_UPDATE_REQUEST,
  SEO_DETAILS_UPDATE_RESET,
  SEO_DETAILS_UPDATE_SUCCESS,
  SEO_SAVE_FAIL,
  SEO_SAVE_REQUEST,
  SEO_SAVE_RESET,
  SEO_SAVE_SUCCESS,
} from "../constants/SeoConstants";

export const seoReducer = (state = {}, action) => {
  switch (action.type) {
    case SEO_SAVE_REQUEST:
      return { loading: true };
    case SEO_SAVE_SUCCESS:
      return { loading: false, success: true, seoId: action.payload };
    case SEO_SAVE_FAIL:
      return { loading: false, error: action.payload };
    case SEO_SAVE_RESET:
      return {};
    default:
      return state;
  }
};

export const SeoListReducer = (
  state = { loading: true, seolistdetails: [] },
  action,
) => {
  switch (action.type) {
    case SEO_DETAILS_LIST_REQUEST:
      return { loading: true };
    case SEO_DETAILS_LIST_SUCCESS:
      return {
        loading: false,
        seolistdetails: action.payload,
      };
    case SEO_DETAILS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const SeoUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SEO_DETAILS_UPDATE_REQUEST:
      return { loading: true };
    case SEO_DETAILS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case SEO_DETAILS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case SEO_DETAILS_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};