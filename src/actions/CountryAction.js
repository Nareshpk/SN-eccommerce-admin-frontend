import Axios from "axios";
import {
    COUNTRY_DETAIL_DELETE_FAIL,
    COUNTRY_DETAIL_DELETE_REQUEST,
    COUNTRY_DETAIL_DELETE_SUCCESS,
    COUNTRY_DETAIL_LIST_FAIL,
    COUNTRY_DETAIL_LIST_REQUEST,
    COUNTRY_DETAIL_LIST_SUCCESS,
    COUNTRY_DETAIL_SAVE_REQUEST,
    COUNTRY_DETAIL_SAVE_RESET,
    COUNTRY_DETAIL_SAVE_SUCCESS,
    COUNTRY_DETAIL_UPDATE_FAIL,
    COUNTRY_DETAIL_UPDATE_REQUEST,
    COUNTRY_DETAIL_UPDATE_SUCCESS,
    COUNTRY_ENABLE_FAIL,
    COUNTRY_ENABLE_REQUEST,
    COUNTRY_ENABLE_SUCCESS,
    COUNTRY_ENABLE_UPDATES_FAIL,
    COUNTRY_ENABLE_UPDATES_REQUEST,
    COUNTRY_ENABLE_UPDATES_SUCCESS,
    COUNTRY_MULTIPLE_DELETE_FAIL,
    COUNTRY_MULTIPLE_DELETE_REQUEST,
    COUNTRY_MULTIPLE_DELETE_SUCCESS
} from "../constants/CountryConstants";


export const countryDetails = (Countrydetail) => async (dispatch) => {
    dispatch({ type: COUNTRY_DETAIL_SAVE_REQUEST });
    try {
        const { data } = await Axios.post(
            "/api/countrydetails/savedetails",
            Countrydetail,
            {},
        );
        dispatch({ type: COUNTRY_DETAIL_SAVE_SUCCESS, payload: data.category });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: COUNTRY_DETAIL_SAVE_RESET, payload: message });
    }
};

export const CountryListDetails = () => async (dispatch) => {
    dispatch({
        type: COUNTRY_DETAIL_LIST_REQUEST,
    });
    try {
        const { data } = await Axios.get(`/api/countrydetails/savelist`);
        dispatch({ type: COUNTRY_DETAIL_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: COUNTRY_DETAIL_LIST_FAIL, payload: error.message });
    }
};

export const updateCountrydetail = (countryId) => async (dispatch, getState) => {
    dispatch({ type: COUNTRY_DETAIL_UPDATE_REQUEST, payload: countryId });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.put(
            `/api/countrydetails/updateCountry/${countryId.id}`,
            countryId,
            {
                headers: { Authorization: `Bearer ${userInfo.token}` },
            },
        );
        dispatch({ type: COUNTRY_DETAIL_UPDATE_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: COUNTRY_DETAIL_UPDATE_FAIL, error: message });
    }
};

export const deleteCountryMasterlist = (id) => async (dispatch, getState) => {
    dispatch({ type: COUNTRY_DETAIL_DELETE_REQUEST, payload: id });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        await Axios.delete(`/api/countrydetails/countrymasterdel/${id}`, {
            headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: COUNTRY_DETAIL_DELETE_SUCCESS });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: COUNTRY_DETAIL_DELETE_FAIL, payload: message });
    }
};

export const updateCountryEnable = (countryId) => async (dispatch, getState) => {
    dispatch({ type: COUNTRY_ENABLE_REQUEST, payload: countryId });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.put(
            `/api/countrydetails/enable/${countryId.id}`,
            countryId,
            {
                headers: { Authorization: `Bearer ${userInfo.token}` },
            }
        );
        dispatch({ type: COUNTRY_ENABLE_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: COUNTRY_ENABLE_FAIL, error: message });
    }
};

export const updatecountryActivate = (checkboxId) => async (dispatch, getState) => {
    dispatch({ type: COUNTRY_ENABLE_UPDATES_REQUEST, payload: checkboxId });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.put(
            `/api/countrydetails/checkboxitem/${checkboxId.checkboxId}`,
            checkboxId,
            {
                headers: { Authorization: `Bearer ${userInfo.token}` },
            }
        );
        dispatch({ type: COUNTRY_ENABLE_UPDATES_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: COUNTRY_ENABLE_UPDATES_FAIL, error: message });
    }
};


export const deleteMultiplecountry = (delId) => async (dispatch, getState) => {
    console.log("delId", delId);
    dispatch({ type: COUNTRY_MULTIPLE_DELETE_REQUEST, payload: delId });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        await Axios.delete(
            "/api/countrydetails/deletebulk/" + delId,
            { data: delId },
            {
                headers: { Authorization: `Bearer ${userInfo.token}` },
            },
        );

        dispatch({ type: COUNTRY_MULTIPLE_DELETE_SUCCESS });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: COUNTRY_MULTIPLE_DELETE_FAIL, payload: message });
    }
};
