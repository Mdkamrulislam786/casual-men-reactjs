import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import OurPP from '../../OurPP/OurPP'
import TShirts from '../TShirts/TShirts'
import './Collections.css'
import Shirts from '../Shirts/Shirts'
import Jeans from '../Jeans/Jeans'

const Collections = () => {
  return (
    <div className="Collections">
      <Container>
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col>
              <Nav   className="d-flex flex-row justify-content-center text-center">
                <Nav.Item>
                  <Nav.Link eventKey="first">T-Shirts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Shirts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Jeans & Pants</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Most Popular</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Trends</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth">Exclusive Products</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            </Row>
            <Row>
            <Col>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <TShirts/>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Shirts />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Jeans />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                <OurPP />
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <OurPP />
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <OurPP />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default Collections;
