import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Card } from "react-bootstrap";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <Col xs={6} lg={3} xl={3} md={3} className="mx-auto my-3">
        <Card>
          <div
            className="img-container p-5"
            onClick={() => console.log("you click in img container")}
          >
            <Link to="/ProductCard-add-to-cart">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log("added to the cart");
              }}
            >
            { inCart ? <p disabled className="text-capitalize mb-0">in cart</p> :(
            <i className=" fas fa-cart-plus"/>)}
            </button>
          </div>
        </Card>
      </Col>
    );
  }
}
