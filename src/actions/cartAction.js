import Axios from "axios";
import {
  CART_CREATE_FAIL, CART_CREATE_REQUEST, CART_CREATE_SUCCESS, CART_DELETE_FAIL, CART_DELETE_REQUEST, CART_DELETE_SUCCESS, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS, CART_UPDATE_FAIL, CART_UPDATE_REQUEST, CART_UPDATE_SUCCESS, USER_CART_LIST_FAIL, USER_CART_LIST_REQUST, USER_CART_LIST_SUCCESS
} from "../constants/cartConstants";

export const addToCart =(productId, qty) => async (dispatch, getState) => {
  dispatch({ type: CART_CREATE_REQUEST });
    const { data } = await Axios.get(`/api/products/${productId}`);
    const img = await Axios.get(`/api/uploads/show/${productId}`, {
      responseType: "blob",
    });
    // const {
    //     cart: { cartItems },
    // } = getState();
    // console.log("cartItems",cartItems);
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const pay = {
        data: data,
        qty: qty,
        image: img?.config?.url,
        user: userInfo,
      };
      const addCart = await Axios.post("/api/usercart", pay);
      dispatch({
        type: CART_CREATE_SUCCESS,
        payload: addCart,
      });
    } catch (error) {
      const message =
        error.response && error.response.addcart.message
          ? error.response.addcart.message
          : error.message;
      dispatch({ type: CART_CREATE_FAIL, payload: message });
    }
  };

export const userCartList = (userId) => async (dispatch) => {
  dispatch({
    type: USER_CART_LIST_REQUST,
  });
  try {
    const { data } = await Axios.get(`/api/usercart/cartlist/${userId}`);
    dispatch({ type: USER_CART_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_CART_LIST_FAIL, payload: error.message });
  }
};

// export const userCartId = (userId) => async (dispatch) => {
//   dispatch({
//     type: USER_CART_ID_REQUST,
//   });
//   try {
//     const { data } = await Axios.get(`/api/usercart/cartId/${userId}`);
//  const cartItem= data.map((item)=>(
//   item.product
//  ))
//   console.log("cartid",cartItem)
//     dispatch({ type: USER_CART_ID_SUCCESS, payload: cartItem });
//   } catch (error) {
//     dispatch({ type: USER_CART_ID_FAIL, payload: error.message });
//   }

// };

// export const listProductCategories = () => async (dispatch) => {
//     dispatch({
//       type: PRODUCT_CATEGORY_LIST_REQUEST,
//     });
//     try {
//       const { data } = await Axios.get(`/api/products/categories`);
//       dispatch({ type: PRODUCT_CATEGORY_LIST_SUCCESS, payload: data });

//     } catch (error) {
//       dispatch({ type: PRODUCT_CATEGORY_LIST_FAIL, payload: error.message });
//     }
//   };

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  document.location.href = "/cart";
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
};

export const deleteCart = (_id) => async (dispatch) => {
  dispatch({ type: CART_DELETE_REQUEST, payload: _id });
  document.location.href = "/cart";
  try {
    await Axios.delete(`/api/usercart/${_id}`);

    dispatch({ type: CART_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CART_DELETE_FAIL, payload: message });
  }
};


export const updateCart = (usercart) => async (dispatch) => {
  
  dispatch({ type: CART_UPDATE_REQUEST, payload: usercart });
  try {
    const { data } = await Axios.put(`/api/usercart/${usercart.usercartId}`,usercart);
    dispatch({ type: CART_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CART_UPDATE_FAIL, error: message });
  }
};
