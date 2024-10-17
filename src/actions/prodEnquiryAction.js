import Axios from "axios";
import { PPRODUCT_ENQUIRY_LIST_FAIL, PPRODUCT_ENQUIRY_LIST_REQUEST, PPRODUCT_ENQUIRY_LIST_SUCCESS } from "../constants/prodEnquiryConstant";

export const prodEnquiryList = () => async (dispatch) => {
    dispatch({
      type: PPRODUCT_ENQUIRY_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(`/api/prodenquiry/enquiryList`);
      dispatch({ type: PPRODUCT_ENQUIRY_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PPRODUCT_ENQUIRY_LIST_FAIL, payload: error.message });
    }
  };