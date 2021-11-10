import {
  GET_CART,
  ADD_TO_CART,
  LOGIN_ERROR,
  USER_LOGOUT,
  USER_LOGIN,
  CART_ERROR,
  HANDLE_DETAIL,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  GET_BOOKS,
  BOOKS_ERROR,
  REGISTER_LOGIN,
  REGISTER_ERROR,
} from "./action-types/cart-actions";
import axios from "axios";
import { API_BASE_URL } from "../../constants/apiConstants";

export const addToCart = (id, username) => async (dispatch) => {
  const payload = {
    id: id,
    user: username,
  };
  try {
    const res = axios.post(API_BASE_URL + "cart/add", payload);
    dispatch({
      type: ADD_TO_CART,
      payload: res.data,
      id,
    });
  } catch (e) {
    dispatch({
      type: BOOKS_ERROR,
      payload: console.log(e),
    });
  }
};
//remove item
export const removeItem = (id, username) => async (dispatch) => {
  const payload = {
    id: id,
    user: username,
  };
  try {
    const res = axios.post(API_BASE_URL + "cart/item/remove", payload);
    dispatch({
      type: REMOVE_ITEM,
      payload: res.data,
      id,
    });
  } catch (e) {
    dispatch({
      type: BOOKS_ERROR,
      payload: console.log(e),
      id,
    });
  }
};
//add cart action
export const addToDetail = (id) => {
  return {
    type: HANDLE_DETAIL,
    id,
  };
};

//subtract qt action
export const subtractQuantity = (id, username) => async (dispatch) => {
  const payload = {
    id: id,
    user: username,
  };
  try {
    const res = axios.post(API_BASE_URL + "cart/item/decrement", payload);
    dispatch({
      type: SUB_QUANTITY,
      payload: res.data,
      id,
    });
  } catch (e) {
    dispatch({
      type: BOOKS_ERROR,
      payload: console.log(e),
    });
  }
};
//add qt action
export const addQuantity = (id, username) => async (dispatch) => {
  const payload = {
    id: id,
    user: username,
  };
  try {
    const res = axios.post(API_BASE_URL + "cart/item/increment", payload);
    dispatch({
      type: ADD_QUANTITY,
      payload: res.data,
      id,
    });
  } catch (e) {
    dispatch({
      type: BOOKS_ERROR,
      payload: console.log(e),
    });
  }
};

export const getBooks = () => async (dispatch) => {
  try {
    const res = await axios.get(API_BASE_URL + "books");
    dispatch({
      type: GET_BOOKS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: BOOKS_ERROR,
      payload: console.log(e),
    });
  }
};
export const getCart = (username) => async (dispatch) => {
  try {
    const res = await axios.get(API_BASE_URL + `cart/user/` + username);
    dispatch({
      type: GET_CART,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: CART_ERROR,
      payload: console.log(e),
    });
  }
};
export const userLogin = (username, password) => async (dispatch) => {
  const payload = {
    username: username,
    password: password,
  };
  try {
    const res = await axios.post(API_BASE_URL + "users/login", payload);
    dispatch({
      type: USER_LOGIN,
      payload: res.data,
      username: username,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_ERROR,
      payload: console.log(e),
    });
  }
};
export const userRegister = (username, password) => async (dispatch) => {
  const payload = {
    username: username,
    password: password,
  };
  try {
    const res = await axios.post(API_BASE_URL + "users/register", payload);
    dispatch({
      type: REGISTER_LOGIN,
      payload: res.data,
      username: username,
    });
  } catch (e) {
    dispatch({
      type: REGISTER_ERROR,
      payload: console.log(e),
    });
  }
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
