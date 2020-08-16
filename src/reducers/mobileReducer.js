import React, { Component } from "react";
import { HANDLE_DETAILS, ADD_TO_CART, GET_ITEM } from "../actions/types";
import { storeProducts, detailProduct } from "../data";

const mobileState = {
  products: storeProducts,
  detailProduct,
};

//Making Copies of the products state
class ProductProvider extends Component {
  mobileState = {
    products: [],
    detailProduct,
  };

  UNSAFE_componentDidMount() {
    this.setstate();
  }

  setProducts = () => {
    let state = { ...mobileState };
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });

    state.setState(() => {
      return { products: tempProducts };
    });
  };
  render() {
    return { ...mobileState };
  }
}

export default (state = mobileState, action) => {
  let product = "";
  switch (action.type) {
    case GET_ITEM:
    case HANDLE_DETAILS:
      // let getItem = (id) => {
      //   const product = state.products.find(
      //     (item) => item[action.payload] === [action.payload]
      //   );
      //   return product;
      // };
      // let handleDetail = (id) => {
      //   const product = getItem(id);

      //   return { detailProduct: product };
      // };
      product={ ...state.detailProduct[action.payload] }
      return{
        ...state,
        detailProduct:{
          price: state.detailProduct[action.payload].price,
          [action.payload]: product
        }
      }
    case ADD_TO_CART:
      productDetails = { ...(state.detailProduct.id = [action.payload]) };
      console.log(`the id is ${productDetails}`);
      return {
        ...state,
        productDetails,
      };
      break;
    default:
      return state;
  }
};
