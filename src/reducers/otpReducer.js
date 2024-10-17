import { OTP_LIST_FAIL, OTP_LIST_REQUEST, OTP_LIST_SUCCESS, USER_OTP_FAIL, USER_OTP_REQUEST, USER_OTP_SUCCESS } from "../constants/otpConstant";


export const userOtpReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_OTP_REQUEST:
        return { loading: true };
      case USER_OTP_SUCCESS:
        return { loading: false, otp: action.payload };
      case USER_OTP_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const otpListReducer = (
    state = { loading: true, otpList: [] },action) => {
    switch (action.type) {
      case OTP_LIST_REQUEST:
        return { loading: true };
      case OTP_LIST_SUCCESS:
        return {
          loading: false,
          allotpList: action.payload,
         
        };
      case OTP_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };