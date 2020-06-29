import React from "react";
import { Container, Row, Col, Tabs, Tab, Sonnet, Nav } from "react-bootstrap";
import OurPP from '../../OurPP/OurPP'
import TShirts from '../../NavbarRoutes/T-Shirts/TShirts'
import './Collections.css'

const Collections = () => {
  return (
    <div className="Collections">
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col>
              <Nav variant="tabs"  className="d-flex flex-row justify-content-center text-center">
                <Nav.Item>
                  <Nav.Link eventKey="second">T-Shirts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Shirts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Jeans & Pants</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="first">Most Popular</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Trends</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            </Row>
            <Row>
            <Col>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <OurPP />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <TShirts/>
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
