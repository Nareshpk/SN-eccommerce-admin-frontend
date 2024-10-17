import { EMPLOYEE_ACTIVE_UPDATE_FAIL, EMPLOYEE_ACTIVE_UPDATE_REQUEST, EMPLOYEE_ACTIVE_UPDATE_RESET, EMPLOYEE_ACTIVE_UPDATE_SUCCESS, EMPLOYEE_DELETE_FAIL, EMPLOYEE_DELETE_REQUEST, EMPLOYEE_DELETE_RESET, EMPLOYEE_DELETE_SUCCESS, EMPLOYEE_DETAIL_FAIL, EMPLOYEE_DETAIL_REQUEST, EMPLOYEE_DETAIL_RESET, EMPLOYEE_DETAIL_SUCCESS, EMPLOYEE_ENABLE_UPDATE_FAIL, EMPLOYEE_ENABLE_UPDATE_REQUEST, EMPLOYEE_ENABLE_UPDATE_RESET, EMPLOYEE_ENABLE_UPDATE_SUCCESS, EMPLOYEE_LIST_FAIL, EMPLOYEE_LIST_REQUEST, EMPLOYEE_LIST_SUCCESS, EMPLOYEE_MULTIPLE_DELETE_FAIL, EMPLOYEE_MULTIPLE_DELETE_REQUEST, EMPLOYEE_MULTIPLE_DELETE_RESET, EMPLOYEE_MULTIPLE_DELETE_SUCCESS, EMPLOYEE_PROFLE_DELETE_FAIL, EMPLOYEE_PROFLE_DELETE_REQUEST, EMPLOYEE_PROFLE_DELETE_RESET, EMPLOYEE_PROFLE_DELETE_SUCCESS, EMPLOYEE_PROFLE_LIST_FAIL, EMPLOYEE_PROFLE_LIST_REQUEST, EMPLOYEE_PROFLE_LIST_SUCCESS, EMPLOYEE_PROFLE_UPDATE_FAIL, EMPLOYEE_PROFLE_UPDATE_REQUEST, EMPLOYEE_PROFLE_UPDATE_RESET, EMPLOYEE_PROFLE_UPDATE_SUCCESS, EMPLOYEE_UPDATE_FAIL, EMPLOYEE_UPDATE_REQUEST, EMPLOYEE_UPDATE_RESET, EMPLOYEE_UPDATE_SUCCESS } from "../constants/EmployeeConstants";

export const EmployeeSaveReducer = (state = {}, brand) => {

  switch (brand.type) {
    case EMPLOYEE_DETAIL_REQUEST:
      return { loading: true };
    case EMPLOYEE_DETAIL_SUCCESS:
      return { loading: false, success: true, productId: brand.payload };
    case EMPLOYEE_DETAIL_FAIL:
      return { loading: false, error: brand.payload };
    case EMPLOYEE_DETAIL_RESET:
      return {};
    default:
      return state;
  }
};



export const EmployeeProfileListReducer = (
    state = { loading: true, profiledetail: [] },
    action
  ) => {
    switch (action.type) {
      case EMPLOYEE_PROFLE_LIST_REQUEST:
        return { loading: true };
      case EMPLOYEE_PROFLE_LIST_SUCCESS:
        return {
          loading: false,
          profiledetail: action.payload,
        };
      case EMPLOYEE_PROFLE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  export const EmployeeListReducer = (
    state = { loading: true, employeedetail: [] },
    action
  ) => {
    switch (action.type) {
      case EMPLOYEE_LIST_REQUEST:
        return { loading: true };
      case EMPLOYEE_LIST_SUCCESS:
        return {
          loading: false,
          employeedetail: action.payload,
        };
      case EMPLOYEE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  export const EmployeeUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case EMPLOYEE_UPDATE_REQUEST:
        return { loading: true };
      case EMPLOYEE_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case EMPLOYEE_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case EMPLOYEE_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };


  export const EmployeeDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case EMPLOYEE_DELETE_REQUEST:
        return { loading: true };
      case EMPLOYEE_DELETE_SUCCESS:
        return { loading: false, success: true };
      case EMPLOYEE_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case EMPLOYEE_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };


  export const EmployeemultipleDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case EMPLOYEE_MULTIPLE_DELETE_REQUEST:
        return { loading: true };
      case EMPLOYEE_MULTIPLE_DELETE_SUCCESS:
        return { loading: false, success: true };
      case EMPLOYEE_MULTIPLE_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case EMPLOYEE_MULTIPLE_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const ProfileUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case EMPLOYEE_PROFLE_UPDATE_REQUEST:
        return { loading: true };
      case EMPLOYEE_PROFLE_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case EMPLOYEE_PROFLE_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case EMPLOYEE_PROFLE_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };


  export const profileDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case EMPLOYEE_PROFLE_DELETE_REQUEST:
        return { loading: true };
      case EMPLOYEE_PROFLE_DELETE_SUCCESS:
        return { loading: false, success: true };
      case EMPLOYEE_PROFLE_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case EMPLOYEE_PROFLE_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const EmployeeActiveReducer = (state = {}, action) => {
    switch (action.type) {
      case EMPLOYEE_ACTIVE_UPDATE_REQUEST:
        return { loading: true };
      case EMPLOYEE_ACTIVE_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case EMPLOYEE_ACTIVE_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case EMPLOYEE_ACTIVE_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const EnableUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case EMPLOYEE_ENABLE_UPDATE_REQUEST:
        return { loading: true };
      case EMPLOYEE_ENABLE_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case EMPLOYEE_ENABLE_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case EMPLOYEE_ENABLE_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };