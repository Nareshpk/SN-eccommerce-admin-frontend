import {
  STATE_BULKDELETE_FAIL,
  STATE_BULKDELETE_REQUEST,
  STATE_BULKDELETE_RESET,
  STATE_BULKDELETE_SUCCESS,
  STATE_CHECKBOX_FAIL,
  STATE_CHECKBOX_REQUEST,
  STATE_CHECKBOX_RESET,
  STATE_CHECKBOX_SUCCESS,
  STATE_DELETE_FAIL,
  STATE_DELETE_REQUEST,
  STATE_DELETE_RESET,
  STATE_DELETE_SUCCESS,
  STATE_ENABLE_FAIL,
  STATE_ENABLE_REQUEST,
  STATE_ENABLE_RESET,
  STATE_ENABLE_SUCCESS,
  STATE_LIST_FAIL,
  STATE_LIST_REQUEST,
  STATE_LIST_SUCCESS,
  STATE_SAVE_FAIL,
  STATE_SAVE_REQUEST,
  STATE_SAVE_RESET,
  STATE_SAVE_SUCCESS,
  STATE_UPDATE_FAIL,
  STATE_UPDATE_REQUEST,
  STATE_UPDATE_RESET,
  STATE_UPDATE_SUCCESS,
  STATE_ZONEASSIGHN_FAIL,
  STATE_ZONEASSIGHN_REQUEST,
  STATE_ZONEASSIGHN_RESET,
  STATE_ZONEASSIGHN_SUCCESS,
} from "../constants/StateConstants";

export const StateSaveReducer = (state = {}, states) => {
  switch (states.type) {
    case STATE_SAVE_REQUEST:
      return { loading: true };
    case STATE_SAVE_SUCCESS:
      return { loading: false, success: true, statesId: states.payload };
    case STATE_SAVE_FAIL:
      return { loading: false, error: states.payload };
    case STATE_SAVE_RESET:
      return {};
    default:
      return state;
  }
};

export const StateListReducer = (
  state = { loading: true, Statedatum: [] },
  action,
) => {
  switch (action.type) {
    case STATE_LIST_REQUEST:
      return { loading: true };
    case STATE_LIST_SUCCESS:
      return {
        loading: false,
        Statedatum: action.payload,
      };
    case STATE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const StateUpdateReducer = (
  state = { loading: true, Statedetails: [] },
  action,
) => {
  switch (action.type) {
    case STATE_UPDATE_REQUEST:
      return { loading: true };
    case STATE_UPDATE_SUCCESS:
      return {
        loading: false,
        Statedetails: action.payload,
      };
    case STATE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case STATE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const StateDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case STATE_DELETE_REQUEST:
      return { loading: true };
    case STATE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case STATE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case STATE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const activeStateReducer = (state = {}, action) => {
  switch (action.type) {
    case STATE_ENABLE_REQUEST:
      return { loading: true };
    case STATE_ENABLE_SUCCESS:
      return { loading: false, success: true };
    case STATE_ENABLE_FAIL:
      return { loading: false, error: action.payload };
    case STATE_ENABLE_RESET:
      return {};
    default:
      return state;
  }
};

export const statesCheckboxReducer = (state = {}, action) => {
  switch (action.type) {
    case STATE_CHECKBOX_REQUEST:
      return { loading: true };
    case STATE_CHECKBOX_SUCCESS:
      return { loading: false, success: true };
    case STATE_CHECKBOX_FAIL:
      return { loading: false, error: action.payload };
    case STATE_CHECKBOX_RESET:
      return {};
    default:
      return state;
  }
};

export const StatemultipleDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case STATE_BULKDELETE_REQUEST:
      return { loading: true };
    case STATE_BULKDELETE_SUCCESS:
      return { loading: false, success: true };
    case STATE_BULKDELETE_FAIL:
      return { loading: false, error: action.payload };
    case STATE_BULKDELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const statesZoneCheckboxReducer = (state = {}, action) => {
  switch (action.type) {
    case STATE_ZONEASSIGHN_REQUEST:
      return { loading: true };
    case STATE_ZONEASSIGHN_SUCCESS:
      return { loading: false, success: true };
    case STATE_ZONEASSIGHN_FAIL:
      return { loading: false, error: action.payload };
    case STATE_ZONEASSIGHN_RESET:
      return {};
    default:
      return state;
  }
};
