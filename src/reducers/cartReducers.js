import {
  CART_ADD_ITEM,
  CART_ADD_ITEM_FAIL,
  CART_CREATE_FAIL,
  CART_CREATE_REQUEST,
  CART_CREATE_SUCCESS,
  CART_DELETE_FAIL,
  CART_DELETE_REQUEST,
  CART_DELETE_RESET,
  CART_DELETE_SUCCESS,
  CART_EMPTY,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_UPDATE_FAIL,
  CART_UPDATE_REQUEST,
  CART_UPDATE_RESET,
  CART_UPDATE_SUCCESS,
  USER_CART_LIST_FAIL,
  USER_CART_LIST_REQUST,
  USER_CART_LIST_SUCCESS,
} from "../constants/cartConstants";

export const cartReducerItems = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          error: "",
          createSuccess: true,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      }
      if (existItem) {
        return {
          ...state,
          error: "",
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.tshirt ? item : x
          ),
        };
      } else {
        return { ...state, error: "", cartItems: [...state.cartItems, item] };
      }
    }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        error: "",
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };

    case CART_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };
    case CART_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    case CART_ADD_ITEM_FAIL:
      return { ...state, error: action.payload };
    case CART_EMPTY:
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};
export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_CREATE_REQUEST:
      return { loading: true };
    case CART_CREATE_SUCCESS:
      return { loading: false, success: true, usercart: action.payload };
    case CART_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case CART_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };
    case CART_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    case CART_ADD_ITEM_FAIL:
      return { ...state, error: action.payload };
    case CART_EMPTY:
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};

export const userCartListReducer = (
  state = { loading: true, usercarts: [] },
  action
) => {
  switch (action.type) {
    case USER_CART_LIST_REQUST:
      return { loading: true };
    case USER_CART_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        usercarts: action.payload,
      };
    case USER_CART_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const cartDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_DELETE_REQUEST:
      return { loading: true };
    case CART_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CART_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case CART_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const cartUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_UPDATE_REQUEST:
      return { loading: true };
    case CART_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case CART_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CART_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
