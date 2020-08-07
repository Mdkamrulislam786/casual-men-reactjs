import React, { Fragment } from "react";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { productQuantity, clearProduct } from "../actions/productQuantity";
import "./Cart.css";

//Images
import shirt from "../assets/Shirts/A-unsplash.jpg";
import denim from "../assets/Shirts/denim.jpg";

const Cart = ({ basketProps, productQuantity, clearProduct }) => {

  // function handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  let productsInCart = [];

  //GRABS EACH KEYES OF THE PRODUCTS & PASSES ALL THE PRODUCTS KEYS & VALUES
  Object.keys(basketProps.products).forEach((item) => {
    console.log(item);
    console.log(basketProps.products[item].inCart);
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
    console.log(productsInCart); //U CAN SEE :cake{price:21,name:"Chocolate Cake" etc}
  });

  //PASSES SELECTED PRODUCTS IMAGE
  const productsImages = (product) => {
    if (product.tagName === "shirt") {
      return shirt;
    } else if (product.tagName === "denim") {
      return denim;
    }
  };

  //EVERY PRODUCT DETAILS(LINE)
  productsInCart = productsInCart.map((product, index) => {
    return (
      <Fragment key={index}>
        <div className="product">
          <i
            onClick={() => clearProduct(product.tagName)}
            className="fas fa-times-circle"
          ></i>
          <img src={productsImages(product)} alt="shirt" />
          <span className="sm-hide">{product.name}</span>
        </div>
        <div className="color sm-hide">Blue</div>
        <div className="size sm-hide">S</div>
        <div className="price sm-hide">{product.price}$</div>
        <div className="quantity">
          <i
            onClick={() => productQuantity("decrease", product.tagName)}
            className="fas fa-minus-circle"
          ></i>
          <span>
        {product.numbers}
          </span>
          <i
            onClick={() => productQuantity("increase", product.tagName)}
            className="fas fa-plus-circle"
          ></i>
        </div>
        <div className="total">{product.numbers * product.price}$</div>
      </Fragment>
    );
  });

  return (
    <Container fluid>
      <div className="container-products">
        <div className="product-header">
          <h5 className="product-title">PRODUCT</h5>
          <h5 className="color sm-hide">COLOR</h5>
          <h5 className="size sm-hide">SIZE</h5>
          <h5 className="price sm-hide">PRICE</h5>
          <h5 className="quantity">QUANTITY</h5>
          <h5 className="total">TOTAL</h5>
        </div>
        <div className="products">{productsInCart}</div>
        <div className="basketTotalContainer">
          <h4 className="basketTotalTitle">Total</h4>
          <h4 className="basketTotal">{basketProps.cartCost}$</h4>
        </div>
        <div className="d-flex justify-content-center">
          <Button
            onClick={() => alert(`CONFIRM YOUR ORDER: TOTAL PRICE 9$`)}
            type="button"
            varient="primary"
          >
            ORDER NOW
          </Button>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Cart
);
