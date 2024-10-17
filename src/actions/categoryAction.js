import { CATEGORY_CHILD_CREATE_FAIL, CATEGORY_CHILD_CREATE_REQUEST, CATEGORY_CHILD_CREATE_SUCCESS, CATEGORY_CHILD_LIST_FAIL, CATEGORY_CHILD_LIST_REQUEST, CATEGORY_CHILD_LIST_SUCCESS, CATEGORY_CREATE_FAIL, CATEGORY_CREATE_REQUEST, CATEGORY_CREATE_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_MASTER_CREATE_FAIL, CATEGORY_MASTER_CREATE_REQUEST, CATEGORY_MASTER_CREATE_SUCCESS, CATEGORY_MASTER_LIST_FAIL, CATEGORY_MASTER_LIST_REQUEST, CATEGORY_MASTER_LIST_SUCCESS, CATEGORY_SUB_CREATE_FAIL, CATEGORY_SUB_CREATE_REQUEST, CATEGORY_SUB_CREATE_SUCCESS, CATEGORY_SUB_LIST_FAIL, CATEGORY_SUB_LIST_REQUEST, CATEGORY_SUB_LIST_SUCCESS } from "../constants/categoryConstants";
import Axios from 'axios';


export const createCategory = (category) => async (dispatch, getState) => {
    dispatch({ type: CATEGORY_CREATE_REQUEST });
    const {userSignin: { userInfo },} = getState();
    try {
      const { data } = await Axios.post('/api/category',category,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: CATEGORY_CREATE_SUCCESS,
        payload: data.category,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CATEGORY_CREATE_FAIL, payload: message });
    }
  };

  export const categoryListDetails = () => async (dispatch) => {
    dispatch({
      type: CATEGORY_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(`/api/category/List/`);
      dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
     
    } catch (error) {
      dispatch({ type: CATEGORY_LIST_FAIL, payload: error.message });
    }
  };


  // ************************************CATEGORY MASTER******************************************************************
  export const createCategorymaster = (category) => async (dispatch, getState) => {
      dispatch({ type: CATEGORY_MASTER_CREATE_REQUEST });
      const {userSignin: { userInfo },} = getState();
      try {
        const { data } = await Axios.post('/api/categoryMain',category,
          {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          }
        );
        dispatch({
          type: CATEGORY_MASTER_CREATE_SUCCESS,
          payload: data.category,
        });
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: CATEGORY_MASTER_CREATE_FAIL, payload: message });
      }
    };


    export const categoryMasterListDetails = () => async (dispatch) => {
      dispatch({
        type: CATEGORY_MASTER_LIST_REQUEST,
      });
      try {
        const { data } = await Axios.get(`/api/categoryMain/categorymaster/`);
        dispatch({ type: CATEGORY_MASTER_LIST_SUCCESS, payload: data });
       
      } catch (error) {
        dispatch({ type: CATEGORY_MASTER_LIST_FAIL, payload: error.message });
      }
    };


    // Sub Category Actions Start******************************************

    export const createSubCategory = (category) => async (dispatch, getState) => {
      dispatch({ type: CATEGORY_SUB_CREATE_REQUEST });
      const {userSignin: { userInfo },} = getState();
      try {
        const { data } = await Axios.post('/api/subCategory',category,
          {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          }
        );
        dispatch({
          type: CATEGORY_SUB_CREATE_SUCCESS,
          payload: data.category,
        });
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: CATEGORY_SUB_CREATE_FAIL, payload: message });
      }
    };


    export const subCategoryListDetails = () => async (dispatch) => {
      dispatch({
        type: CATEGORY_SUB_LIST_REQUEST,
      });
      try {
        const { data } = await Axios.get(`/api/subCategory/categorysub/`);
        dispatch({ type: CATEGORY_SUB_LIST_SUCCESS, payload: data });
       
      } catch (error) {
        dispatch({ type: CATEGORY_SUB_LIST_FAIL, payload: error.message });
      }
    };


    // *******************Child catergry********************

    export const createChildCategory = (category) => async (dispatch, getState) => {
      dispatch({ type: CATEGORY_CHILD_CREATE_REQUEST });
      const {userSignin: { userInfo },} = getState();
      try {
        const { data } = await Axios.post('/api/childCategory',category,
          {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          }
        );
        dispatch({
          type: CATEGORY_CHILD_CREATE_SUCCESS,
          payload: data.category,
        });
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: CATEGORY_CHILD_CREATE_FAIL, payload: message });
      }
    };


    export const CategoryChildListDetails = () => async (dispatch) => {
      dispatch({
        type: CATEGORY_CHILD_LIST_REQUEST,
      });
      try {
        const { data } = await Axios.get(`/api/childCategory/categorysub/`);
        dispatch({ type: CATEGORY_CHILD_LIST_SUCCESS, payload: data });
       
      } catch (error) {
        dispatch({ type: CATEGORY_CHILD_LIST_FAIL, payload: error.message });
      }
    };