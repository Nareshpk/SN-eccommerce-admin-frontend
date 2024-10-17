import {
  SUMMARY_LIST_FAIL,
  SUMMARY_LIST_REQUEST,
  SUMMARY_LIST_SUCCESS,
  SUMMARY_SAVE_FAIL,
  SUMMARY_SAVE_REQUEST,
  SUMMARY_SAVE_RESET,
  SUMMARY_SAVE_SUCCESS,
  SUMMARY_UPDATE_FAIL,
  SUMMARY_UPDATE_REQUEST,
  SUMMARY_UPDATE_RESET,
  SUMMARY_UPDATE_SUCCESS,
} from "../constants/SizeWeightGroup";

export const SummarySaveReducer = (state = {}, summary) => {
  switch (summary.type) {
    case SUMMARY_SAVE_REQUEST:
      return { loading: true };
    case SUMMARY_SAVE_SUCCESS:
      return { loading: false, success: true, productId: summary.payload };
    case SUMMARY_SAVE_FAIL:
      return { loading: false, error: summary.payload };
    case SUMMARY_SAVE_RESET:
      return {};
    default:
      return state;
  }
};

export const SummaryListReducer = (
  state = { loading: true, summarydatum: [] },
  action,
) => {
  switch (action.type) {
    case SUMMARY_LIST_REQUEST:
      return { loading: true };
    case SUMMARY_LIST_SUCCESS:
      return {
        loading: false,
        summarydatum: action.payload,
      };
    case SUMMARY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const SummaryUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SUMMARY_UPDATE_REQUEST:
      return { loading: true };
    case SUMMARY_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case SUMMARY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case SUMMARY_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
