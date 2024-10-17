import Axios from 'axios';
import {
  COMBO_DELETE_FAIL,
  COMBO_DELETE_REQUEST,
  COMBO_DELETE_SUCCESS,
  COMBO_DETAILS_FAIL,
  COMBO_DETAILS_REQUEST,
  COMBO_DETAILS_SUCCESS,
  COMBO_UPDATE_FAIL,
  COMBO_UPDATE_REQUEST,
  COMBO_UPDATE_SUCCESS,
} from '../constants/ComboConstants';

// export const ComboDetails = (comboDetails) => async (dispatch, getState) => {
//   // console.log("comboDetails", comboDetails);
//   dispatch({ type: COMBO_SAVE_REQUEST });
//   const {
//     userSignin: { userInfo },
//   } = getState();
//   try {
//     const { data } = await Axios.post(
//       "/api/Combinationdetails/combo",
//       comboDetails,
//       {
//         headers: { Authorization: `Bearer ${userInfo.token}` },
//       }
//     );
//     dispatch({
//       type: COMBO_SAVE_SUCCESS,
//       payload: data.category,
//     });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({ type: COMBO_SAVE_FAIL, payload: message });
//   }
// };

export const ComboDetails = (comboeditId) => async (dispatch, getState) => {
  console.log('comboeditId------->', comboeditId);
  dispatch({ type: COMBO_UPDATE_REQUEST, payload: comboeditId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/catProduct/stockDetails/${comboeditId.id}`,
      comboeditId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: COMBO_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: COMBO_UPDATE_FAIL, error: message });
  }
};

export const deleteCombolist =
  (combinationId) => async (dispatch, getState) => {
    // console.log('combinationId',combinationId);
    dispatch({ type: COMBO_DELETE_REQUEST, payload: combinationId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      await Axios.delete(`/api/catProduct/stockDetails/${combinationId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });

      dispatch({ type: COMBO_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: COMBO_DELETE_FAIL, payload: message });
    }
  };

export const CombotaxDetails = () => async (dispatch) => {
  dispatch({
    type: COMBO_DETAILS_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/catpriceDetails/getPricing`);
    dispatch({ type: COMBO_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: COMBO_DETAILS_FAIL, payload: error.mesage });
  }
};
