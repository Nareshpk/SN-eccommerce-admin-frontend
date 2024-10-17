import {
  CITY_BULKDELETE_FAIL,
  CITY_BULKDELETE_REQUEST,
  CITY_BULKDELETE_RESET,
  CITY_BULKDELETE_SUCCESS,
  CITY_CHECKBOX_FAIL,
  CITY_CHECKBOX_REQUEST,
  CITY_CHECKBOX_RESET,
  CITY_CHECKBOX_SUCCESS,
  CITY_DELETE_FAIL,
  CITY_DELETE_REQUEST,
  CITY_DELETE_RESET,
  CITY_DELETE_SUCCESS,
  CITY_ENABLE_FAIL,
  CITY_ENABLE_REQUEST,
  CITY_ENABLE_RESET,
  CITY_ENABLE_SUCCESS,
  CITY_LIST_FAIL,
  CITY_LIST_REQUEST,
  CITY_LIST_SUCCESS,
  CITY_SAVE_FAIL,
  CITY_SAVE_REQUEST,
  CITY_SAVE_RESET,
  CITY_SAVE_SUCCESS,
  CITY_UPDATE_FAIL,
  CITY_UPDATE_REQUEST,
  CITY_UPDATE_RESET,
  CITY_UPDATE_SUCCESS,
  CITY_ZONEASSIGHN_FAIL,
  CITY_ZONEASSIGHN_REQUEST,
  CITY_ZONEASSIGHN_RESET,
  CITY_ZONEASSIGHN_SUCCESS,
} from "../constants/CityConstants";

export const CitySaveReducer = (state = {}, city) => {
  switch (city.type) {
    case CITY_SAVE_REQUEST:
      return { loading: true };
    case CITY_SAVE_SUCCESS:
      return { loading: false, success: true, statesId: city.payload };
    case CITY_SAVE_FAIL:
      return { loading: false, error: city.payload };
    case CITY_SAVE_RESET:
      return {};
    default:
      return state;
  }
};

export const CityListReducer = (
  state = { loading: true, citydatum: [] },
  action,
) => {
  switch (action.type) {
    case CITY_LIST_REQUEST:
      return { loading: true };
    case CITY_LIST_SUCCESS:
      return {
        loading: false,
        citydatum: action.payload,
      };
    case CITY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const CityUpdateReducer = (
  state = { loading: true, Citydetails: [] },
  action,
) => {
  switch (action.type) {
    case CITY_UPDATE_REQUEST:
      return { loading: true };
    case CITY_UPDATE_SUCCESS:
      return {
        loading: false,
        Citydetails: action.payload,
      };
    case CITY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CITY_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const CityDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CITY_DELETE_REQUEST:
      return { loading: true };
    case CITY_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CITY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case CITY_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const activeCityReducer = (state = {}, action) => {
  switch (action.type) {
    case CITY_ENABLE_REQUEST:
      return { loading: true };
    case CITY_ENABLE_SUCCESS:
      return { loading: false, success: true };
    case CITY_ENABLE_FAIL:
      return { loading: false, error: action.payload };
    case CITY_ENABLE_RESET:
      return {};
    default:
      return state;
  }
};

export const cityCheckboxReducer = (state = {}, action) => {
  switch (action.type) {
    case CITY_CHECKBOX_REQUEST:
      return { loading: true };
    case CITY_CHECKBOX_SUCCESS:
      return { loading: false, success: true };
    case CITY_CHECKBOX_FAIL:
      return { loading: false, error: action.payload };
    case CITY_CHECKBOX_RESET:
      return {};
    default:
      return state;
  }
};

export const CitymultipleDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CITY_BULKDELETE_REQUEST:
      return { loading: true };
    case CITY_BULKDELETE_SUCCESS:
      return { loading: false, success: true };
    case CITY_BULKDELETE_FAIL:
      return { loading: false, error: action.payload };
    case CITY_BULKDELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const cityZoneCheckboxReducer = (state = {}, action) => {
  switch (action.type) {
    case CITY_ZONEASSIGHN_REQUEST:
      return { loading: true };
    case CITY_ZONEASSIGHN_SUCCESS:
      return { loading: false, success: true };
    case CITY_ZONEASSIGHN_FAIL:
      return { loading: false, error: action.payload };
    case CITY_ZONEASSIGHN_RESET:
      return {};
    default:
      return state;
  }
};
