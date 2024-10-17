import Axios from "axios";
import { EMPLOYEE_ACTIVE_UPDATE_FAIL, EMPLOYEE_ACTIVE_UPDATE_REQUEST, EMPLOYEE_ACTIVE_UPDATE_SUCCESS, EMPLOYEE_DELETE_FAIL, EMPLOYEE_DELETE_REQUEST, EMPLOYEE_DELETE_SUCCESS, EMPLOYEE_DETAIL_FAIL, EMPLOYEE_DETAIL_REQUEST, EMPLOYEE_DETAIL_SUCCESS, EMPLOYEE_ENABLE_UPDATE_FAIL, EMPLOYEE_ENABLE_UPDATE_REQUEST, EMPLOYEE_ENABLE_UPDATE_SUCCESS, EMPLOYEE_LIST_FAIL, EMPLOYEE_LIST_REQUEST, EMPLOYEE_LIST_SUCCESS, EMPLOYEE_MULTIPLE_DELETE_FAIL, EMPLOYEE_MULTIPLE_DELETE_REQUEST, EMPLOYEE_MULTIPLE_DELETE_SUCCESS, EMPLOYEE_PROFLE_DELETE_FAIL, EMPLOYEE_PROFLE_DELETE_REQUEST, EMPLOYEE_PROFLE_DELETE_SUCCESS, EMPLOYEE_PROFLE_FAIL, EMPLOYEE_PROFLE_LIST_FAIL, EMPLOYEE_PROFLE_LIST_REQUEST, EMPLOYEE_PROFLE_LIST_SUCCESS, EMPLOYEE_PROFLE_REQUEST, EMPLOYEE_PROFLE_SUCCESS, EMPLOYEE_PROFLE_UPDATE_FAIL, EMPLOYEE_PROFLE_UPDATE_REQUEST, EMPLOYEE_PROFLE_UPDATE_SUCCESS, EMPLOYEE_UPDATE_FAIL, EMPLOYEE_UPDATE_REQUEST, EMPLOYEE_UPDATE_SUCCESS } from "../constants/EmployeeConstants";

export const saveProfile =(EmpProfile) => async (dispatch, getState) => {
    dispatch({ type: EMPLOYEE_PROFLE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post("/api/EmployeProfile", EmpProfile, {
        
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({
        type: EMPLOYEE_PROFLE_SUCCESS,
        payload: data.category,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: EMPLOYEE_PROFLE_FAIL, payload: message });
    }
  };


  export const saveDetail =(Empdetails) => async (dispatch, getState) => {
    dispatch({ type: EMPLOYEE_DETAIL_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post("/api/Employedetails/employee", Empdetails, {
        
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({
        type: EMPLOYEE_DETAIL_SUCCESS,
        payload: data.category,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: EMPLOYEE_DETAIL_FAIL, payload: message });
    }
  };


  export const ProfileListDetails = () => async (dispatch) => {
    dispatch({
      type: EMPLOYEE_PROFLE_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(`/api/EmployeProfile/Proifles/`);
      dispatch({ type: EMPLOYEE_PROFLE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: EMPLOYEE_PROFLE_LIST_FAIL, payload: error.message });
    }
  };


  export const EmployeeListDetails = () => async (dispatch) => {
    dispatch({
      type: EMPLOYEE_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(`/api/Employedetails/employedtail/`);
      dispatch({ type: EMPLOYEE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: EMPLOYEE_LIST_FAIL, payload: error.message });
    }
  };

  // *****************************************Update section*********************************************************
  export const updateEmployee = (employeeId) => async (dispatch, getState) => {
    dispatch({ type: EMPLOYEE_UPDATE_REQUEST, payload: employeeId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(`/api/Employedetails/updatemplee/${employeeId.id}`,employeeId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: EMPLOYEE_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: EMPLOYEE_UPDATE_FAIL, error: message });
    }
  };

  export const updateEmployeeprofile = (profileId) => async (dispatch, getState) => {
    dispatch({ type: EMPLOYEE_PROFLE_UPDATE_REQUEST, payload: profileId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(`/api/EmployeProfile/updatprofile/${profileId.id}`,profileId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: EMPLOYEE_PROFLE_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: EMPLOYEE_PROFLE_UPDATE_FAIL, error: message });
    }
  };


  // ********************************Delete Section***************************
  export const deleteEmployee = (empId) => async (dispatch, getState) => {
    dispatch({ type: EMPLOYEE_DELETE_REQUEST, payload: empId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      await Axios.delete(`/api/Employedetails/deleteEmploye/${empId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });

      dispatch({ type: EMPLOYEE_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: EMPLOYEE_DELETE_FAIL, payload: message });
    }
  };

  // ***************************MUltiple Delete*********************************
  export const deleteMultipleEmployee = (empId) => async (dispatch, getState) => {
    dispatch({ type: EMPLOYEE_MULTIPLE_DELETE_REQUEST, payload: empId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      await Axios.delete('/api/Employedetails/deletemultiple/' + empId , { data: empId },{
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });

      dispatch({ type: EMPLOYEE_MULTIPLE_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: EMPLOYEE_MULTIPLE_DELETE_FAIL, payload: message });
    }
  };
  // ********************************************

  export const deleteEmployeeprofile = (empId) => async (dispatch, getState) => {
    dispatch({ type: EMPLOYEE_PROFLE_DELETE_REQUEST, payload: empId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      await Axios.delete(`/api/EmployeProfile/deleteprofile/${empId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });

      dispatch({ type: EMPLOYEE_PROFLE_DELETE_SUCCESS  });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: EMPLOYEE_PROFLE_DELETE_FAIL, payload: message });
    }
  };

  export const updateEmployeeactive = (attId) => async (dispatch, getState) => {
    dispatch({ type: EMPLOYEE_ACTIVE_UPDATE_REQUEST, payload: attId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `/api/Employedetails/attactive/${attId.checkboxId}`,attId,{
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: EMPLOYEE_ACTIVE_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: EMPLOYEE_ACTIVE_UPDATE_FAIL, error: message });
    }
  };


  export const updateEmployeeEnable = (EnableId) => async (dispatch, getState) => {
    dispatch({ type: EMPLOYEE_ENABLE_UPDATE_REQUEST, payload: EnableId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(`/api/Employedetails/updateEnable/${EnableId.id}`,EnableId,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: EMPLOYEE_ENABLE_UPDATE_SUCCESS, payload: data.Attmaster });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: EMPLOYEE_ENABLE_UPDATE_FAIL, error: message });
    }
  };