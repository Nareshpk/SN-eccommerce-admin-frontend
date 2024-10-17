const { CATEGORY_CREATE_REQUEST, CATEGORY_CREATE_SUCCESS, CATEGORY_CREATE_FAIL, CATEGORY_CREATE_RESET, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_MASTER_LIST_FAIL, CATEGORY_MASTER_LIST_SUCCESS, CATEGORY_MASTER_LIST_REQUEST, CATEGORY_MASTER_CREATE_REQUEST, CATEGORY_MASTER_CREATE_SUCCESS, CATEGORY_MASTER_CREATE_FAIL, CATEGORY_MASTER_CREATE_RESET, CATEGORY_SUB_LIST_FAIL, CATEGORY_SUB_LIST_SUCCESS, CATEGORY_SUB_LIST_REQUEST, CATEGORY_SUB_CREATE_RESET, CATEGORY_SUB_CREATE_FAIL, CATEGORY_SUB_CREATE_SUCCESS, CATEGORY_SUB_CREATE_REQUEST, CATEGORY_CHILD_CREATE_REQUEST, CATEGORY_CHILD_CREATE_SUCCESS, CATEGORY_CHILD_LIST_REQUEST, CATEGORY_CHILD_LIST_SUCCESS, CATEGORY_CHILD_CREATE_FAIL, CATEGORY_CHILD_CREATE_RESET, CATEGORY_CHILD_LIST_FAIL } = require ("../constants/categoryConstants");

export const categoryCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CATEGORY_CREATE_REQUEST:
        return { loading: true };
      case CATEGORY_CREATE_SUCCESS:
        return { loading: false, success: true, category: action.payload };
      case CATEGORY_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case CATEGORY_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };


  export const categoryListReducer = (
    state = { loading: true, categorydetails: [] },action) => {
    switch (action.type) {
      case CATEGORY_LIST_REQUEST:
        return { loading: true };
      case CATEGORY_LIST_SUCCESS:
        return {
          loading: false,
          categorydetails: action.payload,
         
        };
      case CATEGORY_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  // *********************************************************************************

  export const categorymasterCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CATEGORY_MASTER_CREATE_REQUEST:
        return { loading: true };
      case CATEGORY_MASTER_CREATE_SUCCESS:
        return { loading: false, success: true, category: action.payload };
      case CATEGORY_MASTER_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case CATEGORY_MASTER_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };

  

  export const categoryMasterListReducer = (
    state = { loading: true, categoryMasterdetails: [] },action) => {
    switch (action.type) {
      case CATEGORY_MASTER_LIST_REQUEST:
        return { loading: true };
      case CATEGORY_MASTER_LIST_SUCCESS:
        return {
          loading: false,
          categoryMasterdetails: action.payload,
         
        };
      case CATEGORY_MASTER_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
// ********************************************************************************
  export const subcategoryCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CATEGORY_SUB_CREATE_REQUEST:
        return { loading: true };
      case CATEGORY_SUB_CREATE_SUCCESS:
        return { loading: false, success: true, category: action.payload };
      case CATEGORY_SUB_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case CATEGORY_SUB_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };

 


  export const subCategoryListReducer = (
    state = { loading: true, subCategory: [] },action) => {
    switch (action.type) {
      case CATEGORY_SUB_LIST_REQUEST:
        return { loading: true };
      case CATEGORY_SUB_LIST_SUCCESS:
        return {
          loading: false,
          subCategory: action.payload,
         
        };
      case CATEGORY_SUB_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  // *************************************************************

  export const childcategoryCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CATEGORY_CHILD_CREATE_REQUEST:
        return { loading: true };
      case CATEGORY_CHILD_CREATE_SUCCESS:
        return { loading: false, success: true, category: action.payload };
      case CATEGORY_CHILD_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case CATEGORY_CHILD_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };

 


  export const ChildCategoryListReducer = (
    state = { loading: true, childCategory: [] },action) => {
    switch (action.type) {
      case CATEGORY_CHILD_LIST_REQUEST:
        return { loading: true };
      case CATEGORY_CHILD_LIST_SUCCESS:
        return {
          loading: false,
          childCategory: action.payload,
         
        };
      case CATEGORY_CHILD_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };