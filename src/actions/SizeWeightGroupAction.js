import Axios from "axios";
import {
  SIZEWEIGHTGROUP_ALLLIST_FAIL,
  SIZEWEIGHTGROUP_ALLLIST_REQUEST,
  SIZEWEIGHTGROUP_ALLLIST_SUCCESS,
  SIZEWEIGHTGROUP_LIST_FAIL,
  SIZEWEIGHTGROUP_LIST_REQUEST,
  SIZEWEIGHTGROUP_LIST_SUCCESS,
  SIZEWEIGHTGROUP_SAVE_FAIL,
  SIZEWEIGHTGROUP_SAVE_REQUEST,
  SIZEWEIGHTGROUP_SAVE_SUCCESS,
  SIZEWEIGHTGROUP_UPDATE_FAIL,
  SIZEWEIGHTGROUP_UPDATE_REQUEST,
  SIZEWEIGHTGROUP_UPDATE_SUCCESS,
} from "../constants/SizeWeightGroup";
export const saveShipDetails = (Shipdetail) => async (dispatch) => {
  console.log("====================", Shipdetail);
  dispatch({ type: SIZEWEIGHTGROUP_SAVE_REQUEST });
  try {
    const { data } = await Axios.post(
      "/api/sizeweightgroupdata/sizeshiping",
      Shipdetail,
      {},
    );
    dispatch({ type: SIZEWEIGHTGROUP_SAVE_SUCCESS, payload: data.category });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SIZEWEIGHTGROUP_SAVE_FAIL, payload: message });
  }
};

export const ShippingSizeDetails = () => async (dispatch) => {
  dispatch({
    type: SIZEWEIGHTGROUP_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/sizeweightgroupdata/sizeshiplist");
    dispatch({ type: SIZEWEIGHTGROUP_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SIZEWEIGHTGROUP_LIST_FAIL, payload: error.message });
  }
};

export const updateShippingSize = (shipId) => async (dispatch, getState) => {
  console.log("shipId", shipId);
  dispatch({ type: SIZEWEIGHTGROUP_UPDATE_REQUEST, payload: shipId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/sizeweightgroupdata/updateship/${shipId.id}`,
      shipId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );
    dispatch({ type: SIZEWEIGHTGROUP_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SIZEWEIGHTGROUP_UPDATE_FAIL, error: message });
  }
};

export const ShippingSizeAllDetails = () => async (dispatch) => {
  dispatch({
    type: SIZEWEIGHTGROUP_ALLLIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      "/api/sizeweightgroupdata/sizeshipalllist",
    );
    dispatch({ type: SIZEWEIGHTGROUP_ALLLIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SIZEWEIGHTGROUP_ALLLIST_FAIL, payload: error.message });
  }
};
