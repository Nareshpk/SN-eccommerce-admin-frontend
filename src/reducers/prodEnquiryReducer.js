import {
  PPRODUCT_ENQUIRY_LIST_FAIL,
  PPRODUCT_ENQUIRY_LIST_REQUEST,
  PPRODUCT_ENQUIRY_LIST_SUCCESS,
} from "../constants/prodEnquiryConstant";

export const productEnquiryListReducer = (
  state = { loading: true, prodEnqList: [] },
  action
) => {
  switch (action.type) {
    case PPRODUCT_ENQUIRY_LIST_REQUEST:
      return { loading: true };
    case PPRODUCT_ENQUIRY_LIST_SUCCESS:
      return {
        loading: false,
        prodEnqList: action.payload,
      };
    case PPRODUCT_ENQUIRY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
