import Axios from '../../node_modules/axios/index';
import {
  TAXES_CREATE_REQUEST,
  TAXES_CREATE_RESET,
  TAXES_CREATE_SUCCESS,
  TAXES_ENABLE_FAIL,
  TAXES_ENABLE_REQUEST,
  TAXES_ENABLE_SUCCESS,
  TAXES_LIST_FAIL,
  TAXES_LIST_REQUEST,
  TAXES_LIST_SUCCESS,
  TAXES_MASTER_DEL_FAIL,
  TAXES_MASTER_DEL_REQUEST,
  TAXES_MASTER_DEL_SUCCESS,
  TAXES_MASTER_UPDATE_FAIL,
  TAXES_MASTER_UPDATE_REQUEST,
  TAXES_MASTER_UPDATE_SUCCESS,
  TAXES_MULTIPLE_DELETE_FAIL,
  TAXES_MULTIPLE_DELETE_REQUEST,
  TAXES_MULTIPLE_DELETE_SUCCESS,
  TAXES_UPDATES_FAIL,
  TAXES_UPDATES_REQUEST,
  TAXES_UPDATES_SUCCESS,
} from '../constants/taxesConstants';

export const taxesDetails = (taxesDetails) => async (dispatch, getState) => {
  console.log('taxesDetails', taxesDetails);
  dispatch({ type: TAXES_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post('/api/taxesDetails/taxes', taxesDetails, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({
      type: TAXES_CREATE_SUCCESS,
      payload: data.category,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: TAXES_CREATE_RESET, payload: message });
  }
};

export const TaxesList = () => async (dispatch) => {
  dispatch({
    type: TAXES_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/taxesDetails`);
    console.log('data-------->', data);
    dispatch({ type: TAXES_LIST_SUCCESS, payload: data.taxes });
  } catch (error) {
    dispatch({ type: TAXES_LIST_FAIL, payload: error.message });
  }
};

export const deleteTaxesMasterlist = (id) => async (dispatch, getState) => {
  dispatch({ type: TAXES_MASTER_DEL_REQUEST, payload: id });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/taxesDetails/${id}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: TAXES_MASTER_DEL_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: TAXES_MASTER_DEL_FAIL, payload: message });
  }
};

export const updateTaxes = (taxeditId) => async (dispatch, getState) => {
  console.log(taxeditId);
  dispatch({ type: TAXES_MASTER_UPDATE_REQUEST, payload: taxeditId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/taxesDetails/updateTaxes/${taxeditId.id}`,
      taxeditId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: TAXES_MASTER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: TAXES_MASTER_UPDATE_FAIL, error: message });
  }
};

export const updatetaxActivate = (checkboxId) => async (dispatch, getState) => {
  dispatch({ type: TAXES_UPDATES_REQUEST, payload: checkboxId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/taxesDetails/checkboxitem/${checkboxId.checkboxId}`,
      checkboxId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: TAXES_UPDATES_SUCCESS, payload: data.taxmaster });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: TAXES_UPDATES_FAIL, error: message });
  }
};

export const deleteMultipletax = (empId) => async (dispatch, getState) => {
  dispatch({ type: TAXES_MULTIPLE_DELETE_REQUEST, payload: empId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(
      '/api/taxesDetails/deletemultiple/' + empId,
      { data: empId },
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );

    dispatch({ type: TAXES_MULTIPLE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: TAXES_MULTIPLE_DELETE_FAIL, payload: message });
  }
};

export const updateTaxEnable = (taxId) => async (dispatch, getState) => {
  console.log('taxId', taxId);
  dispatch({ type: TAXES_ENABLE_REQUEST, payload: taxId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/taxesDetails/enable/${taxId.id}`,
      taxId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: TAXES_ENABLE_SUCCESS, payload: data.TaxEnable });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: TAXES_ENABLE_FAIL, error: message });
  }
};
