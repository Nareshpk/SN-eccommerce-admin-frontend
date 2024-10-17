import {
  CART_KID_ADD_ITEM,
  CART_KID_ADD_ITEM_FAIL,
  CART_KID_EMPTY,
  CART_KID_REMOVE_ITEM,
  CART_KID_SAVE_PAYMENT_METHOD,
  CART_KID_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartKidConstants";

export const cartKidReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_KID_ADD_ITEM: {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.women === item.women);
      if (existItem) {
        return {
          ...state,
          error: "",
          cartItems: state.cartItems.map((x) =>
            x.women === existItem.women ? item : x
          ),
        };
      } else {
        return { ...state, error: "", cartItems: [...state.cartItems, item] };
      }
    }
    case CART_KID_REMOVE_ITEM:
      return {
        ...state,
        error: "",
        cartItems: state.cartItems.filter((x) => x.women !== action.payload),
      };
    case CART_KID_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };
    case CART_KID_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    case CART_KID_ADD_ITEM_FAIL:
      return { ...state, error: action.payload };
    case CART_KID_EMPTY:
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};
