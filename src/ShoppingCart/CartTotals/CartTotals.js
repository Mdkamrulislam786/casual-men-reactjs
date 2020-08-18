import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartTotals = ({ value }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <Fragment>
      <Container className="d-flex justify-content-end">
        <Row>
          <Col>
            <Link to="Mobiles">
              <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
              onClick={()=> clearCart()}
              >
                Clear Cart
              </button>
            </Link>
            <h5 className="text-title d-flex justify-content-end" >
                <span>subTotal : </span>
                <strong>{cartSubTotal} $</strong>
            </h5>
            <h5 className="text-title  d-flex justify-content-end">
                <span>tax : </span>
                <strong>{cartTax} $</strong>
            </h5>
            <h5 className="text-title d-flex justify-content-end">
                <span>Total : </span>
                <strong>{cartTotal} $</strong>
            </h5>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CartTotals;
