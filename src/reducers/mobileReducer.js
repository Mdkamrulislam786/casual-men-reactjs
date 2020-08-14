import { SHOW_PRODUCT_DETAILS } from "../actions/types";
import { storeProducts, detailProduct } from "../data";

const mobileState = {
  mobiles: storeProducts,
};

export default (state = mobileState, action) => {
  let productDetails = "";
  switch (action.type) {
    case SHOW_PRODUCT_DETAILS:
        productDetails = [action.payload] ;
      console.log(productDetails);

    default:
      return state;
  }
};
