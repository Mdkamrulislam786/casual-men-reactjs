import React, { Fragment } from "react";
import { Container, Button } from "react-bootstrap";
import "./Cart.css";

//Images
import shirt from "../assets/Shirts/A-unsplash.jpg";

const Cart = () => {
  let productsInCart = [];

  productsInCart = () => {
    return (
      <Fragment>
        <div className="product">
          <i
            // onClick={() => clearProduct(product.tagName)}
            className="fas fa-times-circle"
          ></i>
          <img src={shirt} alt="shirt" />
          <span className="sm-hide">Shirt</span>
        </div>
        <div className="color sm-hide">Blue</div>
        <div className="size sm-hide">S</div>
        <div className="price sm-hide">9$</div>
        <div className="quantity">
          <i
            // onClick={() => productQuantity("decrease", product.tagName)}
            className="fas fa-minus-circle"
          ></i>
          <span>
            <form type="input">0</form>
          </span>
          <i
            // onClick={() => productQuantity("increase", product.tagName)}
            className="fas fa-plus-circle"
          ></i>
        </div>
        <div className="total">9$</div>
      </Fragment>
    );
  };

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
        <div className="products">{productsInCart()}</div>
        <div className="basketTotalContainer">
          <h4 className="basketTotalTitle">Total</h4>
          <h4 className="basketTotal">9$</h4>
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

export default Cart;
