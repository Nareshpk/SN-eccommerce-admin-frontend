// import Axios from 'axios';

// import {
//     SAREE_CREATE_FAIL,
//     SAREE_CREATE_REQUEST,
//     SAREE_CREATE_SUCCESS,
//     SAREE_DETAILS_FAIL,
//     SAREE_DETAILS_REQUEST,
//     SAREE_DETAILS_SUCCESS,
//     SAREE_LIST_FAIL,
//     SAREE_LIST_REQUEST,
//     SAREE_LIST_SUCCESS,
//     SAREE_UPDATE_REQUEST,
//     SAREE_UPDATE_SUCCESS,
//     SAREE_UPDATE_FAIL,
//     SAREE_DELETE_REQUEST,
//     SAREE_DELETE_FAIL,
//     SAREE_DELETE_SUCCESS,
//     SAREE_CATEGORY_LIST_SUCCESS,
//     SAREE_CATEGORY_LIST_REQUEST,
//     SAREE_CATEGORY_LIST_FAIL,
//     SAREE_REVIEW_CREATE_REQUEST,
//     SAREE_REVIEW_CREATE_SUCCESS,
//     SAREE_REVIEW_CREATE_FAIL,
//   } from '../constants/sareeConstants';


//   export const listsaree =

//   ({
//     pageNumber = '',
//     seller = '',
//     name = '',
//     category = '',
//     order = '',
//     min = 0,
//     max = 0,
//     rating = 0,
//   }) =>
//   async (dispatch) => {
//     dispatch({
//       type:SAREE_LIST_REQUEST,
//     });
//     try {
//       const { data } = await Axios.get(
//         `/api/sarees?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
//       );
//       dispatch({ type:SAREE_LIST_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type:SAREE_LIST_FAIL, payload: error.message });
//     }
//   };

// export const listSareeCategories = () => async (dispatch) => {
//   dispatch({
//     type:SAREE_CATEGORY_LIST_REQUEST,
//   });
//   try {
//     const { data } = await Axios.get(`/api/sarees/categories`);
//     dispatch({ type:SAREE_CATEGORY_LIST_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type:SAREE_CATEGORY_LIST_FAIL, payload: error.message });
//   }
// };

// export const detailsSaree = (sareeId) => async (dispatch) => {
//   dispatch({ type:SAREE_DETAILS_REQUEST, payload:sareeId });
//   try {
//     const { data } = await Axios.get(`/api/sarees/${sareeId}`);
//     dispatch({ type:SAREE_DETAILS_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type:SAREE_DETAILS_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
// export const createSaree = () => async (dispatch, getState) => {
//   dispatch({ type:SAREE_CREATE_REQUEST });
//   const {
//     userSignin: { userInfo },
//   } = getState();
//   try {
//     const { data } = await Axios.post(
//       '/api/sarees',
//       {},
//       {
//         headers: { Authorization: `Bearer ${userInfo.token}` },
//       }
//     );
//     dispatch({
//       type:SAREE_CREATE_SUCCESS,
//       payload: data.saree,
//     });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({ type:SAREE_CREATE_FAIL, payload: message });
//   }
// };
// export const updateSaree = (saree) => async (dispatch, getState) => {
//   dispatch({ type:SAREE_UPDATE_REQUEST, payload:saree });
//   const {
//     userSignin: { userInfo },
//   } = getState();
//   try {
//     const { data } = await Axios.put(`/api/sarees/${saree._id}`,saree, {
//       headers: { Authorization: `Bearer ${userInfo.token}` },
//     });
//     dispatch({ type:SAREE_UPDATE_SUCCESS, payload: data });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({ type:SAREE_UPDATE_FAIL, error: message });
//   }
// };
// export const deleteSaree = (sareeId) => async (dispatch, getState) => {
//   dispatch({ type:SAREE_DELETE_REQUEST, payload:sareeId });
//   const {
//     userSignin: { userInfo },
//   } = getState();
//   try {
//     await Axios.delete(`/api/sarees/${sareeId}`, {
//       headers: { Authorization: `Bearer ${userInfo.token}` },
//     });
//     dispatch({ type:SAREE_DELETE_SUCCESS });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({ type:SAREE_DELETE_FAIL, payload: message });
//   }
// };
// export const createReview =
//   (sareeId, review) => async (dispatch, getState) => {
//     dispatch({ type:SAREE_REVIEW_CREATE_REQUEST });
//     const {
//       userSignin: { userInfo },
//     } = getState();
//     try {
//       const { data } = await Axios.post(
//         `/api/sarees/${sareeId}/reviews`,
//         review,
//         {
//           headers: { Authorization: `Bearer ${userInfo.token}` },
//         }
//       );
//       dispatch({
//         type:SAREE_REVIEW_CREATE_SUCCESS,
//         payload: data.review,
//       });
//     } catch (error) {
//       const message =
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message;
//       dispatch({ type:SAREE_REVIEW_CREATE_FAIL, payload: message });
//     }
//   };



import Axios from 'axios';


import {
  SAREE_CREATE_FAIL,
  SAREE_CREATE_REQUEST,
  SAREE_CREATE_SUCCESS,
  SAREE_DETAILS_FAIL,
  SAREE_DETAILS_REQUEST,
  SAREE_DETAILS_SUCCESS,
  SAREE_LIST_FAIL,
  SAREE_LIST_REQUEST,
  SAREE_LIST_SUCCESS,
  SAREE_UPDATE_REQUEST,
  SAREE_UPDATE_SUCCESS,
  SAREE_UPDATE_FAIL,
  SAREE_DELETE_REQUEST,
  SAREE_DELETE_FAIL,
  SAREE_DELETE_SUCCESS,
  SAREE_CATEGORY_LIST_SUCCESS,
  SAREE_CATEGORY_LIST_REQUEST,
  SAREE_CATEGORY_LIST_FAIL,
  SAREE_REVIEW_CREATE_REQUEST,
  SAREE_REVIEW_CREATE_SUCCESS,
  SAREE_REVIEW_CREATE_FAIL,
} from '../constants/sareeConstants';


export const listSaree =
  ({
    pageNumber = '',
    seller = '',
    name = '',
    category = '',
    order = '',
    min = 0,
    max = 0,
    rating = 0,
  }) =>
    async (dispatch) => {
      dispatch({
        type: SAREE_LIST_REQUEST,
      });
      try {
        const { data } = await Axios.get(
          `/api/sarees?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
        );
        dispatch({ type: SAREE_LIST_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: SAREE_LIST_FAIL, payload: error.message });
      }
    };
export const listSareeCategories = () => async (dispatch) => {
  dispatch({
    type: SAREE_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/sarees/categories`);
    dispatch({ type: SAREE_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SAREE_CATEGORY_LIST_FAIL, payload: error.message });
  }
};
export const detailsSaree = (Saree) => async (dispatch) => {
  dispatch({ type: SAREE_DETAILS_REQUEST, payload: Saree });
  try {
    const { data } = await Axios.get(`/api/saree/${Saree}`);
    dispatch({ type: SAREE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SAREE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createSaree = () => async (dispatch, getState) => {
  dispatch({ type: SAREE_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/sarees',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: SAREE_CREATE_SUCCESS,
      payload: data.Saree,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SAREE_CREATE_FAIL, payload: message });
  }
};
export const updateSaree = (Saree) => async (dispatch, getState) => {
  dispatch({ type: SAREE_UPDATE_REQUEST, payload:{ Saree} });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/saree/${Saree._id}`, Saree, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: SAREE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SAREE_UPDATE_FAIL, error: message });
  }
};
export const deleteSaree = (SareesId) => async (dispatch, getState) => {
  dispatch({ type: SAREE_DELETE_REQUEST, payload: SareesId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/saree/${SareesId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: SAREE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SAREE_DELETE_FAIL, payload: message });
  }
};
export const createReview = (SareeId, review) => async (dispatch, getState) => {
  dispatch({ type: SAREE_REVIEW_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(`/api/saree/${SareeId}, {}`,
      review,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: SAREE_REVIEW_CREATE_SUCCESS,
      payload: data.Saree,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SAREE_REVIEW_CREATE_FAIL, payload: message });
  }
};







