import React from "react";
import { Container, Row, Col, Image, Tab, Nav } from "react-bootstrap";

//COMPONENTS
import payoneer from "../../../../assets/Payoneer_logo.svg.png";
import OurPP from "../../../OurPP/OurPP";
import ActionBtn from "../../Buttons/ActionBtn/ActionBtn";
import ModalButton from "../../ModalButton/ModalButton";
import "./ProductCard.css";
//REDUX
import { addBasket } from "../../../../actions/addAction";
import { connect } from "react-redux";

//Image
import sizechart from '../../../../assets/size-chart.png'


const ProductCard = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <div
      className="ProductCard"
      style={{ marginTop: "3rem", marginBottom: "3rem" }}
    >
      <Container>
        <Row>
          <Col className="d-flex justify-content-center text-center align-center">
            <Image
              src={props.image}
              className="productImage"
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
              <h3>{props.title}</h3>
              <b>Price:</b>
              <span> {props.price}</span>
              <p>
                Pay with{" "}
                <img
                  src={payoneer}
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
              <div className="colors-circle" style={{ margin: "7px 0px" }}>
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

                <a href="#" onClick={() => setModalShow(true)}>
                  View size chart
                </a>
              </p>
            </div>
            
            {/* ADDTOCART-BUTTON */}
            <ActionBtn
              cta="ADD TO CART"
              onClick={() => props.addBasket(props.add)}
            />

            <div style={{ color: "black", margin: "10px 0px" }}>
              <Tab.Container defaultActiveKey="first">
                <Row>
                  <Col>
                    <Nav className="d-flex flex-row justify-content-center text-center">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Details</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Description</Nav.Link>
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
                          <p>
                            Aliqua laboris amet in irure culpa voluptate
                            consequat proident commodo fugiat quis laborum. Id
                            adipisicing culpa tempor consequat consectetur
                            dolore minim ipsum.
                            <br />
                            Nisi incididunt officia labore adipisicing ex quis
                            nulla elit duis nulla ea cupidatat magna amet.
                            Labore culpa ad eu nulla exercitation labore dolor
                            minim cillum deserunt aliquip est mollit
                            consectetur. Aute et do pariatur labore. Eiusmod
                            occaecat nulla voluptate incididunt ea tempor quis
                            aute exercitation excepteur.
                          </p>
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
          <ModalButton  image={sizechart} show={modalShow} onHide={() => setModalShow(false)} />
        </Row>
      </Container>
    </div>
  );
};

export default connect(null, { addBasket }) (ProductCard);
