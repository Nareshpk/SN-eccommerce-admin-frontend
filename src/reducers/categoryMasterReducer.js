import {
  CATEGORY_MASTER_CREATE_FAIL,
  CATEGORY_MASTER_CREATE_REQUEST,
  CATEGORY_MASTER_CREATE_RESET,
  CATEGORY_MASTER_CREATE_SUCCESS,
  CATEGORY_MASTER_ALLLIST_FAIL,
  CATEGORY_MASTER_ALLLIST_REQUEST,
  CATEGORY_MASTER_ALLLIST_SUCCESS,
  CATEGORY_MASTER_DEL_REQUEST,
  CATEGORY_MASTER_DEL_SUCCESS,
  CATEGORY_MASTER_DEL_FAIL,
  CATEGORY_MASTER_DEL_RESET,
  CATEGORY_MASTER_UPDATES_REQUEST,
  CATEGORY_MASTER_UPDATES_SUCCESS,
  CATEGORY_MASTER_UPDATES_FAIL,
  CATEGORY_MASTER_UPDATES_RESET,
  CATEGORY_CHILD_ALLLIST_FAIL,
  CATEGORY_CHILD_ALLLIST_REQUEST,
  CATEGORY_CHILD_ALLLIST_SUCCESS,
  CATEGORY_GRAND_CHILD_ALLLIST_REQUEST,
  CATEGORY_GRAND_CHILD_ALLLIST_SUCCESS,
  CATEGORY_GRAND_CHILD_ALLLIST_FAIL,
  CATEGORY_CHILD_NEW_REQUEST,
  CATEGORY_CHILD_NEW_SUCCESS,
  CATEGORY_CHILD_NEW_FAIL,
  CATEGORY_GRAND_CHILD_NEW_REQUEST,
  CATEGORY_GRAND_CHILD_NEW_SUCCESS,
  CATEGORY_GRAND_CHILD_NEW_FAIL,
  CATEGORY_UPDATES_REQUEST,
  CATEGORY_UPDATES_SUCCESS,
  CATEGORY_UPDATES_FAIL,
  CATEGORY_UPDATES_RESET,
  CATEGORY_CHILD_UPDATES_REQUEST,
  CATEGORY_CHILD_UPDATES_SUCCESS,
  CATEGORY_CHILD_UPDATES_FAIL,
  CATEGORY_CHILD_UPDATES_RESET,
  CATEGORY_GRAND_CHILD_UPDATES_REQUEST,
  CATEGORY_GRAND_CHILD_UPDATES_SUCCESS,
  CATEGORY_GRAND_CHILD_UPDATES_FAIL,
  CATEGORY_GRAND_CHILD_UPDATES_RESET,
  PARENT_ENABLE_UPDATE_REQUEST,
  PARENT_ENABLE_UPDATE_SUCCESS,
  PARENT_ENABLE_UPDATE_FAIL,
  PARENT_ENABLE_UPDATE_RESET,
  CHILD_ENABLE_UPDATE_REQUEST,
  CHILD_ENABLE_UPDATE_SUCCESS,
  CHILD_ENABLE_UPDATE_FAIL,
  CHILD_ENABLE_UPDATE_RESET,
  GRAND_CHILD_ENABLE_UPDATE_REQUEST,
  GRAND_CHILD_ENABLE_UPDATE_SUCCESS,
  GRAND_CHILD_ENABLE_UPDATE_FAIL,
  GRAND_CHILD_ENABLE_UPDATE_RESET,
  GRAND_CHILD_MULTIPLE_DELETE_RESET,
  GRAND_CHILD_MULTIPLE_DELETE_FAIL,
  GRAND_CHILD_MULTIPLE_DELETE_SUCCESS,
  GRAND_CHILD_MULTIPLE_DELETE_REQUEST,
  CHILD_MULTIPLE_DELETE_RESET,
  CHILD_MULTIPLE_DELETE_FAIL,
  CHILD_MULTIPLE_DELETE_SUCCESS,
  CHILD_MULTIPLE_DELETE_REQUEST,
  PARENT_MULTIPLE_DELETE_RESET,
  PARENT_MULTIPLE_DELETE_FAIL,
  PARENT_MULTIPLE_DELETE_SUCCESS,
  PARENT_MULTIPLE_DELETE_REQUEST,
  CATEGORY_CHILD_UPDATE_REQUEST,
  CATEGORY_CHILD_UPDATE_SUCCESS,
  CATEGORY_CHILD_UPDATE_FAIL,
  CATEGORY_CHILD_UPDATE_RESET,
  CATEGORY_GRAND_CHILD_UPDATE_REQUEST,
  CATEGORY_GRAND_CHILD_UPDATE_SUCCESS,
  CATEGORY_GRAND_CHILD_UPDATE_FAIL,
  CATEGORY_GRAND_CHILD_UPDATE_RESET,
  CATEGORY_MASTER_ALLLIST_RESET,
} from "../constants/categoryMasterConstant";

export const categmastercreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_MASTER_CREATE_REQUEST:
      return { loading: true };
    case CATEGORY_MASTER_CREATE_SUCCESS:
      return { loading: false, success: true, categMaster: action.payload };
    case CATEGORY_MASTER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_MASTER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const categoryMasterallListReducer = (
  state = { loading: true, categorymasterallList: [] },
  action
) => {
  switch (action.type) {
    case CATEGORY_MASTER_ALLLIST_REQUEST:
      return { loading: true };
    case CATEGORY_MASTER_ALLLIST_SUCCESS:
      return {
        loading: false,
        success: true,
        categorymasterallList: action.payload,
      };
    case CATEGORY_MASTER_ALLLIST_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_MASTER_ALLLIST_RESET:
      return {};
    default:
      return state;
  }
};

export const CategoryMasterDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_MASTER_DEL_REQUEST:
      return { loading: true };
    case CATEGORY_MASTER_DEL_SUCCESS:
      return { loading: false, success: true };
    case CATEGORY_MASTER_DEL_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_MASTER_DEL_RESET:
      return {};
    default:
      return state;
  }
};

export const categorymasterReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_MASTER_UPDATES_REQUEST:
      return { loading: true };
    case CATEGORY_MASTER_UPDATES_SUCCESS:
      return { loading: false, success: true };
    case CATEGORY_MASTER_UPDATES_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_MASTER_UPDATES_RESET:
      return {};
    default:
      return state;
  }
};

export const categorychildReucer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_CHILD_UPDATE_REQUEST:
      return { loading: true };
    case CATEGORY_CHILD_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case CATEGORY_CHILD_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_CHILD_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const categoryGrandchildReucer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_GRAND_CHILD_UPDATE_REQUEST:
      return { loading: true };
    case CATEGORY_GRAND_CHILD_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case CATEGORY_GRAND_CHILD_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_GRAND_CHILD_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
export const categoryChildAllListReducer = (
  state = { loading: true, ChildcategoryList: [] },
  action
) => {
  switch (action.type) {
    case CATEGORY_CHILD_ALLLIST_REQUEST:
      return { loading: true };
    case CATEGORY_CHILD_ALLLIST_SUCCESS:
      return {
        loading: false,
        ChildcategoryList: action.payload,
      };
    case CATEGORY_CHILD_ALLLIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const categoryChilNewListReducer = (
  state = { loading: true, categoryChildList: [] },
  action
) => {
  switch (action.type) {
    case CATEGORY_CHILD_NEW_REQUEST:
      return { loading: true };
    case CATEGORY_CHILD_NEW_SUCCESS:
      return {
        loading: false,
        categoryChildList: action.payload,
      };
    case CATEGORY_CHILD_NEW_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const categorygrandChildListReducer = (
  state = { loading: true, grandChildList: [] },
  action
) => {
  switch (action.type) {
    case CATEGORY_GRAND_CHILD_ALLLIST_REQUEST:
      return { loading: true };
    case CATEGORY_GRAND_CHILD_ALLLIST_SUCCESS:
      return {
        loading: false,
        grandChildList: action.payload,
      };
    case CATEGORY_GRAND_CHILD_ALLLIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const categorygrandChildNewListReducer = (
  state = { loading: true, categorygrandChildList: [] },
  action
) => {
  switch (action.type) {
    case CATEGORY_GRAND_CHILD_NEW_REQUEST:
      return { loading: true };
    case CATEGORY_GRAND_CHILD_NEW_SUCCESS:
      return {
        loading: false,
        categorygrandChildList: action.payload,
      };
    case CATEGORY_GRAND_CHILD_NEW_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const categoryCheckboxReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_UPDATES_REQUEST:
      return { loading: true };
    case CATEGORY_UPDATES_SUCCESS:
      return { loading: false, success: true };
    case CATEGORY_UPDATES_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_UPDATES_RESET:
      return {};
    default:
      return state;
  }
};

export const ChildcategoryCheckboxReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_CHILD_UPDATES_REQUEST:
      return { loading: true };
    case CATEGORY_CHILD_UPDATES_SUCCESS:
      return { loading: false, success: true };
    case CATEGORY_CHILD_UPDATES_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_CHILD_UPDATES_RESET:
      return {};
    default:
      return state;
  }
};

export const grandChildcategoryCheckboxReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_GRAND_CHILD_UPDATES_REQUEST:
      return { loading: true };
    case CATEGORY_GRAND_CHILD_UPDATES_SUCCESS:
      return { loading: false, success: true };
    case CATEGORY_GRAND_CHILD_UPDATES_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_GRAND_CHILD_UPDATES_RESET:
      return {};
    default:
      return state;
  }
};

export const EnableParentReducer = (state = {}, action) => {
  switch (action.type) {
    case PARENT_ENABLE_UPDATE_REQUEST:
      return { loading: true };
    case PARENT_ENABLE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PARENT_ENABLE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PARENT_ENABLE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const EnableChildReducer = (state = {}, action) => {
  switch (action.type) {
    case CHILD_ENABLE_UPDATE_REQUEST:
      return { loading: true };
    case CHILD_ENABLE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case CHILD_ENABLE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CHILD_ENABLE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const EnablegrandChildReducer = (state = {}, action) => {
  switch (action.type) {
    case GRAND_CHILD_ENABLE_UPDATE_REQUEST:
      return { loading: true };
    case GRAND_CHILD_ENABLE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case GRAND_CHILD_ENABLE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case GRAND_CHILD_ENABLE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const parentDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PARENT_MULTIPLE_DELETE_REQUEST:
      return { loading: true };
    case PARENT_MULTIPLE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PARENT_MULTIPLE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case PARENT_MULTIPLE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const childDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CHILD_MULTIPLE_DELETE_REQUEST:
      return { loading: true };
    case CHILD_MULTIPLE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CHILD_MULTIPLE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case CHILD_MULTIPLE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const grandDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case GRAND_CHILD_MULTIPLE_DELETE_REQUEST:
      return { loading: true };
    case GRAND_CHILD_MULTIPLE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case GRAND_CHILD_MULTIPLE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case GRAND_CHILD_MULTIPLE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
