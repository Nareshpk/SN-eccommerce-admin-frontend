import Axios from 'axios';
import { OTP_LIST_FAIL, OTP_LIST_REQUEST, OTP_LIST_SUCCESS, USER_OTP_FAIL, USER_OTP_REQUEST, USER_OTP_SUCCESS } from "../constants/otpConstant";


export const saveOtp = (otpInfo) => async (dispatch) => {
    dispatch({ type: USER_OTP_REQUEST});
    try {
      const { data } = await Axios.post('/api/otp', otpInfo);
      dispatch({ type: USER_OTP_SUCCESS, payload: data });
      dispatch({ type: USER_OTP_SUCCESS, payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data?data:''));
    } catch (error) {
      dispatch({
        type: USER_OTP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const otpList = () => async (dispatch) => {
    dispatch({
      type: OTP_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(`/api/otp/otpList`);
      dispatch({ type: OTP_LIST_SUCCESS, payload: data });
     
    } catch (error) {
      dispatch({ type: OTP_LIST_FAIL, payload: error.message });
    }
  };