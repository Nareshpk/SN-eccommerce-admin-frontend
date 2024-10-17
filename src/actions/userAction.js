import Axios from "axios";
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
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
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_FAIL,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_SUCCESS,
  USER_TOPSELLERS_LIST_REQUEST,
  USER_TOPSELLERS_LIST_SUCCESS,
  USER_TOPSELLERS_LIST_FAIL,
} from "../constants/userConstants";

export const registers = (regInfo) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });
  try {
    const { data } = await Axios.post("/api/users/register", regInfo);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data ? data : ""));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signin = (signInfo) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST });
  try {
    const { data } = await Axios.post("/api/users/signin", signInfo);
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const accountin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_ACCOUNT_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/users/accountin", {
      email,
      password,
    });
    dispatch({ type: USER_ACCOUNT_SUCCESS, payload: data });
    // dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    // localStorage.setItem('accountInfo', JSON.stringify(data));
    localStorage.setItem("Email", JSON.stringify(email));
  } catch (error) {
    dispatch({
      type: USER_ACCOUNT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const account = (email) => async (dispatch) => {
//   dispatch({ type: USER_ACCOUNT_REQUEST, payload: { email } });
//   try {
//     const { data } = await Axios.post('/api/users/account', {

//       email,

//     });
//     dispatch({ type: USER_ACCOUNT_SUCCESS, payload: data });
//     dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
//     localStorage.setItem('userInfo', JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: USER_ACCOUNT_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

export const accountcreation = (email) => async (dispatch) => {
  dispatch({ type: USER_ACCOUNTCREATION_REQUEST, payload: { email } });
  try {
    const { data } = await Axios.post("/api/users/accountcreation", { email });
    dispatch({ type: USER_ACCOUNTCREATION_SUCCESS, payload: data });
    localStorage.setItem("accountcreationInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_ACCOUNTCREATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const adminin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_ADMININ_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("api/users/adminin", { email, password });
    dispatch({ type: USER_ADMININ_SUCCESS, payload: data });
    localStorage.setItem("adminInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_ADMININ_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("carttshirtItems");
  localStorage.removeItem("shippingAddress");
  dispatch({ type: USER_SIGNOUT });
  document.location.href = "/";
};
export const detailsUser = (userId) => async (dispatch, getState) => {
  dispatch({ type: USER_DETAILS_REQUEST, payload: userId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${userInfo?.token}` },
    });
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_DETAILS_FAIL, payload: message });
  }
};

export const accountout = () => (dispatch) => {
  localStorage.removeItem("accountInfo");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("shippingAddress");
  dispatch({ type: USER_ACCOUNTOUT });
  document.location.href = "/account";
};
export const accountUser = (accountId) => async (dispatch, getState) => {
  dispatch({ type: USER_DETAILS_REQUEST, payload: accountId });
  const {
    userAccount: { accountInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/users/${accountId}`, {
      headers: { Authorization: `Bearer ${accountInfo?.email}` },
    });
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_DETAILS_FAIL, payload: message });
  }
};

export const registerout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("shippingAddress");
  dispatch({ type: USER_REGISTEROUT });
  document.location.href = "/register";
};
export const registerUser = (userId) => async (dispatch, getState) => {
  dispatch({ type: USER_DETAILS_REQUEST, payload: userId });
  const {
    userRegister: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${userInfo?.token}` },
    });
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_DETAILS_FAIL, payload: message });
  }
};

export const adminout = () => (dispatch) => {
  localStorage.removeItem("adminInfo");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("shippingAddress");
  dispatch({ type: USER_ADMINOUT });
  document.location.href = "/adminin";
};
export const detailUser = (adminId) => async (dispatch, getState) => {
  dispatch({ type: USER_DETAILS_REQUEST, payload: adminId });
  const {
    userAdminin: { adminInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/admins/${adminId}`, {
      headers: { Authorization: `Bearer ${adminInfo?.token}` },
    });
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_DETAILS_FAIL, payload: message });
  }
};
export const accountcreationout = () => (dispatch) => {
  localStorage.removeItem("accountcreationInfo");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("shippingAddress");
  dispatch({ type: USER_ACCOUNTCREATIONOUT });
  document.location.href = "accountcreation";
};
export const accountCreation =
  (accountcreationId) => async (dispatch, getState) => {
    dispatch({ type: USER_DETAILS_REQUEST, payload: accountcreationId });
    const {
      useraccountcreation: { accountcreationInfo },
    } = getState();
    try {
      const { data } = await Axios.get(`/api/users/${accountcreationId}`, {
        headers: { Authorization: `Bearer ${accountcreationInfo?.token}` },
      });
      dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: USER_DETAILS_FAIL, payload: message });
    }
  };

export const updateUserProfile = (user) => async (dispatch, getState) => {
  dispatch({ type: USER_UPDATE_PROFILE_REQUEST, payload: user });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/users/profile`, user, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_UPDATE_PROFILE_FAIL, payload: message });
  }
};

export const listUsers = () => async (dispatch, getState) => {
  dispatch({ type: USER_LIST_REQUEST });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get("/api/users", {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_LIST_FAIL, payload: message });
  }
};

export const updateUser = (user) => async (dispatch, getState) => {
  dispatch({ type: USER_UPDATE_PROFILE_REQUEST, payload: user });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/users/${user._id}`, user, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_UPDATE_FAIL, payload: message });
  }
};

export const updateUserStatus = (status) => async (dispatch, getState) => {
  dispatch({ type: USER_UPDATE_PROFILE_REQUEST, payload: status });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/users/status/${userInfo._id}`,
      status,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_UPDATE_FAIL, payload: message });
  }
};

export const deleteUser = (userId) => async (dispatch, getState) => {
  dispatch({ type: USER_DELETE_REQUEST, payload: userId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.delete(`/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: USER_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_DELETE_FAIL, payload: message });
  }
};

export const listTopSellers = () => async (dispatch) => {
  dispatch({ type: USER_TOPSELLERS_LIST_REQUEST });
  try {
    const { data } = await Axios.get("/api/users/top-sellers");
    dispatch({ type: USER_TOPSELLERS_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_TOPSELLERS_LIST_FAIL, payload: message });
  }
};
