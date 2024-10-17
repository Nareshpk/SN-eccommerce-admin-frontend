import { COUNTRY_DETAIL_DELETE_FAIL, COUNTRY_DETAIL_DELETE_REQUEST, COUNTRY_DETAIL_DELETE_RESET, COUNTRY_DETAIL_DELETE_SUCCESS, COUNTRY_DETAIL_LIST_FAIL, COUNTRY_DETAIL_LIST_REQUEST, COUNTRY_DETAIL_LIST_SUCCESS, COUNTRY_DETAIL_SAVE_FAIL, COUNTRY_DETAIL_SAVE_REQUEST, COUNTRY_DETAIL_SAVE_RESET, COUNTRY_DETAIL_SAVE_SUCCESS, COUNTRY_DETAIL_UPDATE_FAIL, COUNTRY_DETAIL_UPDATE_REQUEST, COUNTRY_DETAIL_UPDATE_RESET, COUNTRY_DETAIL_UPDATE_SUCCESS, COUNTRY_ENABLE_FAIL, COUNTRY_ENABLE_REQUEST, COUNTRY_ENABLE_RESET, COUNTRY_ENABLE_SUCCESS, COUNTRY_ENABLE_UPDATES_FAIL, COUNTRY_ENABLE_UPDATES_REQUEST, COUNTRY_ENABLE_UPDATES_RESET, COUNTRY_ENABLE_UPDATES_SUCCESS, COUNTRY_MULTIPLE_DELETE_FAIL, COUNTRY_MULTIPLE_DELETE_REQUEST, COUNTRY_MULTIPLE_DELETE_RESET, COUNTRY_MULTIPLE_DELETE_SUCCESS } from "../constants/CountryConstants";



export const CountrySaveReducer = (state = {}, country) => {
    switch (country.type) {
        case COUNTRY_DETAIL_SAVE_REQUEST:
            return { loading: true };
        case COUNTRY_DETAIL_SAVE_SUCCESS:
            return { loading: false, success: true, productId: country.payload };
        case COUNTRY_DETAIL_SAVE_FAIL:
            return { loading: false, error: country.payload };
        case COUNTRY_DETAIL_SAVE_RESET:
            return {};
        default:
            return state;
    }
};

export const CountryListReducer = (
    state = { loading: true, country: [] },
    action
) => {
    switch (action.type) {
        case COUNTRY_DETAIL_LIST_REQUEST:
            return { loading: true };
        case COUNTRY_DETAIL_LIST_SUCCESS:
            return {
                loading: false,
                country: action.payload,
            };
        case COUNTRY_DETAIL_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const CountryUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case COUNTRY_DETAIL_UPDATE_REQUEST:
            return { loading: true };
        case COUNTRY_DETAIL_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case COUNTRY_DETAIL_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case COUNTRY_DETAIL_UPDATE_RESET:
            return {};
        default:
            return state;
    }
};

export const CountryMasterDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case COUNTRY_DETAIL_DELETE_REQUEST:
            return { loading: true };
        case COUNTRY_DETAIL_DELETE_SUCCESS:
            return { loading: false, success: true };
        case COUNTRY_DETAIL_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case COUNTRY_DETAIL_DELETE_RESET:
            return {};
        default:
            return state;
    }
};

export const CountryEnableReducer = (state = {}, action) => {
    switch (action.type) {
        case COUNTRY_ENABLE_REQUEST:
            return { loading: true };
        case COUNTRY_ENABLE_SUCCESS:
            return { loading: false, success: true };
        case COUNTRY_ENABLE_FAIL:
            return { loading: false, error: action.payload };
        case COUNTRY_ENABLE_RESET:
            return {};
        default:
            return state;
    }
};

export const countryCheckboxReducer = (state = {}, action) => {
    switch (action.type) {
        case COUNTRY_ENABLE_UPDATES_REQUEST:
            return { loading: true };
        case COUNTRY_ENABLE_UPDATES_SUCCESS:
            return { loading: false, success: true };
        case COUNTRY_ENABLE_UPDATES_FAIL:
            return { loading: false, error: action.payload };
        case COUNTRY_ENABLE_UPDATES_RESET:
            return {};
        default:
            return state;
    }
};

export const CountrymultipleDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case COUNTRY_MULTIPLE_DELETE_REQUEST:
            return { loading: true };
        case COUNTRY_MULTIPLE_DELETE_SUCCESS:
            return { loading: false, success: true };
        case COUNTRY_MULTIPLE_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case COUNTRY_MULTIPLE_DELETE_RESET:
            return {};
        default:
            return state;
    }
};