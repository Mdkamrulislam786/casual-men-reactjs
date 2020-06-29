import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Buttons from '../widgets/Buttons/button'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <Container fluid>
          <Row>
            <Col>
              <div>
                <p style={{ fontSize: "30px", fontWeight:'700', color: "#61b4d6" }}>
                  <i className="fas fa-male"></i> CASUAL MEN
                </p>
                <p>121.2173.314</p>
                <div>
                <i className="fab fa-facebook-square fa-2x icon"></i>
                <i className="fab fa-instagram fa-2x icon"></i>
                <i className="fab fa-twitter-square fa-2x icon"></i>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                  <h4>About Casual Men</h4>
                  <ul>
                      <li>Our Story</li>
                      <li>Career</li>
                      <li>Corporate Responsibilities</li>
                      <li>Corporate Sales</li>
                      <li>International</li>
                  </ul>
              </div>
            </Col>
            <Col>
              <div>
              <h4>Customer Service</h4>
                  <ul>
                      <li>Gift Cards</li>
                      <li>Shiping & Return</li>
                      <li>Order Status</li>
                      <li>Fit&Size chart</li>
                      <li>Contact Us</li>
                  </ul>
              </div>
            </Col>
            <Col>
              <div>
                  <h4>WANNA TALK ?</h4>
                  <Buttons cta="Contact us"></Buttons>
              </div>
            </Col>
            <Col>
            <div>
                  <h5>FIND A SHOP LOCATION</h5>
                  <Buttons cta="SEARCH"></Buttons>
              </div>
            </Col>
          </Row>
          <Row>
            <div>
              {" "}
              @Copywrite 2020 Casual Men  | Terms & Condition | Privacy & Policy
            </div>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
