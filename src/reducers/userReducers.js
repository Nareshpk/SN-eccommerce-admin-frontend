import {
  USER_ADDRESS_MAP_CONFIRM,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_RESET,
  USER_DELETE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTEROUT,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_ACCOUNT_FAIL,
  USER_ACCOUNT_REQUEST,
  USER_ACCOUNT_SUCCESS,
  USER_ACCOUNTOUT,
  USER_ACCOUNTCREATION_FAIL,
  USER_ACCOUNTCREATION_REQUEST,
  USER_ACCOUNTCREATION_SUCCESS,
  USER_ACCOUNTCREATIONOUT,
  USER_ADMININ_FAIL,
  USER_ADMININ_REQUEST,
  USER_ADMININ_SUCCESS,
  USER_ADMINOUT,
  USER_TOPSELLERS_LIST_FAIL,
  USER_TOPSELLERS_LIST_REQUEST,
  USER_TOPSELLERS_LIST_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_RESET,
  USER_UPDATE_SUCCESS,
} from '../constants/userConstants';

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
      case USER_REGISTEROUT:
      return {};
    default:
      return state;
  }
};


export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};



export const userAccountReducer = (state = {}, action) => {
  
  switch (action.type) {
    case USER_ACCOUNT_REQUEST:
      return { loading: true };
    case USER_ACCOUNT_SUCCESS:
      return { loading: false,  userInfo: action.payload };
    case USER_ACCOUNT_FAIL:
      return { loading: false, error: action.payload };
    case USER_ACCOUNTOUT:
      return {};
    default:
      return state;
  }
};

export const userAccountcreationReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ACCOUNTCREATION_REQUEST:
      return { loading: true };
    case USER_ACCOUNTCREATION_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_ACCOUNTCREATION_FAIL:
      return { loading: false, error: action.payload };
    case USER_ACCOUNTCREATIONOUT:
      return {};
    default:
      return state;
  }
};
export const userAdmininReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ADMININ_REQUEST:
      return { loading: true };
    case USER_ADMININ_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_ADMININ_FAIL:
      return { loading: false, error: action.payload };
    case USER_ADMINOUT:
      return {};
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return { loading: true };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true };
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case USER_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const userListReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true };
    case USER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case USER_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const userTopSellerListReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case USER_TOPSELLERS_LIST_REQUEST:
      return { loading: true };
    case USER_TOPSELLERS_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_TOPSELLERS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userAddressMapReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ADDRESS_MAP_CONFIRM:
      return { address: action.payload };
    default:
      return state;
  }
};