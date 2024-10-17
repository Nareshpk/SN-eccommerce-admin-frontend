// const {
//     SAREE_LIST_REQUEST,
//     SAREE_LIST_SUCCESS,
//     SAREE_LIST_FAIL,
//     SAREE_DETAILS_REQUEST,
//     SAREE_DETAILS_SUCCESS,
//     SAREE_DETAILS_FAIL,
//     SAREE_CREATE_REQUEST,
//     SAREE_CREATE_SUCCESS,
//     SAREE_CREATE_FAIL,
//     SAREE_CREATE_RESET,
//     SAREE_UPDATE_REQUEST,
//     SAREE_UPDATE_SUCCESS,
//     SAREE_UPDATE_FAIL,
//     SAREE_UPDATE_RESET,
//     SAREE_DELETE_REQUEST,
//     SAREE_DELETE_SUCCESS,
//     SAREE_DELETE_FAIL,
//     SAREE_DELETE_RESET,
//     SAREE_CATEGORY_LIST_REQUEST,
//     SAREE_CATEGORY_LIST_SUCCESS,
//     SAREE_CATEGORY_LIST_FAIL,
//     SAREE_REVIEW_CREATE_REQUEST,
//     SAREE_REVIEW_CREATE_SUCCESS,
//     SAREE_REVIEW_CREATE_FAIL,
//     SAREE_REVIEW_CREATE_RESET,
//   } = require("../constants/sareeConstants");
  
//   export const SareeListReducer = (
//     state = { loading: true, products: [] },
//     action
//   ) => {
//     switch (action.type) {
//       case SAREE_LIST_REQUEST:
//         return { loading: true };
//       case SAREE_LIST_SUCCESS:
//         return {
//           loading: false,
//           Saree: action.payload.Saree,
//           pages: action.payload.pages,
//           page: action.payload.page,
//         };
//       case SAREE_LIST_FAIL:
//         return { loading: false, error: action.payload };
//       default:
//         return state;
//     }
//   };
  
//   export const SareeCategoryListReducer = (
//     state = { loading: true, Saree: [] },
//     action
//     ) => {
//       switch (action.type) {
//         case SAREE_CATEGORY_LIST_REQUEST:
//           return { loading: true };
//         case SAREE_CATEGORY_LIST_SUCCESS:
//           return { loading: false, categories: action.payload };
//         case SAREE_CATEGORY_LIST_FAIL:
//           return { loading: false, error: action.payload };
//         default:
//           return state;
//       }
//     };
  
//   export const SareeDetailsReducer = (state = { loading: true }, action) => {
//     switch (action.type) {
//       case SAREE_DETAILS_REQUEST:
//         return { loading: true };
//       case SAREE_DETAILS_SUCCESS:
//         return { loading: false, Saree: action.payload };
//       case SAREE_DETAILS_FAIL:
//         return { loading: false, error: action.payload };
//       default:
//         return state;
//     }
//   };
//   export const SareeCreateReducer = (state = {}, action) => {
//     switch (action.type) {
//       case SAREE_CREATE_REQUEST:
//         return { loading: true };
//       case SAREE_CREATE_SUCCESS:
//         return { loading: false, success: true, Saree: action.payload };
//       case SAREE_CREATE_FAIL:
//         return { loading: false, error: action.payload };
//       case SAREE_CREATE_RESET:
//         return {};
//       default:
//         return state;
//     }
//   };
//   export const SareeUpdateReducer = (state = {}, action) => {
//     switch (action.type) {
//       case SAREE_UPDATE_REQUEST:
//         return { loading: true };
//       case SAREE_UPDATE_SUCCESS:
//         return { loading: false, success: true };
//       case SAREE_UPDATE_FAIL:
//         return { loading: false, error: action.payload };
//       case SAREE_UPDATE_RESET:
//         return {};
//       default:
//         return state;
//     }
//   };
//   export const SareeDeleteReducer = (state = {}, action) => {
//     switch (action.type) {
//       case SAREE_DELETE_REQUEST:
//         return { loading: true };
//       case SAREE_DELETE_SUCCESS:
//         return { loading: false, success: true };
//       case SAREE_DELETE_FAIL:
//         return { loading: false, error: action.payload };
//       case SAREE_DELETE_RESET:
//         return {};
//       default:
//         return state;
//     }
//   };
  
//   export const SareeReviewCreateReducer = (state = {}, action) => {
//     switch (action.type) {
//       case SAREE_REVIEW_CREATE_REQUEST:
//         return { loading: true };
//       case SAREE_REVIEW_CREATE_SUCCESS:
//         return { loading: false, success: true, review: action.payload };
//       case SAREE_REVIEW_CREATE_FAIL:
//         return { loading: false, error: action.payload };
//       case SAREE_REVIEW_CREATE_RESET:
//         return {};
//       default:
//         return state;
//     }
//   };

const {
  SAREE_LIST_REQUEST,
  SAREE_LIST_SUCCESS,
  SAREE_LIST_FAIL,
  SAREE_DETAILS_REQUEST,
  SAREE_DETAILS_SUCCESS,
  SAREE_DETAILS_FAIL,
  SAREE_CREATE_REQUEST,
  SAREE_CREATE_SUCCESS,
  SAREE_CREATE_FAIL,
  SAREE_CREATE_RESET,
  SAREE_UPDATE_REQUEST,
  SAREE_UPDATE_SUCCESS,
  SAREE_UPDATE_FAIL,
  SAREE_UPDATE_RESET,
  SAREE_DELETE_REQUEST,
  SAREE_DELETE_SUCCESS,
  SAREE_DELETE_FAIL,
  SAREE_DELETE_RESET,
  SAREE_CATEGORY_LIST_REQUEST,
  SAREE_CATEGORY_LIST_SUCCESS,
  SAREE_CATEGORY_LIST_FAIL,
  SAREE_REVIEW_CREATE_REQUEST,
  SAREE_REVIEW_CREATE_SUCCESS,
  SAREE_REVIEW_CREATE_FAIL,
  SAREE_REVIEW_CREATE_RESET,
} = require("../constants/sareeConstants");

export const SareeListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case SAREE_LIST_REQUEST:
      return { loading: true };
    case SAREE_LIST_SUCCESS:
      return {
        loading: false,
        Saree: action.payload.Saree,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case SAREE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const SareeCategoryListReducer = (
  state = { loading: true, Saree: [] },
  action
) => {
  switch (action.type) {
    case SAREE_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case SAREE_CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case SAREE_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const SareeDetailsReducer = (state = { loading: true,}, action) => {
  switch (action.type) {
    case SAREE_DETAILS_REQUEST:
      return { loading: true };
    case SAREE_DETAILS_SUCCESS:
      return { loading: false, Saree: action.payload };
    case SAREE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const SareeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SAREE_CREATE_REQUEST:
      return { loading: true };
    case SAREE_CREATE_SUCCESS:
      return { loading: false, success: true, Saree: action.payload };
    case SAREE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case SAREE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
export const SareeUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SAREE_UPDATE_REQUEST:
      return { loading: true };
    case SAREE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case SAREE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case SAREE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
export const SareeDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SAREE_DELETE_REQUEST:
      return { loading: true };
    case SAREE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case SAREE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case SAREE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const SareeReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SAREE_REVIEW_CREATE_REQUEST:
      return { loading: true };
    case SAREE_REVIEW_CREATE_SUCCESS:
      return { loading: false, success: true, review: action.payload };
    case SAREE_REVIEW_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case SAREE_REVIEW_CREATE_RESET:
      return {};
    default:
      return state;
  }
};