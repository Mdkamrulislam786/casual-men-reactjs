import { HANDLE_DETAILS, ADD_TO_CART } from "../actions/types";
import { storeProducts, detailProduct } from "../data";



const mobileState = {
  products: storeProducts,
  detailProduct
};

export default (state = mobileState, action) => {
  let productDetails = "";
  switch (action.type) {
    case HANDLE_DETAILS:
      productDetails = [action.payload];
      productDetails.push(console.log('detaisl Handled'))
      return {
        ...state,
      };
      break;
    case ADD_TO_CART:
      productDetails = [action.payload];
      console.log(productDetails);
      return{
        ...state
      }
      break;
    default:
      return state;
  }
};
