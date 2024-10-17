import Axios from "axios";
import {
  ATTRIBUTE_ACTIVE_UPDATE_FAIL,
  ATTRIBUTE_ACTIVE_UPDATE_REQUEST,
  ATTRIBUTE_ACTIVE_UPDATE_SUCCESS,
  ATTRIBUTE_CREATE_FAIL,
  ATTRIBUTE_CREATE_REQUEST,
  ATTRIBUTE_CREATE_SUCCESS,
  ATTRIBUTE_DELETE_FAIL,
  ATTRIBUTE_DELETE_REQUEST,
  ATTRIBUTE_DELETE_SUCCESS,
  ATTRIBUTE_ENABLE_UPDATE_FAIL,
  ATTRIBUTE_ENABLE_UPDATE_REQUEST,
  ATTRIBUTE_ENABLE_UPDATE_SUCCESS,
  ATTRIBUTE_LIST_FAIL,
  ATTRIBUTE_LIST_REQUEST,
  ATTRIBUTE_LIST_SUCCESS,
  ATTRIBUTE_MULTIPLE_DELETE_FAIL,
  ATTRIBUTE_MULTIPLE_DELETE_REQUEST,
  ATTRIBUTE_MULTIPLE_DELETE_SUCCESS,
  ATTRIBUTE_UPDATE_FAIL,
  ATTRIBUTE_UPDATE_REQUEST,
  ATTRIBUTE_UPDATE_SUCCESS,
  ATTRIBUTE_VALUEALL_LIST_FAIL,
  ATTRIBUTE_VALUEALL_LIST_REQUEST,
  ATTRIBUTE_VALUEALL_LIST_SUCCESS,
  ATTRIBUTE_VALUE_ACTIVE_UPDATE_FAIL,
  ATTRIBUTE_VALUE_ACTIVE_UPDATE_REQUEST,
  ATTRIBUTE_VALUE_ACTIVE_UPDATE_SUCCESS,
  ATTRIBUTE_VALUE_CREATE_FAIL,
  ATTRIBUTE_VALUE_CREATE_REQUEST,
  ATTRIBUTE_VALUE_CREATE_SUCCESS,
  ATTRIBUTE_VALUE_DELETE_FAIL,
  ATTRIBUTE_VALUE_DELETE_REQUEST,
  ATTRIBUTE_VALUE_DELETE_SUCCESS,
  ATTRIBUTE_VALUE_ENABLE_UPDATE_FAIL,
  ATTRIBUTE_VALUE_ENABLE_UPDATE_REQUEST,
  ATTRIBUTE_VALUE_ENABLE_UPDATE_SUCCESS,
  ATTRIBUTE_VALUE_LIST_FAIL,
  ATTRIBUTE_VALUE_LIST_REQUEST,
  ATTRIBUTE_VALUE_LIST_SUCCESS,
  ATTRIBUTE_VALUE_MULTIPLE_DELETE_FAIL,
  ATTRIBUTE_VALUE_MULTIPLE_DELETE_REQUEST,
  ATTRIBUTE_VALUE_MULTIPLE_DELETE_SUCCESS,
  ATTRIBUTE_VALUE_UPDATE_FAIL,
  ATTRIBUTE_VALUE_UPDATE_REQUEST,
  ATTRIBUTE_VALUE_UPDATE_SUCCESS,
  FEATURES_ACTIVE_UPDATE_FAIL,
  FEATURES_ACTIVE_UPDATE_REQUEST,
  FEATURES_ACTIVE_UPDATE_SUCCESS,
  FEATURES_CREATE_FAIL,
  FEATURES_CREATE_REQUEST,
  FEATURES_CREATE_SUCCESS,
  FEATURES_ENABLE_UPDATE_FAIL,
  FEATURES_ENABLE_UPDATE_REQUEST,
  FEATURES_ENABLE_UPDATE_SUCCESS,
  FEATURES_LIST_FAIL,
  FEATURES_LIST_REQUEST,
  FEATURES_LIST_SUCCESS,
  FEATURES_MULTIPLE_DELETE_FAIL,
  FEATURES_MULTIPLE_DELETE_REQUEST,
  FEATURES_MULTIPLE_DELETE_SUCCESS,
  FEATURES_UPDATE_FAIL,
  FEATURES_UPDATE_REQUEST,
  FEATURES_UPDATE_SUCCESS,
  FEATURES_VALUE_ACTIVE_UPDATE_FAIL,
  FEATURES_VALUE_ACTIVE_UPDATE_REQUEST,
  FEATURES_VALUE_ACTIVE_UPDATE_SUCCESS,
  FEATURES_VALUE_CREATE_FAIL,
  FEATURES_VALUE_CREATE_REQUEST,
  FEATURES_VALUE_CREATE_SUCCESS,
  FEATURES_VALUE_ENABLE_UPDATE_FAIL,
  FEATURES_VALUE_ENABLE_UPDATE_REQUEST,
  FEATURES_VALUE_ENABLE_UPDATE_SUCCESS,
  FEATURES_VALUE_LIST_FAIL,
  FEATURES_VALUE_LIST_REQUEST,
  FEATURES_VALUE_LIST_SUCCESS,
  FEATURES_VALUE_MULTIPLE_DELETE_FAIL,
  FEATURES_VALUE_MULTIPLE_DELETE_REQUEST,
  FEATURES_VALUE_MULTIPLE_DELETE_SUCCESS,
  FEATURES_VALUE_UPDATE_FAIL,
  FEATURES_VALUE_UPDATE_REQUEST,
  FEATURES_VALUE_UPDATE_SUCCESS,
} from "../constants/AttributesConstants";

export const AttributeCategory = (Attribute) => async (dispatch, getState) => {
  dispatch({ type: ATTRIBUTE_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post("/api/Attribute", Attribute, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({
      type: ATTRIBUTE_CREATE_SUCCESS,
      payload: data.category,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ATTRIBUTE_CREATE_FAIL, payload: message });
  }
};

export const AttributeMasterListDetails = () => async (dispatch) => {
  dispatch({
    type: ATTRIBUTE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/Attribute/Attributemaster/`);
    dispatch({ type: ATTRIBUTE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ATTRIBUTE_LIST_FAIL, payload: error.message });
  }
};

export const createAttributeVlaue =
  (Attributevalue) => async (dispatch, getState) => {
    console.log("Attributevalue", Attributevalue);
    const fd = new FormData();

    fd.append("image", Attributevalue.imageFile);
    fd.append("value", Attributevalue.value);
    fd.append("color", Attributevalue.color);
    fd.append("attributeVlaue", Attributevalue.attributeVlaue);
    fd.append("prodselect", Attributevalue.prodselect);
    dispatch({ type: ATTRIBUTE_VALUE_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post("/api/AttributeValue", fd, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({
        type: ATTRIBUTE_VALUE_CREATE_SUCCESS,
        payload: data.Attributevalue,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ATTRIBUTE_VALUE_CREATE_FAIL, payload: message });
    }
  };

export const AttributeValueListDetails = () => async (dispatch) => {
  dispatch({
    type: ATTRIBUTE_VALUE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/AttributeValue/Attributevalue/`);
    dispatch({ type: ATTRIBUTE_VALUE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ATTRIBUTE_VALUE_LIST_FAIL, payload: error.message });
  }
};


export const AttributeValueallListDetails = () => async (dispatch) => {
  dispatch({
    type: ATTRIBUTE_VALUEALL_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/AttributeValue/Attributevalueall/`);
    dispatch({ type: ATTRIBUTE_VALUEALL_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ATTRIBUTE_VALUEALL_LIST_FAIL, payload: error.message });
  }
};
// **********************************************************************************************

export const FeaturesCategory = (Features) => async (dispatch, getState) => {
  dispatch({ type: FEATURES_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post("/api/Features", Features, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({
      type: FEATURES_CREATE_SUCCESS,
      payload: data.category,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: FEATURES_CREATE_FAIL, payload: message });
  }
};

export const FeaturesMasterListDetails = () => async (dispatch) => {
  dispatch({
    type: FEATURES_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/Features/Flist/`);
    dispatch({ type: FEATURES_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FEATURES_LIST_FAIL, payload: error.message });
  }
};
// ******************************************************************
export const FeaturesValueCategory =
  (Featuresvalue) => async (dispatch, getState) => {
    dispatch({ type: FEATURES_VALUE_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post("/api/FeaturesValue", Featuresvalue, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({
        type: FEATURES_VALUE_CREATE_SUCCESS,
        payload: data.category,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: FEATURES_VALUE_CREATE_FAIL, payload: message });
    }
  };

export const FeaturesValueListDetails = () => async (dispatch) => {
  dispatch({
    type: FEATURES_VALUE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/FeaturesValue/Fvaluelist/`);
    dispatch({ type: FEATURES_VALUE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FEATURES_VALUE_LIST_FAIL, payload: error.message });
  }
};

// *********************************update Section*******************************************

export const updateAttribute = (attributedit) => async (dispatch, getState) => {
  dispatch({ type: ATTRIBUTE_UPDATE_REQUEST, payload: attributedit });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/Attribute/${attributedit._id}`,
      attributedit,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: ATTRIBUTE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ATTRIBUTE_UPDATE_FAIL, error: message });
  }
};

export const updateAttributeValue =
  (attributeditvalue) => async (dispatch, getState) => {
    console.log("updateAttributeValue", updateAttributeValue);
    const fd = new FormData();

    fd.append("image", attributeditvalue.imageFile);
    fd.append("value", attributeditvalue.value);
    fd.append("color", attributeditvalue.color);
    fd.append("attributeVlaue", attributeditvalue.attributeVlaue);
    fd.append("prodselect", attributeditvalue.prodselect);
    dispatch({
      type: ATTRIBUTE_VALUE_UPDATE_REQUEST,
      payload: attributeditvalue,
    });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/AttributeValue/update/${attributeditvalue._id}`,
        fd,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: ATTRIBUTE_VALUE_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ATTRIBUTE_VALUE_UPDATE_FAIL, error: message });
    }
  };
// *********************************FEATURES Section**************************

export const updatefeature = (featureedit) => async (dispatch, getState) => {
  dispatch({ type: FEATURES_UPDATE_REQUEST, payload: featureedit });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/Features/${featureedit._id}`,
      featureedit,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: FEATURES_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: FEATURES_UPDATE_FAIL, error: message });
  }
};

export const updatefeatureValue =
  (featureeditvalue) => async (dispatch, getState) => {
    dispatch({
      type: FEATURES_VALUE_UPDATE_REQUEST,
      payload: featureeditvalue,
    });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/FeaturesValue/${featureeditvalue._id}`,
        featureeditvalue,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: FEATURES_VALUE_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: FEATURES_VALUE_UPDATE_FAIL, error: message });
    }
  };

// **********************Attribute*****************************

export const deleteAttribute = (productId) => async (dispatch, getState) => {
  // console.log("productId=====>", productId)
  dispatch({ type: ATTRIBUTE_DELETE_REQUEST, payload: productId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/Attribute/${productId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });

    dispatch({ type: ATTRIBUTE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ATTRIBUTE_DELETE_FAIL, payload: message });
  }
};


export const deleteAttributevalue =
  (productId) => async (dispatch, getState) => {
    dispatch({ type: ATTRIBUTE_VALUE_DELETE_REQUEST, payload: productId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      await Axios.delete(`/api/AttributeValue/${productId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });

      dispatch({ type: ATTRIBUTE_VALUE_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ATTRIBUTE_VALUE_DELETE_FAIL, payload: message });
    }
  };

// *********************************FEATURES Section**************************
export const deletefeature = (featureId) => async (dispatch, getState) => {
  dispatch({ type: ATTRIBUTE_DELETE_REQUEST, payload: featureId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/api/Features/${featureId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });

    dispatch({ type: ATTRIBUTE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ATTRIBUTE_DELETE_FAIL, payload: message });
  }
};

export const deletefeaturevalue =
  (featurevalueId) => async (dispatch, getState) => {
    dispatch({ type: ATTRIBUTE_VALUE_DELETE_REQUEST, payload: featurevalueId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      await Axios.delete(`/api/FeaturesValue/${featurevalueId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });

      dispatch({ type: ATTRIBUTE_VALUE_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ATTRIBUTE_VALUE_DELETE_FAIL, payload: message });
    }
  };
// *****************************************************************

export const updateAttactive = (attId) => async (dispatch, getState) => {
  dispatch({ type: ATTRIBUTE_ACTIVE_UPDATE_REQUEST, payload: attId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/Attribute/attactive/${attId.checkboxId}`,
      attId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: ATTRIBUTE_ACTIVE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ATTRIBUTE_ACTIVE_UPDATE_FAIL, error: message });
  }
};

export const updateValueactive = (valueId) => async (dispatch, getState) => {
  dispatch({ type: ATTRIBUTE_VALUE_ACTIVE_UPDATE_REQUEST, payload: valueId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/AttributeValue/attvalueactive/${valueId.checkboxId}`,
      valueId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: ATTRIBUTE_VALUE_ACTIVE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ATTRIBUTE_VALUE_ACTIVE_UPDATE_FAIL, error: message });
  }
};

export const updateFeaturactive = (featureId) => async (dispatch, getState) => {
  dispatch({ type: FEATURES_ACTIVE_UPDATE_REQUEST, payload: featureId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/Features/featureactive/${featureId.checkboxId}`,
      featureId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: FEATURES_ACTIVE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: FEATURES_ACTIVE_UPDATE_FAIL, error: message });
  }
};

export const updateFeatureValueactive =
  (featurevalueId) => async (dispatch, getState) => {
    dispatch({
      type: FEATURES_VALUE_ACTIVE_UPDATE_REQUEST,
      payload: featurevalueId,
    });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/FeaturesValue/fvaluective/${featurevalueId.checkboxId}`,
        featurevalueId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: FEATURES_VALUE_ACTIVE_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: FEATURES_VALUE_ACTIVE_UPDATE_FAIL, error: message });
    }
  };

// *****************************************************************
export const updateAttEnable = (AttId) => async (dispatch, getState) => {
  dispatch({ type: ATTRIBUTE_ENABLE_UPDATE_REQUEST, payload: AttId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/Attribute/attEnable/${AttId.id}`,
      AttId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: ATTRIBUTE_ENABLE_UPDATE_SUCCESS,
      payload: data.Attmaster,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ATTRIBUTE_ENABLE_UPDATE_FAIL, error: message });
  }
};

export const updateAttvalueEnable =
  (attvalueId) => async (dispatch, getState) => {
    dispatch({
      type: ATTRIBUTE_VALUE_ENABLE_UPDATE_REQUEST,
      payload: attvalueId,
    });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/AttributeValue/attvalueupdate/${attvalueId.id}`,
        attvalueId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: ATTRIBUTE_VALUE_ENABLE_UPDATE_SUCCESS,
        payload: data.Attmaster,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ATTRIBUTE_VALUE_ENABLE_UPDATE_FAIL, error: message });
    }
  };

export const updatefeatureEnable =
  (featureId) => async (dispatch, getState) => {
    dispatch({ type: FEATURES_ENABLE_UPDATE_REQUEST, payload: featureId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/Features/featureEnable/${featureId.id}`,
        featureId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: FEATURES_ENABLE_UPDATE_SUCCESS,
        payload: data.Attmaster,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: FEATURES_ENABLE_UPDATE_FAIL, error: message });
    }
  };

export const updateFvalueEnable = (FvalueId) => async (dispatch, getState) => {
  dispatch({ type: FEATURES_VALUE_ENABLE_UPDATE_REQUEST, payload: FvalueId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/FeaturesValue/fvalueEnable/${FvalueId.id}`,
      FvalueId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: FEATURES_VALUE_ENABLE_UPDATE_SUCCESS,
      payload: data.Attmaster,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: FEATURES_VALUE_ENABLE_UPDATE_FAIL, error: message });
  }
};

// ******************************Delete Multiple**********************************
export const deleteMultipleattId = (attId) => async (dispatch, getState) => {
  console.log("attId", attId)
  dispatch({ type: ATTRIBUTE_MULTIPLE_DELETE_REQUEST, payload: attId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(
      "/api/Attribute/deletemultiple/" + attId,
      { data: attId },
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );

    dispatch({ type: ATTRIBUTE_MULTIPLE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ATTRIBUTE_MULTIPLE_DELETE_FAIL, payload: message });
  }
};

export const deleteMultipleattvalue = (attId) => async (dispatch, getState) => {
  dispatch({ type: ATTRIBUTE_VALUE_MULTIPLE_DELETE_REQUEST, payload: attId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(
      "/api/AttributeValue/deletemultiple/" + attId,
      { data: attId },
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );

    dispatch({ type: ATTRIBUTE_VALUE_MULTIPLE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ATTRIBUTE_VALUE_MULTIPLE_DELETE_FAIL, payload: message });
  }
};

export const deleteMultiplef = (attId) => async (dispatch, getState) => {
  dispatch({ type: FEATURES_MULTIPLE_DELETE_REQUEST, payload: attId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(
      "/api/Features/deletemultiple/" + attId,
      { data: attId },
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );

    dispatch({ type: FEATURES_MULTIPLE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: FEATURES_MULTIPLE_DELETE_FAIL, payload: message });
  }
};

export const deleteMultiplefvalue = (attId) => async (dispatch, getState) => {
  dispatch({ type: FEATURES_VALUE_MULTIPLE_DELETE_REQUEST, payload: attId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(
      "/api/FeaturesValue/deletemultiple/" + attId,
      { data: attId },
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );

    dispatch({ type: FEATURES_VALUE_MULTIPLE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: FEATURES_VALUE_MULTIPLE_DELETE_FAIL, payload: message });
  }
};
