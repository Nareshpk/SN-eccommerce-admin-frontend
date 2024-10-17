import {
  SIZEWEIGHTGROUP_ALLLIST_FAIL,
  SIZEWEIGHTGROUP_ALLLIST_REQUEST,
  SIZEWEIGHTGROUP_ALLLIST_SUCCESS,
  SIZEWEIGHTGROUP_LIST_FAIL,
  SIZEWEIGHTGROUP_LIST_REQUEST,
  SIZEWEIGHTGROUP_LIST_SUCCESS,
  SIZEWEIGHTGROUP_SAVE_FAIL,
  SIZEWEIGHTGROUP_SAVE_REQUEST,
  SIZEWEIGHTGROUP_SAVE_RESET,
  SIZEWEIGHTGROUP_SAVE_SUCCESS,
  SIZEWEIGHTGROUP_UPDATE_FAIL,
  SIZEWEIGHTGROUP_UPDATE_REQUEST,
  SIZEWEIGHTGROUP_UPDATE_RESET,
  SIZEWEIGHTGROUP_UPDATE_SUCCESS,
} from "../constants/SizeWeightGroup";

export const ShippingSaveReducer = (state = {}, ship) => {
  switch (ship.type) {
    case SIZEWEIGHTGROUP_SAVE_REQUEST:
      return { loading: true };
    case SIZEWEIGHTGROUP_SAVE_SUCCESS:
      return { loading: false, success: true, productId: ship.payload };
    case SIZEWEIGHTGROUP_SAVE_FAIL:
      return { loading: false, error: ship.payload };
    case SIZEWEIGHTGROUP_SAVE_RESET:
      return {};
    default:
      return state;
  }
};
export const ShippingListReducer = (
  state = { loading: true, shipAddList: [] },
  action
) => {
  switch (action.type) {
    case SIZEWEIGHTGROUP_LIST_REQUEST:
      return { loading: true };
    case SIZEWEIGHTGROUP_LIST_SUCCESS:
      return { loading: false, success: true, shipAddList: action.payload };
    case SIZEWEIGHTGROUP_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ShippingUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SIZEWEIGHTGROUP_UPDATE_REQUEST:
      return { loading: true };
    case SIZEWEIGHTGROUP_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case SIZEWEIGHTGROUP_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case SIZEWEIGHTGROUP_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const ShippingAlllListReducer = (
  state = { loading: true, shipAddAllList: [] },
  action
) => {
  switch (action.type) {
    case SIZEWEIGHTGROUP_ALLLIST_REQUEST:
      return { loading: true };
    case SIZEWEIGHTGROUP_ALLLIST_SUCCESS:
      return { loading: false, success: true, shipAddAllList: action.payload };
    case SIZEWEIGHTGROUP_ALLLIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
