import React, { Component } from "react";
import { Modal, Button, Image, Container, Row, Col } from "react-bootstrap";
import { ProductConsumer } from "../../../context";
import Buttons from "../Buttons/button";

class ModalButton extends Component {
  state = {
    open: true,
  };
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <Modal show={this.state.open} size="sm" centered>
                <Modal.Header>
                  <Modal.Title><h6>Item Added To The Cart</h6></Modal.Title>
                  <div  onClick={() => closeModal()}><i className="fas fa-times-circle"></i></div>
                </Modal.Header>
                <Modal.Body>
                  <Image src={img} fluid  className="mx-auto align-center"/>
                  <h5 className="text-center">{title}</h5>
                  <h5 className="text-muted text-center">Price: {price}$</h5>
                  <div className="d-flex flex-column justify-content-center align-center">
                  <div onClick={() => closeModal()} className="text-center align-center">
                    <Buttons linkTo="Mobiles" cta="Continue Shopping" />
                  </div>
                  <div onClick={() => closeModal()} className="text-center align-center">
                    <Buttons linkTo="Cart" cta="Go to Cart" />
                  </div>
                  </div>
                </Modal.Body>
              </Modal>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
export default ModalButton;


