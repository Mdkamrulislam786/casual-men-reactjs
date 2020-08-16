import { ADD_PRODUCT_BASKET, HANDLE_DETAILS, ADD_TO_CART,GET_ITEM } from "./types";

export const addBasket = (productName) => {
  return (dispatch) => {
    console.log("add to basket");
    console.log("Product: ", productName);

    dispatch({
      type: ADD_PRODUCT_BASKET,
      payload: productName,
    });
  };
};

export const getItem = (id) => {
  return (dispatch) => {

    dispatch({
      type: GET_ITEM,
      payload: id,
    });
  };
};

export const addToCart = (id) => {
  return (dispatch) => {
    console.log("adding to cart");
    console.log("addToCart id is = ", id);

    dispatch({
      type: ADD_TO_CART,
      payload: id,
    });
  };
};
