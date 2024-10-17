import Axios from 'axios';
import {
  CAT_PRODUCT_ACTIVE_UPDATE_FAIL,
  CAT_PRODUCT_ACTIVE_UPDATE_REQUEST,
  CAT_PRODUCT_ACTIVE_UPDATE_SUCCESS,
  CAT_PRODUCT_DELETE_FAIL,
  CAT_PRODUCT_DELETE_REQUEST,
  CAT_PRODUCT_DELETE_SUCCESS,
  CAT_PRODUCT_DETAILS_FAIL,
  CAT_PRODUCT_DETAILS_REQUEST,
  CAT_PRODUCT_DETAILS_SUCCESS,
  CAT_PRODUCT_FAIL,
  CAT_PRODUCT_REQUEST,
  CAT_PRODUCT_SAVE_FAIL,
  CAT_PRODUCT_SAVE_REQUEST,
  CAT_PRODUCT_SAVE_SUCCESS,
  CAT_PRODUCT_SUCCESS,
  CAT_PRODUCT_UPDATE_FAIL,
  CAT_PRODUCT_UPDATE_REQUEST,
  CAT_PRODUCT_UPDATE_SUCCESS,
  CAT_PRODUCT_VIEW_FAIL,
  CAT_PRODUCT_VIEW_REQUEST,
  CAT_PRODUCT_VIEW_SUCCESS,
  COMBINATION_CHILD_LIST_FAIL,
  COMBINATION_CHILD_LIST_REQUEST,
  COMBINATION_CHILD_LIST_SUCCESS,
  COMBINATION_LIST_FAIL,
  COMBINATION_LIST_REQUEST,
  COMBINATION_LIST_SUCCESS,
  COMBINATION_SAVE_FAIL,
  COMBINATION_SAVE_REQUEST,
  COMBINATION_SAVE_SUCCESS,
  COMBINATION_UPDATE_FAIL,
  COMBINATION_UPDATE_REQUEST,
  COMBINATION_UPDATE_SUCCESS,
  IMAGE_DELETE_FAIL,
  IMAGE_DELETE_REQUEST,
  IMAGE_DELETE_SUCCESS,
  PRODUCT_ENABLE_UPDATE_FAIL,
  PRODUCT_ENABLE_UPDATE_REQUEST,
  PRODUCT_ENABLE_UPDATE_SUCCESS,
  PRODUCT_MULTIPLE_DELETE_FAIL,
  PRODUCT_MULTIPLE_DELETE_REQUEST,
  PRODUCT_MULTIPLE_DELETE_SUCCESS,
  WISHLIST_UPDATE_FAIL,
  WISHLIST_UPDATE_REQUEST,
  WISHLIST_UPDATE_SUCCESS,
} from '../constants/catBrandConstant';

export const saveCatologProduct =
  (catProduct) => async (dispatch, getState) => {
    // console.log('catProduct------save===========>>>>', catProduct);
    dispatch({ type: CAT_PRODUCT_SAVE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post('/api/catProduct', catProduct, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({
        type: CAT_PRODUCT_SAVE_SUCCESS,
        payload: data.product,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CAT_PRODUCT_SAVE_FAIL, payload: message });
    }
  };

export const catProductList = () => async (dispatch) => {
  dispatch({
    type: CAT_PRODUCT_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/catProduct/allcatProduct`);
    dispatch({ type: CAT_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CAT_PRODUCT_FAIL, payload: error.message });
  }
};

export const catProductViewList = () => async (dispatch) => {
  dispatch({
    type: CAT_PRODUCT_VIEW_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/catProduct/viewcatProduct`);
    dispatch({ type: CAT_PRODUCT_VIEW_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CAT_PRODUCT_VIEW_FAIL, payload: error.message });
  }
};

export const updateCatProduct =
  (catProdUpdate) => async (dispatch, getState) => {
    // console.log('catProdUpdate-------------->>>>>', catProdUpdate);
    dispatch({ type: CAT_PRODUCT_UPDATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/catProduct/${catProdUpdate._id}`,
        catProdUpdate,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: CAT_PRODUCT_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CAT_PRODUCT_UPDATE_FAIL, error: message });
    }
  };

export const updateCatWhislist =
  (catProdUpdate) => async (dispatch, getState) => {
    dispatch({ type: WISHLIST_UPDATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/catProduct/wishlist/${catProdUpdate._id}`,
        catProdUpdate,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: WISHLIST_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: WISHLIST_UPDATE_FAIL, error: message });
    }
  };

export const deleteCatalogProd =
  (catProductId) => async (dispatch, getState) => {
    dispatch({ type: CAT_PRODUCT_DELETE_REQUEST, payload: catProductId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      await Axios.delete(`/api/catProduct/${catProductId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });

      dispatch({ type: CAT_PRODUCT_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CAT_PRODUCT_DELETE_FAIL, payload: message });
    }
  };

export const catProdIndividualId = (productId) => async (dispatch) => {
  dispatch({ type: CAT_PRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    const { data } = await Axios.get(`/api/catProduct/${productId}`);
    console.log('data', data);
    dispatch({ type: CAT_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CAT_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ****************************Combination********************************
export const saveCombination =
  (catlogCombination) => async (dispatch, getState) => {
    // console.log('catlogCombination', catlogCombination);
    dispatch({ type: COMBINATION_SAVE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        '/api/catProduct/combination',
        catlogCombination,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      // console.log('data============da', data);
      dispatch({
        type: COMBINATION_SAVE_SUCCESS,
        payload: data.comItem,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: COMBINATION_SAVE_FAIL, payload: message });
    }
  };

export const CombinationListValue = () => async (dispatch) => {
  dispatch({ type: COMBINATION_LIST_REQUEST });
  try {
    const { data } = await Axios.get(`/api/catProduct/combinationitem`);
    dispatch({ type: COMBINATION_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COMBINATION_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const CombinationChildList = () => async (dispatch) => {
  dispatch({ type: COMBINATION_CHILD_LIST_REQUEST });
  try {
    const { data } = await Axios.get(`/api/catProduct/combinationchild`);
    dispatch({ type: COMBINATION_CHILD_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COMBINATION_CHILD_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const updateCatStock = (StockId) => async (dispatch, getState) => {
  // console.log('StockId',StockId);
  dispatch({ type: COMBINATION_UPDATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/catProduct/stockcombination/${StockId.StockId}`,
      StockId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: COMBINATION_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: COMBINATION_UPDATE_FAIL, error: message });
  }
};

export const updateproductactive = (attId) => async (dispatch, getState) => {
  dispatch({ type: CAT_PRODUCT_ACTIVE_UPDATE_REQUEST, payload: attId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/catProduct/attactive/${attId.checkboxId}`,
      attId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: CAT_PRODUCT_ACTIVE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CAT_PRODUCT_ACTIVE_UPDATE_FAIL, error: message });
  }
};

export const updateProductEnable = (EnableId) => async (dispatch, getState) => {
  console.log('EnableId', EnableId);
  dispatch({ type: PRODUCT_ENABLE_UPDATE_REQUEST, payload: EnableId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/catProduct/updateEnables/${EnableId.id}`,
      EnableId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: PRODUCT_ENABLE_UPDATE_SUCCESS, payload: data.Attmaster });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_ENABLE_UPDATE_FAIL, error: message });
  }
};

export const deleteMultipleProduct = (empId) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_MULTIPLE_DELETE_REQUEST, payload: empId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(
      '/api/catProduct/deletemultiple/' + empId,
      { data: empId },
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );

    dispatch({ type: PRODUCT_MULTIPLE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_MULTIPLE_DELETE_FAIL, payload: message });
  }
};


export const deleteImages =
  (empId) => async (dispatch,) => {
    console.log("empId", empId);
    dispatch({ type: IMAGE_DELETE_REQUEST, payload: empId });

    try {
      await Axios.delete(
        "/api/uploads/deleteok/" + empId.porId,
        { data: empId.item },

      );

      dispatch({ type: IMAGE_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: IMAGE_DELETE_FAIL, payload: message });
    }
  };

