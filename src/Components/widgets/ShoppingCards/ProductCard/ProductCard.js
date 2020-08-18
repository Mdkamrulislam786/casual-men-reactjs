import React, { Component} from "react";
import { Container, Row, Col, Image, Tab, Nav,Modal } from "react-bootstrap";

//COMPONENTS
import payoneer from "../../../../assets/Payoneer_logo.svg.png";
import OurPP from "../../../OurPP/OurPP";
import ActionBtn from "../../Buttons/ActionBtn/ActionBtn";
import Buttons from "../../Buttons/button";
import "./ProductCard.css";

//React Context API
import { ProductConsumer } from "../../../../context";
//Image
import sizechart from "../../../../assets/size-chart.png";

class ProductCard extends Component {
  state={
    open:true
  }

  ShowSizeChart = ()=>{
    return(
      <Modal
      show={this.state.open}
      size="sm"
      >
        <Modal.Body>
          <Image src={sizechart} fluid />
        </Modal.Body>
      </Modal>
    )
  }

  render() {
    
    
    console.log(this.props);

    return (
      <ProductConsumer>
        {(value) => {
          const { id, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div
              className="ProductCard"
              style={{ marginTop: "3rem", marginBottom: "3rem" }}
            >
              <Container>
                <Row>
                  <Col className="d-flex justify-content-center text-center align-center">
                    <Image
                      src={img}
                      style={{
                        height: "625px",
                        width: "425px",
                        margin: "5px",
                        cursor: "zoom-in",
                      }}
                    />
                  </Col>
                  <Col>
                    <div>
                      <h3>{title}</h3>
                      <b>Price:</b>
                      <span> {price}$</span>
                      <p>
                        Pay with{" "}
                        <img
                          src={payoneer}
                          alt="product"
                          style={{
                            height: "24px",
                            padding: "0px 2px",
                            display: "inline-block",
                          }}
                        />{" "}
                        to get 5% off
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: "goldenrod",
                        height: "3px",
                        width: "90%",
                      }}
                    ></div>
                    <div style={{ margin: "7px 0px" }}>
                      <b>Color:</b> <span> SkyBlue</span>
                      <div
                        className="colors-circle"
                        style={{ margin: "7px 0px" }}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div className="productSizes">
                      <b>Sizes: </b>
                      <br />
                      <p>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>

                        <button type="button" varient="info"  onClick={()=> this.ShowSizeChart()}>
                          View size chart
                        </button>
                      </p>
                    </div>

                    {/* ADDTOCART-BUTTON */}
                    <div className="d-flex">
                      <ActionBtn
                        cta={inCart ? "IN CART" : "ADD TO CART"}
                        onClick={() => {
                          value.addToCart(id);
                        }}
                        // onClick={() => props.addBasket(props.add)}
                      />
                      <Buttons linkTo="Mobiles" cta="Back To Products" />
                    </div>

                    <div style={{ color: "black", margin: "10px 0px" }}>
                      <Tab.Container defaultActiveKey="first">
                        <Row>
                          <Col>
                            <Nav className="d-flex flex-row justify-content-center text-center">
                              <Nav.Item>
                                <Nav.Link eventKey="first">Details</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="second">
                                  Description
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="third">Reviews</Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Tab.Content>
                              <Tab.Pane eventKey="first">
                                <ul>
                                  <li>150 GSM striped knit</li>
                                  <li>Crew neckline</li>
                                  <li>Light weight</li>
                                  <li>Super Comfortabble</li>
                                  <li>Best Quality 100% Guaranteed</li>
                                </ul>
                              </Tab.Pane>
                              <Tab.Pane eventKey="second">
                                <div className="productDescription">
                                  <h3>About The Product</h3>
                                  <p>{info}</p>
                                </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="third">
                                <div>5***** : 102person</div>
                                <div>4**** : 12person</div>
                                <div>3*** : 4person</div>
                              </Tab.Pane>
                            </Tab.Content>
                          </Col>
                        </Row>
                      </Tab.Container>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <div
                    style={{
                      margin: "2rem 0px",
                      textAlign: "center",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "2rem",
                        textTransform: "uppercase",
                        marginBottom: "2rem",
                      }}
                    >
                      Related Products
                    </h3>
                    <OurPP />
                  </div>
             
                </Row>
              </Container>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default ProductCard;


