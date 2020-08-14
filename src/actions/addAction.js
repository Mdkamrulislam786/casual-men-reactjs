import { ADD_PRODUCT_BASKET,SHOW_PRODUCT_DETAILS } from "./types";

export const addBasket = (productName) => {
  return (dispatch) => {
    console.log("add to basket");
    console.log("Product: ", productName);
    
    dispatch({
      type: ADD_PRODUCT_BASKET,
      payload: productName
    });
  };
};

export const showProductDetails = (productName) => {
  return (dispatch) => {
    console.log("showing product details");
    console.log("ProductDetails= ", productName);
    
    dispatch({
      type: SHOW_PRODUCT_DETAILS,
      payload: productName
    });
  };
};
