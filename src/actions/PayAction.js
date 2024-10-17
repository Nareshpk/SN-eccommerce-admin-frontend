import Axios from "axios";
import {
  PAY_BULKDELETE_FAIL,
  PAY_BULKDELETE_REQUEST,
  PAY_BULKDELETE_SUCCESS,
  PAY_CHECKBOX_FAIL,
  PAY_CHECKBOX_REQUEST,
  PAY_CHECKBOX_SUCCESS,
  PAY_DELETE_FAIL,
  PAY_DELETE_REQUEST,
  PAY_DELETE_SUCCESS,
  PAY_ENABLE_FAIL,
  PAY_ENABLE_REQUEST,
  PAY_ENABLE_SUCCESS,
  PAY_LIST_FAIL,
  PAY_LIST_REQUEST,
  PAY_LIST_SUCCESS,
  PAY_SAVE_FAIL,
  PAY_SAVE_REQUEST,
  PAY_SAVE_SUCCESS,
  PAY_UPDATE_FAIL,
  PAY_UPDATE_REQUEST,
  PAY_UPDATE_SUCCESS,
} from "../constants/PaymentConstants";

export const savePayment = (paydetails) => async (dispatch, getState) => {
  console.log("paydetails", paydetails);
  const fd = new FormData();
  fd.append("paymentName", paydetails.paymentName);
  fd.append("mode", paydetails.mode);
  fd.append("AppId", paydetails.AppId);
  fd.append("secKey", paydetails.secKey);
  fd.append("checked", paydetails.checked);
  fd.append("logo", paydetails.logo[0]);

  dispatch({ type: PAY_SAVE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post("/api/paymentDetails/payment", fd, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: PAY_SAVE_SUCCESS, payload: data.category });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PAY_SAVE_FAIL, payload: message });
  }
};

export const PaymentListDetails = () => async (dispatch) => {
  dispatch({ type: PAY_LIST_REQUEST });
  try {
    const { data } = await Axios.get("/api/paymentDetails/paylist");
    dispatch({ type: PAY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PAY_LIST_FAIL, payload: error.message });
  }
};

// export const updatePayment = (payId) => async (dispatch, getState) => {
//   console.log("payId", payId);
//   dispatch({ type: PAY_UPDATE_REQUEST, payload: payId });
//   const {
//     userSignin: { userInfo },
//   } = getState();
//   try {
//     const { data } = await Axios.put(
//       `/api/paymentDetails/updatepay/${payId.id}`,
//       payId,
//       {
//         headers: { Authorization: `Bearer ${userInfo.token}` },
//       },
//     );
//     dispatch({ type: PAY_UPDATE_SUCCESS, payload: data });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({ type: PAY_UPDATE_FAIL, error: message });
//   }
// };
export const updatePayment = (payupdetails) => async (dispatch, getState) => {
  console.log("paydetails", payupdetails);
  const fd = new FormData();

  fd.append("paymentName", payupdetails.paymentName);
  fd.append("mode", payupdetails.mode);
  fd.append("AppId", payupdetails.AppId);
  fd.append("secKey", payupdetails.secKey);
  fd.append("checked", payupdetails.checked);
  fd.append("logo", payupdetails.logo[0]);

  dispatch({ type: PAY_UPDATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/paymentDetails/updatepay/${payupdetails.id}`,
      fd,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );
    dispatch({
      type: PAY_UPDATE_SUCCESS,
      payload: data.updatedetail,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PAY_UPDATE_FAIL, error: message });
  }
};
export const deletePayment = (PayId) => async (dispatch, getState) => {
  dispatch({ type: PAY_DELETE_REQUEST, payload: PayId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/paymentDetails/deletepayment/${PayId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: PAY_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PAY_DELETE_FAIL, payload: message });
  }
};

export const ActivePay = (EnableId) => async (dispatch, getState) => {
  console.log("EnableId", EnableId);
  dispatch({ type: PAY_ENABLE_REQUEST, payload: EnableId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/paymentDetails/activenable/${EnableId.id}`,
      EnableId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );
    dispatch({
      type: PAY_ENABLE_SUCCESS,
      payload: data.Enablemaster,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PAY_ENABLE_FAIL, error: message });
  }
};

export const updatePayActivate =
  (checkboxId) => async (dispatch, getState) => {
    console.log("checkboxId", checkboxId);
    dispatch({ type: PAY_CHECKBOX_REQUEST, payload: checkboxId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/paymentDetails/checkboxitem/${checkboxId.checkboxId}`,
        checkboxId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        },
      );
      dispatch({ type: PAY_CHECKBOX_SUCCESS, payload: data.paymaster });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: PAY_CHECKBOX_FAIL, error: message });
    }
  };

export const deleteMultiplepayments = (PayId) => async (dispatch, getState) => {
  dispatch({ type: PAY_BULKDELETE_REQUEST, payload: PayId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(
      "/api/paymentDetails/deletebulk/" + PayId,
      { data: PayId },
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );

    dispatch({ type: PAY_BULKDELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PAY_BULKDELETE_FAIL, payload: message });
  }
};
