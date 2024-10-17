import {
  ATTRIBUTE_ACTIVE_UPDATE_FAIL,
  ATTRIBUTE_ACTIVE_UPDATE_REQUEST,
  ATTRIBUTE_ACTIVE_UPDATE_RESET,
  ATTRIBUTE_ACTIVE_UPDATE_SUCCESS,
  ATTRIBUTE_CREATE_FAIL,
  ATTRIBUTE_CREATE_REQUEST,
  ATTRIBUTE_CREATE_RESET,
  ATTRIBUTE_CREATE_SUCCESS,
  ATTRIBUTE_DELETE_FAIL,
  ATTRIBUTE_DELETE_REQUEST,
  ATTRIBUTE_DELETE_RESET,
  ATTRIBUTE_DELETE_SUCCESS,
  ATTRIBUTE_ENABLE_UPDATE_FAIL,
  ATTRIBUTE_ENABLE_UPDATE_REQUEST,
  ATTRIBUTE_ENABLE_UPDATE_RESET,
  ATTRIBUTE_ENABLE_UPDATE_SUCCESS,
  ATTRIBUTE_LIST_FAIL,
  ATTRIBUTE_LIST_REQUEST,
  ATTRIBUTE_LIST_SUCCESS,
  ATTRIBUTE_MULTIPLE_DELETE_FAIL,
  ATTRIBUTE_MULTIPLE_DELETE_REQUEST,
  ATTRIBUTE_MULTIPLE_DELETE_RESET,
  ATTRIBUTE_MULTIPLE_DELETE_SUCCESS,
  ATTRIBUTE_UPDATE_FAIL,
  ATTRIBUTE_UPDATE_REQUEST,
  ATTRIBUTE_UPDATE_RESET,
  ATTRIBUTE_UPDATE_SUCCESS,
  ATTRIBUTE_VALUEALL_LIST_FAIL,
  ATTRIBUTE_VALUEALL_LIST_REQUEST,
  ATTRIBUTE_VALUEALL_LIST_SUCCESS,
  ATTRIBUTE_VALUE_ACTIVE_UPDATE_FAIL,
  ATTRIBUTE_VALUE_ACTIVE_UPDATE_REQUEST,
  ATTRIBUTE_VALUE_ACTIVE_UPDATE_RESET,
  ATTRIBUTE_VALUE_ACTIVE_UPDATE_SUCCESS,
  ATTRIBUTE_VALUE_CREATE_FAIL,
  ATTRIBUTE_VALUE_CREATE_REQUEST,
  ATTRIBUTE_VALUE_CREATE_RESET,
  ATTRIBUTE_VALUE_CREATE_SUCCESS,
  ATTRIBUTE_VALUE_DELETE_FAIL,
  ATTRIBUTE_VALUE_DELETE_REQUEST,
  ATTRIBUTE_VALUE_DELETE_RESET,
  ATTRIBUTE_VALUE_DELETE_SUCCESS,
  ATTRIBUTE_VALUE_ENABLE_UPDATE_FAIL,
  ATTRIBUTE_VALUE_ENABLE_UPDATE_REQUEST,
  ATTRIBUTE_VALUE_ENABLE_UPDATE_RESET,
  ATTRIBUTE_VALUE_ENABLE_UPDATE_SUCCESS,
  ATTRIBUTE_VALUE_LIST_FAIL,
  ATTRIBUTE_VALUE_LIST_REQUEST,
  ATTRIBUTE_VALUE_LIST_SUCCESS,
  ATTRIBUTE_VALUE_MULTIPLE_DELETE_FAIL,
  ATTRIBUTE_VALUE_MULTIPLE_DELETE_REQUEST,
  ATTRIBUTE_VALUE_MULTIPLE_DELETE_RESET,
  ATTRIBUTE_VALUE_MULTIPLE_DELETE_SUCCESS,
  ATTRIBUTE_VALUE_UPDATE_FAIL,
  ATTRIBUTE_VALUE_UPDATE_REQUEST,
  ATTRIBUTE_VALUE_UPDATE_RESET,
  ATTRIBUTE_VALUE_UPDATE_SUCCESS,
  FEATURES_ACTIVE_UPDATE_FAIL,
  FEATURES_ACTIVE_UPDATE_REQUEST,
  FEATURES_ACTIVE_UPDATE_RESET,
  FEATURES_ACTIVE_UPDATE_SUCCESS,
  FEATURES_CREATE_FAIL,
  FEATURES_CREATE_REQUEST,
  FEATURES_CREATE_RESET,
  FEATURES_CREATE_SUCCESS,
  FEATURES_DELETE_FAIL,
  FEATURES_DELETE_REQUEST,
  FEATURES_DELETE_RESET,
  FEATURES_DELETE_SUCCESS,
  FEATURES_ENABLE_UPDATE_FAIL,
  FEATURES_ENABLE_UPDATE_REQUEST,
  FEATURES_ENABLE_UPDATE_RESET,
  FEATURES_ENABLE_UPDATE_SUCCESS,
  FEATURES_LIST_FAIL,
  FEATURES_LIST_REQUEST,
  FEATURES_LIST_SUCCESS,
  FEATURES_MULTIPLE_DELETE_FAIL,
  FEATURES_MULTIPLE_DELETE_REQUEST,
  FEATURES_MULTIPLE_DELETE_RESET,
  FEATURES_MULTIPLE_DELETE_SUCCESS,
  FEATURES_UPDATE_FAIL,
  FEATURES_UPDATE_REQUEST,
  FEATURES_UPDATE_RESET,
  FEATURES_UPDATE_SUCCESS,
  FEATURES_VALUE_ACTIVE_UPDATE_FAIL,
  FEATURES_VALUE_ACTIVE_UPDATE_REQUEST,
  FEATURES_VALUE_ACTIVE_UPDATE_RESET,
  FEATURES_VALUE_ACTIVE_UPDATE_SUCCESS,
  FEATURES_VALUE_CREATE_FAIL,
  FEATURES_VALUE_CREATE_REQUEST,
  FEATURES_VALUE_CREATE_RESET,
  FEATURES_VALUE_CREATE_SUCCESS,
  FEATURES_VALUE_DELETE_FAIL,
  FEATURES_VALUE_DELETE_REQUEST,
  FEATURES_VALUE_DELETE_RESET,
  FEATURES_VALUE_DELETE_SUCCESS,
  FEATURES_VALUE_ENABLE_UPDATE_FAIL,
  FEATURES_VALUE_ENABLE_UPDATE_REQUEST,
  FEATURES_VALUE_ENABLE_UPDATE_RESET,
  FEATURES_VALUE_ENABLE_UPDATE_SUCCESS,
  FEATURES_VALUE_LIST_FAIL,
  FEATURES_VALUE_LIST_REQUEST,
  FEATURES_VALUE_LIST_SUCCESS,
  FEATURES_VALUE_MULTIPLE_DELETE_FAIL,
  FEATURES_VALUE_MULTIPLE_DELETE_REQUEST,
  FEATURES_VALUE_MULTIPLE_DELETE_RESET,
  FEATURES_VALUE_MULTIPLE_DELETE_SUCCESS,
  FEATURES_VALUE_UPDATE_FAIL,
  FEATURES_VALUE_UPDATE_REQUEST,
  FEATURES_VALUE_UPDATE_RESET,
  FEATURES_VALUE_UPDATE_SUCCESS,
} from "../constants/AttributesConstants";


export const AttributeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTRIBUTE_CREATE_REQUEST:
      return { loading: true };
    case ATTRIBUTE_CREATE_SUCCESS:
      return { loading: false, success: true, category: action.payload };
    case ATTRIBUTE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case ATTRIBUTE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const AttributeMasterListReducer = (
  state = { loading: true, attributeMasterdetails: [] },
  action
) => {
  switch (action.type) {
    case ATTRIBUTE_LIST_REQUEST:
      return { loading: true };
    case ATTRIBUTE_LIST_SUCCESS:
      return {
        loading: false,
        attributeMasterdetails: action.payload,
      };
    case ATTRIBUTE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const AttributeValueCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTRIBUTE_VALUE_CREATE_REQUEST:
      return { loading: true };
    case ATTRIBUTE_VALUE_CREATE_SUCCESS:
      return { loading: false, success: true, category: action.payload };
    case ATTRIBUTE_VALUE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case ATTRIBUTE_VALUE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const AttributeValueListReducer = (
  state = { loading: true, attributeValuedetails: [] },
  action
) => {
  switch (action.type) {
    case ATTRIBUTE_VALUE_LIST_REQUEST:
      return { loading: true };
    case ATTRIBUTE_VALUE_LIST_SUCCESS:
      return {
        loading: false,
        attributeValuedetails: action.payload,
      };
    case ATTRIBUTE_VALUE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const AttributeValueallListReducer = (
  state = { loading: true, attributeValuedetailsall: [] },
  action
) => {
  switch (action.type) {
    case ATTRIBUTE_VALUEALL_LIST_REQUEST:
      return { loading: true };
    case ATTRIBUTE_VALUEALL_LIST_SUCCESS:
      return {
        loading: false,
        attributeValuedetailsall: action.payload,
      };
    case ATTRIBUTE_VALUEALL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// *************************************************************************
export const FeaturesCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case FEATURES_CREATE_REQUEST:
      return { loading: true };
    case FEATURES_CREATE_SUCCESS:
      return { loading: false, success: true, category: action.payload };
    case FEATURES_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case FEATURES_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const FeaturesListReducer = (
  state = { loading: true, Featuresdetails: [] },
  action
) => {
  switch (action.type) {
    case FEATURES_LIST_REQUEST:
      return { loading: true };
    case FEATURES_LIST_SUCCESS:
      return {
        loading: false,
        Featuresdetails: action.payload,
      };
    case FEATURES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
// *******************************************************************

export const FeaturesValueCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case FEATURES_VALUE_CREATE_REQUEST:
      return { loading: true };
    case FEATURES_VALUE_CREATE_SUCCESS:
      return { loading: false, success: true, category: action.payload };
    case FEATURES_VALUE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case FEATURES_VALUE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const FeaturesValueListReducer = (
  state = { loading: true, Featuresvaluedetails: [] },
  action
) => {
  switch (action.type) {
    case FEATURES_VALUE_LIST_REQUEST:
      return { loading: true };
    case FEATURES_VALUE_LIST_SUCCESS:
      return {
        loading: false,
        Featuresvaluedetails: action.payload,
      };
    case FEATURES_VALUE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// *********************update section*******************
export const attributeUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTRIBUTE_UPDATE_REQUEST:
      return { loading: true };
    case ATTRIBUTE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case ATTRIBUTE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ATTRIBUTE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};


export const attributeActiveReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTRIBUTE_ACTIVE_UPDATE_REQUEST:
      return { loading: true };
    case ATTRIBUTE_ACTIVE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case ATTRIBUTE_ACTIVE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ATTRIBUTE_ACTIVE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const attributeValueUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTRIBUTE_VALUE_UPDATE_REQUEST:
      return { loading: true };
    case ATTRIBUTE_VALUE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case ATTRIBUTE_VALUE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ATTRIBUTE_VALUE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const attvalueActiveReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTRIBUTE_VALUE_ACTIVE_UPDATE_REQUEST:
      return { loading: true };
    case ATTRIBUTE_VALUE_ACTIVE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case ATTRIBUTE_VALUE_ACTIVE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ATTRIBUTE_VALUE_ACTIVE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

// ************************Feature section****************************
export const feautureUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case FEATURES_UPDATE_REQUEST:
      return { loading: true };
    case FEATURES_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case FEATURES_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case FEATURES_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};


export const feautureValueUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case FEATURES_VALUE_UPDATE_REQUEST:
      return { loading: true };
    case FEATURES_VALUE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case FEATURES_VALUE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case FEATURES_VALUE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};


export const featureActiveReducer = (state = {}, action) => {
  switch (action.type) {
    case FEATURES_ACTIVE_UPDATE_REQUEST:
      return { loading: true };
    case FEATURES_ACTIVE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case FEATURES_ACTIVE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case FEATURES_ACTIVE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const featurevalueActiveReducer = (state = {}, action) => {
  switch (action.type) {
    case FEATURES_VALUE_ACTIVE_UPDATE_REQUEST:
      return { loading: true };
    case FEATURES_VALUE_ACTIVE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case FEATURES_VALUE_ACTIVE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case FEATURES_VALUE_ACTIVE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};


// ********************Delete section************************
export const attributeDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTRIBUTE_DELETE_REQUEST:
      return { loading: true };
    case ATTRIBUTE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ATTRIBUTE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case ATTRIBUTE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const attributeValueDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTRIBUTE_VALUE_DELETE_REQUEST:
      return { loading: true };
    case ATTRIBUTE_VALUE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ATTRIBUTE_VALUE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case ATTRIBUTE_VALUE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};


// ************************Feature section****************************
export const featureDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case FEATURES_DELETE_REQUEST:
      return { loading: true };
    case FEATURES_DELETE_SUCCESS:
      return { loading: false, success: true };
    case FEATURES_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case FEATURES_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const featureValueDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case FEATURES_VALUE_DELETE_REQUEST:
      return { loading: true };
    case FEATURES_VALUE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case FEATURES_VALUE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case FEATURES_VALUE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

// *************************Enable disable************************************
export const AttEnableUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTRIBUTE_ENABLE_UPDATE_REQUEST:
      return { loading: true };
    case ATTRIBUTE_ENABLE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case ATTRIBUTE_ENABLE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ATTRIBUTE_ENABLE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};


export const AttValueEnableUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTRIBUTE_VALUE_ENABLE_UPDATE_REQUEST:
      return { loading: true };
    case ATTRIBUTE_VALUE_ENABLE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case ATTRIBUTE_VALUE_ENABLE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ATTRIBUTE_VALUE_ENABLE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const featureEnableUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case FEATURES_ENABLE_UPDATE_REQUEST:
      return { loading: true };
    case FEATURES_ENABLE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case FEATURES_ENABLE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case FEATURES_ENABLE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const featurevalueEnableUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case FEATURES_VALUE_ENABLE_UPDATE_REQUEST:
      return { loading: true };
    case FEATURES_VALUE_ENABLE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case FEATURES_VALUE_ENABLE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case FEATURES_VALUE_ENABLE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

// ***********************************Multiple DElete Section*********************************************
export const AttributemultipleDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTRIBUTE_MULTIPLE_DELETE_REQUEST:
      return { loading: true };
    case ATTRIBUTE_MULTIPLE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ATTRIBUTE_MULTIPLE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case ATTRIBUTE_MULTIPLE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};


export const AttValueDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTRIBUTE_VALUE_MULTIPLE_DELETE_REQUEST:
      return { loading: true };
    case ATTRIBUTE_VALUE_MULTIPLE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ATTRIBUTE_VALUE_MULTIPLE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case ATTRIBUTE_VALUE_MULTIPLE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const FeaturemutiDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case FEATURES_MULTIPLE_DELETE_REQUEST:
      return { loading: true };
    case FEATURES_MULTIPLE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case FEATURES_MULTIPLE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case FEATURES_MULTIPLE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const FvalueDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case FEATURES_VALUE_MULTIPLE_DELETE_REQUEST:
      return { loading: true };
    case FEATURES_VALUE_MULTIPLE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case FEATURES_VALUE_MULTIPLE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case FEATURES_VALUE_MULTIPLE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
