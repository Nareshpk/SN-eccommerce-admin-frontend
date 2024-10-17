import {
  ZONE_BULKDELETE_FAIL,
  ZONE_BULKDELETE_REQUEST,
  ZONE_BULKDELETE_RESET,
  ZONE_BULKDELETE_SUCCESS,
  ZONE_CHECKBOX_FAIL,
  ZONE_CHECKBOX_REQUEST,
  ZONE_CHECKBOX_RESET,
  ZONE_CHECKBOX_SUCCESS,
  ZONE_DELETE_FAIL,
  ZONE_DELETE_REQUEST,
  ZONE_DELETE_RESET,
  ZONE_DELETE_SUCCESS,
  ZONE_ENABLE_FAIL,
  ZONE_ENABLE_REQUEST,
  ZONE_ENABLE_RESET,
  ZONE_ENABLE_SUCCESS,
  ZONE_LIST_FAIL,
  ZONE_LIST_REQUEST,
  ZONE_LIST_SUCCESS,
  ZONE_SAVE_FAIL,
  ZONE_SAVE_REQUEST,
  ZONE_SAVE_RESET,
  ZONE_SAVE_SUCCESS,
  ZONE_UPDATE_FAIL,
  ZONE_UPDATE_REQUEST,
  ZONE_UPDATE_RESET,
  ZONE_UPDATE_SUCCESS,
} from "../constants/ZoneConstants";

export const ZoneSaveReducer = (state = {}, zone) => {
  switch (zone.type) {
    case ZONE_SAVE_REQUEST:
      return { loading: true };
    case ZONE_SAVE_SUCCESS:
      return { loading: false, success: true, zoneId: zone.payload };
    case ZONE_SAVE_FAIL:
      return { loading: false, error: zone.payload };
    case ZONE_SAVE_RESET:
      return {};
    default:
      return state;
  }
};
export const ZoneListReducer = (
  state = { loading: true, zonedatum: [] },
  action,
) => {
  switch (action.type) {
    case ZONE_LIST_REQUEST:
      return { loading: true };
    case ZONE_LIST_SUCCESS:
      return {
        loading: false,
        zonedatum: action.payload,
      };
    case ZONE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ZoneDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ZONE_DELETE_REQUEST:
      return { loading: true };
    case ZONE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ZONE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case ZONE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const ZoneUpdateReducer = (
  state = { loading: true, Zonedetails: [] },
  action,
) => {
  switch (action.type) {
    case ZONE_UPDATE_REQUEST:
      return { loading: true };
    case ZONE_UPDATE_SUCCESS:
      return {
        loading: false,
        Zonedetails: action.payload,
      };
    case ZONE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ZONE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const activeZoneReducer = (state = {}, action) => {
  switch (action.type) {
    case ZONE_ENABLE_REQUEST:
      return { loading: true };
    case ZONE_ENABLE_SUCCESS:
      return { loading: false, success: true };
    case ZONE_ENABLE_FAIL:
      return { loading: false, error: action.payload };
    case ZONE_ENABLE_RESET:
      return {};
    default:
      return state;
  }
};

export const ZoneCheckboxReducer = (state = {}, action) => {
  switch (action.type) {
    case ZONE_CHECKBOX_REQUEST:
      return { loading: true };
    case ZONE_CHECKBOX_SUCCESS:
      return { loading: false, success: true };
    case ZONE_CHECKBOX_FAIL:
      return { loading: false, error: action.payload };
    case ZONE_CHECKBOX_RESET:
      return {};
    default:
      return state;
  }
};

export const ZonemultipleDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ZONE_BULKDELETE_REQUEST:
      return { loading: true };
    case ZONE_BULKDELETE_SUCCESS:
      return { loading: false, success: true };
    case ZONE_BULKDELETE_FAIL:
      return { loading: false, error: action.payload };
    case ZONE_BULKDELETE_RESET:
      return {};
    default:
      return state;
  }
};
