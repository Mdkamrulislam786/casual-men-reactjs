import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Carousel,
} from "react-bootstrap";
import "./navbar.css";


const logo = () => (
    <span style={{ fontSize: "24px", color: "#fff" }}>
      <i className="fas fa-male"></i> CASUAL MEN
    </span>
);

const CMNavbar = () => {
  return (
    <div className="CMnavbar">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand as={Link} to="/">{logo()}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center"
          id="responsive-navbar-nav"
        >
          <Nav activeKey="/T-shirts">
            <Nav.Item>
              <NavDropdown
                title={<i className="fas fa-tshirt">T-shirts</i>}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item as={Link}
                  to="/T-Shirts">
                  T-Shirts
                </NavDropdown.Item>
                <NavDropdown.Item   
                href="#action/3.1"       
                >
                  Polo
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Long Sleves
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">V-Neck</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Circle Neck
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="Shirts" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Short Sleves
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Long Sleves
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Formal</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Stylish</NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="Jeans" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Casual</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Denim</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Gaberting
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="Collections" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/online-shop&all-collections">All Collections</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Shirts</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Pants</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Trends</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Popular</NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Call Now: +8801826391501</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Nav className="d-flex flex-row">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-xs-2 p-2"
            />
            <Button variant="secondary" type="submit">
              <span style={{ color: "Tomato" }}>
                <i className="fas fa-search"></i>
              </span>
            </Button>

            <Nav.Link className="p-2" eventKey={2} href="#memes">
              <span style={{ color: "white" }}>
                <i className="fas fa-shopping-cart">
                  <span>0</span>Cart
                </i>
              </span>
            </Nav.Link>
          </Form>
        </Nav>
      </Navbar>
      <div className="nd-nav">
        <Carousel indicators={false}>
          <Carousel.Item>
            <p className="navp text-center m-0 pt-1 pb-1">
              Free Deliveryfor 50$ orders
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p className="navp text-center m-0 pt-1 pb-1">
              20% off on T-Shirts
            </p>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CMNavbar;
