import { ADD_PRODUCT_BASKET,HANDLE_DETAILS,ADD_TO_CART  } from "./types";

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

// export const showProductDetails = (productName) => {
//   return (dispatch) => {
//     console.log("showing product details");
//     console.log("ProductDetails= ", productName);
    
//     dispatch({
//       type: HANDLE_DETAILS ,
//       payload: productName
//     });
//   };
// };

export const addToCart = (productName) => {
  return (dispatch) => {
    console.log("adding to cart");
    console.log("addToCart= ", productName);
    
    dispatch({
      type: ADD_TO_CART ,
      payload: productName
    });
  };
};
