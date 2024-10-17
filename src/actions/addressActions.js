import Axios from "axios";
import {
  // ADDRESS_CREATE_REQUEST,
  // ADDRESS_CREATE_SUCCESS,
  // ADDRESS_CREATE_FAIL,
  ADDRESS_LIST_REQUEST,
  ADDRESS_LIST_SUCCESS,
  ADDRESS_LIST_FAIL,
  CUS_LIST_REQUEST,
  CUS_LIST_SUCCESS,
  CUS_LIST_FAIL,
} from "../constants/addressConstants";

export const listAddresses = () => async (dispatch) => {
  dispatch({ type: ADDRESS_LIST_REQUEST });
  try {
    const { data } = await Axios.get("/api/address", {});
    console(data);
    dispatch({ type: ADDRESS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADDRESS_LIST_FAIL, payload: error.message });
  }
};
export const AddressBillList = () => async (dispatch) => {
  dispatch({ type: CUS_LIST_REQUEST });
  try {
    const { data } = await Axios.get("/api/registerDetails/Address");
    dispatch({ type: CUS_LIST_SUCCESS, payload: data });
    console.log("data", data);
  } catch (error) {
    dispatch({ type: CUS_LIST_FAIL, payload: error.message });
  }
};
