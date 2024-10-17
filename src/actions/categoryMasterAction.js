import Axios from "axios";
import {
  CATEGORY_MASTER_CREATE_FAIL,
  CATEGORY_MASTER_CREATE_REQUEST,
  CATEGORY_MASTER_CREATE_SUCCESS,
  CATEGORY_MASTER_ALLLIST_FAIL,
  CATEGORY_MASTER_ALLLIST_REQUEST,
  CATEGORY_MASTER_ALLLIST_SUCCESS,
  CATEGORY_MASTER_DEL_REQUEST,
  CATEGORY_MASTER_DEL_SUCCESS,
  CATEGORY_MASTER_DEL_FAIL,
  CATEGORY_MASTER_UPDATES_REQUEST,
  CATEGORY_MASTER_UPDATES_SUCCESS,
  CATEGORY_MASTER_UPDATES_FAIL,
  CATEGORY_CHILD_ALLLIST_FAIL,
  CATEGORY_CHILD_ALLLIST_SUCCESS,
  CATEGORY_CHILD_ALLLIST_REQUEST,
  CATEGORY_GRAND_CHILD_ALLLIST_REQUEST,
  CATEGORY_GRAND_CHILD_ALLLIST_SUCCESS,
  CATEGORY_GRAND_CHILD_ALLLIST_FAIL,
  CATEGORY_CHILD_NEW_FAIL,
  CATEGORY_CHILD_NEW_SUCCESS,
  CATEGORY_CHILD_NEW_REQUEST,
  CATEGORY_GRAND_CHILD_NEW_REQUEST,
  CATEGORY_GRAND_CHILD_NEW_SUCCESS,
  CATEGORY_GRAND_CHILD_NEW_FAIL,
  CATEGORY_UPDATES_REQUEST,
  CATEGORY_UPDATES_SUCCESS,
  CATEGORY_UPDATES_FAIL,
  CATEGORY_CHILD_UPDATES_REQUEST,
  CATEGORY_CHILD_UPDATES_SUCCESS,
  CATEGORY_CHILD_UPDATES_FAIL,
  CATEGORY_GRAND_CHILD_UPDATES_REQUEST,
  CATEGORY_GRAND_CHILD_UPDATES_SUCCESS,
  CATEGORY_GRAND_CHILD_UPDATES_FAIL,
  PARENT_ENABLE_UPDATE_REQUEST,
  PARENT_ENABLE_UPDATE_SUCCESS,
  PARENT_ENABLE_UPDATE_FAIL,
  CHILD_ENABLE_UPDATE_REQUEST,
  CHILD_ENABLE_UPDATE_SUCCESS,
  CHILD_ENABLE_UPDATE_FAIL,
  GRAND_CHILD_ENABLE_UPDATE_REQUEST,
  GRAND_CHILD_ENABLE_UPDATE_SUCCESS,
  GRAND_CHILD_ENABLE_UPDATE_FAIL,
  PARENT_MULTIPLE_DELETE_REQUEST,
  PARENT_MULTIPLE_DELETE_SUCCESS,
  PARENT_MULTIPLE_DELETE_FAIL,
  CHILD_MULTIPLE_DELETE_REQUEST,
  CHILD_MULTIPLE_DELETE_SUCCESS,
  CHILD_MULTIPLE_DELETE_FAIL,
  GRAND_CHILD_MULTIPLE_DELETE_REQUEST,
  GRAND_CHILD_MULTIPLE_DELETE_SUCCESS,
  GRAND_CHILD_MULTIPLE_DELETE_FAIL,
  CATEGORY_CHILD_UPDATE_REQUEST,
  CATEGORY_CHILD_UPDATE_SUCCESS,
  CATEGORY_CHILD_UPDATE_FAIL,
  CATEGORY_GRAND_CHILD_UPDATE_REQUEST,
  CATEGORY_GRAND_CHILD_UPDATE_SUCCESS,
  CATEGORY_GRAND_CHILD_UPDATE_FAIL,
  CATEGORY_DELETE_FAIL,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_DELETE_REQUEST,
} from "../constants/categoryMasterConstant";

export const createCategoryMaster =
  (categoryMaster) => async (dispatch, getState) => {
    // console.log("categoryMaster", categoryMaster);
    // console.log("categoryMastercoverimg", categoryMaster.coverimg);
    const coverimg = categoryMaster.coverimg;
    
    const fd = new FormData();
    if (coverimg === undefined) {
      fd.append("name", categoryMaster.name);
      fd.append("checked", categoryMaster.checked);
      fd.append("parent", categoryMaster.parent);
      fd.append("description", categoryMaster.description);
      fd.append("parentId", categoryMaster.parentId);
      fd.append("childname", categoryMaster.childname);
      fd.append("childIndex", categoryMaster.childIndex);
      fd.append("child1", categoryMaster.child1);
      fd.append("child2", categoryMaster.child2);
      fd.append("child3", categoryMaster.child3);
      fd.append("child4", categoryMaster.child4);
      fd.append("child5", categoryMaster.child5);
      fd.append("child6", categoryMaster.child6);
      fd.append("child7", categoryMaster.child7);
      fd.append("Cparent", categoryMaster.Cparent);
    } else {
      fd.append("name", categoryMaster.name);
      fd.append("checked", categoryMaster.checked);
      fd.append("parent", categoryMaster.parent);
      fd.append("description", categoryMaster.description);
      fd.append("coverimg", categoryMaster.coverimg[0]);
      fd.append("parentId", categoryMaster.parentId);
      fd.append("childIndex", categoryMaster.childIndex);
      fd.append("child1", categoryMaster.child1);
      fd.append("child2", categoryMaster.child2);
      fd.append("child3", categoryMaster.child3);
      fd.append("child4", categoryMaster.child4);
      fd.append("child5", categoryMaster.child5);
      fd.append("child6", categoryMaster.child6);
      fd.append("child7", categoryMaster.child7);
      fd.append("Cparent", categoryMaster.Cparent);
    }
    dispatch({ type: CATEGORY_MASTER_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post("/api/categorymaster", fd, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
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

export const CategoryMasterallLists = () => async (dispatch) => {
  dispatch({
    type: CATEGORY_MASTER_ALLLIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/categorymaster/categorymasterList/`);
    dispatch({ type: CATEGORY_MASTER_ALLLIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CATEGORY_MASTER_ALLLIST_FAIL, payload: error.message });
  }
};

export const deleteCategegoryMasterlist =
  (id) => async (dispatch, getState) => {
    dispatch({ type: CATEGORY_MASTER_DEL_REQUEST, payload: id });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      await Axios.delete(`/api/categorymaster/${id}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: CATEGORY_MASTER_DEL_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CATEGORY_MASTER_DEL_FAIL, payload: message });
    }
  };

export const updatecategoryMaster =
  (categoryObject) => async (dispatch, getState) => {
    dispatch({
      type: CATEGORY_MASTER_UPDATES_REQUEST,
      payload: categoryObject,
    });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/categorymaster/master/${categoryObject.id}`,
        categoryObject,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: CATEGORY_MASTER_UPDATES_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CATEGORY_MASTER_UPDATES_FAIL, error: message });
    }
  };

export const updateCategoryChild =
  (categoryChildObject) => async (dispatch, getState) => {
    // console.log("categoryChildObject", categoryChildObject);
    dispatch({
      type: CATEGORY_CHILD_UPDATE_REQUEST,
      payload: categoryChildObject,
    });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/categorymaster/child/${categoryChildObject.id}`,
        categoryChildObject,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: CATEGORY_CHILD_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CATEGORY_CHILD_UPDATE_FAIL, error: message });
    }
  };

export const updateCategoryGrandChild =
  (categoryGrandChildObject) => async (dispatch, getState) => {
    // console.log("categoryGrandChildObject", categoryGrandChildObject);
    dispatch({
      type: CATEGORY_GRAND_CHILD_UPDATE_REQUEST,
      payload: categoryGrandChildObject,
    });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/categorymaster/grandchild/${categoryGrandChildObject.id}`,
        categoryGrandChildObject,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: CATEGORY_GRAND_CHILD_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CATEGORY_GRAND_CHILD_UPDATE_FAIL, error: message });
    }
  };
export const CategoryChildallLists = () => async (dispatch) => {
  dispatch({
    type: CATEGORY_CHILD_ALLLIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/categorymaster/ChildList`);
    dispatch({ type: CATEGORY_CHILD_ALLLIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CATEGORY_CHILD_ALLLIST_FAIL, payload: error.message });
  }
};

export const CategoryChildNewLists = () => async (dispatch) => {
  dispatch({
    type: CATEGORY_CHILD_NEW_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/categorymaster/ChildList`);
    dispatch({ type: CATEGORY_CHILD_NEW_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CATEGORY_CHILD_NEW_FAIL, payload: error.message });
  }
};

export const CategorygrandChildNewLists = () => async (dispatch) => {
  dispatch({
    type: CATEGORY_GRAND_CHILD_NEW_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/categorymaster/garnChildListnew`);
    dispatch({ type: CATEGORY_GRAND_CHILD_NEW_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CATEGORY_GRAND_CHILD_NEW_FAIL, payload: error.message });
  }
};

export const grandChildCategoryLists = () => async (dispatch) => {
  dispatch({
    type: CATEGORY_GRAND_CHILD_ALLLIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/categorymaster/garnChildList`);
    dispatch({ type: CATEGORY_GRAND_CHILD_ALLLIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORY_GRAND_CHILD_ALLLIST_FAIL,
      payload: error.message,
    });
  }
};

export const updatecategoryActivate =
  (checkboxId) => async (dispatch, getState) => {
    dispatch({ type: CATEGORY_UPDATES_REQUEST, payload: checkboxId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/categorymaster/checkboxitem/${checkboxId.checkboxId}`,
        checkboxId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: CATEGORY_UPDATES_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CATEGORY_UPDATES_FAIL, error: message });
    }
  };

export const ChildcategoryActivate =
  (childId) => async (dispatch, getState) => {
    dispatch({ type: CATEGORY_CHILD_UPDATES_REQUEST, payload: childId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/categorymaster/childcheckbox/${childId.childId}`,
        childId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: CATEGORY_CHILD_UPDATES_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CATEGORY_CHILD_UPDATES_FAIL, error: message });
    }
  };

export const GrandChildcategory =
  (grandchildId) => async (dispatch, getState) => {
    dispatch({
      type: CATEGORY_GRAND_CHILD_UPDATES_REQUEST,
      payload: grandchildId,
    });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/categorymaster/grandchildcheckbox/${grandchildId.grandchildId}`,
        grandchildId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: CATEGORY_GRAND_CHILD_UPDATES_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CATEGORY_GRAND_CHILD_UPDATES_FAIL, error: message });
    }
  };

export const updateParentEnable = (parentId) => async (dispatch, getState) => {
  dispatch({ type: PARENT_ENABLE_UPDATE_REQUEST, payload: parentId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/categorymaster/parentEnable/${parentId.id}`,
      parentId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: PARENT_ENABLE_UPDATE_SUCCESS, payload: data.Attmaster });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PARENT_ENABLE_UPDATE_FAIL, error: message });
  }
};

export const updateChildEnable = (childId) => async (dispatch, getState) => {
  dispatch({ type: CHILD_ENABLE_UPDATE_REQUEST, payload: childId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/categorymaster/childEnable/${childId.id}`,
      childId,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: CHILD_ENABLE_UPDATE_SUCCESS, payload: data.Attmaster });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CHILD_ENABLE_UPDATE_FAIL, error: message });
  }
};

export const updategrandChildEnable =
  (grandId) => async (dispatch, getState) => {
    dispatch({ type: GRAND_CHILD_ENABLE_UPDATE_REQUEST, payload: grandId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/categorymaster/grandEnable/${grandId.id}`,
        grandId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: GRAND_CHILD_ENABLE_UPDATE_SUCCESS,
        payload: data.Attmaster,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: GRAND_CHILD_ENABLE_UPDATE_FAIL, error: message });
    }
  };

export const deleteMultipleParent = (empId) => async (dispatch, getState) => {
  dispatch({ type: PARENT_MULTIPLE_DELETE_REQUEST, payload: empId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(
      "/api/categorymaster/masterdelete/" + empId,
      { data: empId },
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );

    dispatch({ type: PARENT_MULTIPLE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PARENT_MULTIPLE_DELETE_FAIL, payload: message });
  }
};

export const deleteMultipleChild = (empId) => async (dispatch, getState) => {
  dispatch({ type: CHILD_MULTIPLE_DELETE_REQUEST, payload: empId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(
      "/api/categorymaster/childdelete/" + empId,
      { data: empId },
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );

    dispatch({ type: CHILD_MULTIPLE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CHILD_MULTIPLE_DELETE_FAIL, payload: message });
  }
};

export const deleteMultiplegranchild =
  (empId) => async (dispatch, getState) => {
    dispatch({ type: GRAND_CHILD_MULTIPLE_DELETE_REQUEST, payload: empId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      await Axios.delete(
        "/api/categorymaster/grandchilddelete/" + empId,
        { data: empId },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );

      dispatch({ type: GRAND_CHILD_MULTIPLE_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: GRAND_CHILD_MULTIPLE_DELETE_FAIL, payload: message });
    }
  };


  export const deleteCatogry =
  (empId) => async (dispatch, getState) => {
    console.log("empId",empId);
    dispatch({ type:CATEGORY_DELETE_REQUEST, payload: empId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      await Axios.delete(
        "/api/categorymaster/Categorydelete/" + empId.childId,
        { data: empId },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );

      dispatch({ type: CATEGORY_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CATEGORY_DELETE_FAIL, payload: message });
    }
  };
