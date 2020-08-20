import React, { Component } from "react";
import { Modal, Image } from "react-bootstrap";
import { ProductConsumer } from "../../../context";
import Buttons from "../Buttons/button";

class ModalButton extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const {id, img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <Modal show={value.open} size="sm" centered>
                <Modal.Header>
                  <Modal.Title>
                    <h6>Item Added To The Cart</h6>
                  </Modal.Title>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => closeModal()}
                  >
                    <i className="fas fa-times-circle"></i>
                  </div>
                </Modal.Header>
                <Modal.Body>
                  <Image src={img} fluid className="mx-auto align-center" />
                  <h5 className="text-center">{title}</h5>
                  <h5 className="text-muted text-center">Price: {price}$</h5>
                  <div className="d-flex flex-column justify-content-center align-center">
                    <div
                      onClick={() => closeModal()}
                      className="text-center align-center"
                    >
                      <Buttons linkTo={id <= 13 ? "shirts" : "jeans"}  cta="Continue Shopping" />
                    </div>
                    <div
                      onClick={() => closeModal()}
                      className="text-center align-center"
                    >
                      <Buttons linkTo="Shopping-Cart" cta="Go to Cart" />
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
