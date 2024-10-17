import {
  ORDER_STATUS_DELETE_FAIL,
  ORDER_STATUS_DELETE_REQUEST,
  ORDER_STATUS_DELETE_RESET,
  ORDER_STATUS_DELETE_SUCCESS,
  ORDER_STATUS_LIST_FAIL,
  ORDER_STATUS_LIST_REQUEST,
  ORDER_STATUS_LIST_SUCCESS,
  ORDER_STATUS_SAVE_FAIL,
  ORDER_STATUS_SAVE_REQUEST,
  ORDER_STATUS_SAVE_RESET,
  ORDER_STATUS_SAVE_SUCCESS,
} from "../constants/orderConstants";

export const StatusListReducer = (
  state = { loading: true, statusdatum: [] },
  action
) => {
  switch (action.type) {
    case ORDER_STATUS_LIST_REQUEST:
      return { loading: true };
    case ORDER_STATUS_LIST_SUCCESS:
      return {
        loading: false,
        statusdatum: action.payload,
      };
    case ORDER_STATUS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const StatusSaveReducer = (state = {}, summary) => {
  switch (summary.type) {
    case ORDER_STATUS_SAVE_REQUEST:
      return { loading: true };
    case ORDER_STATUS_SAVE_SUCCESS:
      return { loading: false, success: true, productId: summary.payload };
    case ORDER_STATUS_SAVE_FAIL:
      return { loading: false, error: summary.payload };
    case ORDER_STATUS_SAVE_RESET:
      return {};
    default:
      return state;
  }
};
export const StatusDeleteReducer = (state = {}, StatusId) => {
  switch (StatusId.type) {
    case ORDER_STATUS_DELETE_REQUEST:
      return { loading: true };
    case ORDER_STATUS_DELETE_SUCCESS:
      return { loading: false, success: true, productId: StatusId.payload };
    case ORDER_STATUS_DELETE_FAIL:
      return { loading: false, error: StatusId.payload };
    case ORDER_STATUS_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
