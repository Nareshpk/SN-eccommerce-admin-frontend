import {
  PAY_BULKDELETE_FAIL,
  PAY_BULKDELETE_REQUEST,
  PAY_BULKDELETE_RESET,
  PAY_BULKDELETE_SUCCESS,
  PAY_CHECKBOX_FAIL,
  PAY_CHECKBOX_REQUEST,
  PAY_CHECKBOX_RESET,
  PAY_CHECKBOX_SUCCESS,
  PAY_DELETE_FAIL,
  PAY_DELETE_REQUEST,
  PAY_DELETE_RESET,
  PAY_DELETE_SUCCESS,
  PAY_ENABLE_FAIL,
  PAY_ENABLE_REQUEST,
  PAY_ENABLE_RESET,
  PAY_ENABLE_SUCCESS,
  PAY_LIST_FAIL,
  PAY_LIST_REQUEST,
  PAY_LIST_SUCCESS,
  PAY_SAVE_FAIL,
  PAY_SAVE_REQUEST,
  PAY_SAVE_RESET,
  PAY_SAVE_SUCCESS,
  PAY_UPDATE_FAIL,
  PAY_UPDATE_REQUEST,
  PAY_UPDATE_RESET,
  PAY_UPDATE_SUCCESS,
} from "../constants/PaymentConstants";

export const PaymentSaveReducer = (state = {}, pay) => {
  switch (pay.type) {
    case PAY_SAVE_REQUEST:
      return { loading: true };
    case PAY_SAVE_SUCCESS:
      return { loading: false, success: true, statesId: pay.payload };
    case PAY_SAVE_FAIL:
      return { loading: false, error: pay.payload };
    case PAY_SAVE_RESET:
      return {};
    default:
      return state;
  }
};

export const PayListReducer = (
  state = { loading: true, paymentdatum: [] },
  action,
) => {
  switch (action.type) {
    case PAY_LIST_REQUEST:
      return { loading: true };
    case PAY_LIST_SUCCESS:
      return {
        loading: false,
        paymentdatum: action.payload,
      };
    case PAY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const PayUpdateReducer = (
  state = { loading: true, paydetails: [] },
  action,
) => {
  switch (action.type) {
    case PAY_UPDATE_REQUEST:
      return { loading: true };
    case PAY_UPDATE_SUCCESS:
      return {
        loading: false,
        paydetails: action.payload,
      };
    case PAY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PAY_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const PayDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PAY_DELETE_REQUEST:
      return { loading: true };
    case PAY_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PAY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case PAY_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const activePayReducer = (state = {}, action) => {
  switch (action.type) {
    case PAY_ENABLE_REQUEST:
      return { loading: true };
    case PAY_ENABLE_SUCCESS:
      return { loading: false, success: true };
    case PAY_ENABLE_FAIL:
      return { loading: false, error: action.payload };
    case PAY_ENABLE_RESET:
      return {};
    default:
      return state;
  }
};

export const payCheckboxReducer = (state = {}, action) => {
  switch (action.type) {
    case PAY_CHECKBOX_REQUEST:
      return { loading: true };
    case PAY_CHECKBOX_SUCCESS:
      return { loading: false, success: true };
    case PAY_CHECKBOX_FAIL:
      return { loading: false, error: action.payload };
    case PAY_CHECKBOX_RESET:
      return {};
    default:
      return state;
  }
};

export const PaymultipleDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PAY_BULKDELETE_REQUEST:
      return { loading: true };
    case PAY_BULKDELETE_SUCCESS:
      return { loading: false, success: true };
    case PAY_BULKDELETE_FAIL:
      return { loading: false, error: action.payload };
    case PAY_BULKDELETE_RESET:
      return {};
    default:
      return state;
  }
};
