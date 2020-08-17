import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Product.css";
import { connect } from "react-redux";
import handleDetails from "../../../actions/handleDetails";
import { ProductConsumer } from "../../../context";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <Col xs={6} lg={3} xl={3} md={3} className="mx-auto my-3">
        <Card
          style={{ borderColor: "transparent", transition: "all 1s linear" }}
        >
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/ProductCard-add-to-cart">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p disabled className="text-capitalize mb-0">
                      in cart
                    </p>
                  ) : (
                    <i className=" fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* card-footer */}
          <div
            className="card-footer d-flex justify-content-between"
            style={{ background: "transparent", borderTop: "transparent" }}
          >
            <p className="align-self-center mb-0">{title}</p>
            <h5 style={{ color: "blue", font: "italic", marginBottom: "0px" }}>
              <span style={{ marginRight: "1px" }}>$</span>
              {price}
            </h5>
          </div>
        </Card>
      </Col>
    );
  }
}

export default Product;

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
