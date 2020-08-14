import React, { useEffect } from "react";
import { connect } from "react-redux";
import getNumbers from "../../../actions/getAction";
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

const CMNavbar = (props) => {
  console.log(props);

  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <div className="CMnavbar">
      <Navbar collapseOnSelect expand="xl" variant="dark">
        <Navbar.Brand as={Link} to="/">
          {logo()}
        </Navbar.Brand>
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
                <NavDropdown.Item as={Link} to="/T-Shirts">
                  T-Shirts
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/polos">
                  Polo
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Circle-neck">
                  Circle Neck
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Vneck">
                  V-Neck
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/LongSleeves">
                  Long Sleeves
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ShortSleeves">
                  Short Sleeves
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item style={{ textDecoration: "none", color: "black" }}>
              <Nav.Link as={Link} to="/shirts">
                {" "}
                Shirts
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ textDecoration: "none", color: "black" }}>
              <Nav.Link as={Link} to="/jeans">
                Jeans
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ textDecoration: "none", color: "black" }}>
              <Nav.Link as={Link} to="/online-shop&all-collections">
                All Collections
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ textDecoration: "none", color: "black" }}>
              <Nav.Link as={Link} to="/Mobiles">
                Mobiles
              </Nav.Link>
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

            <Nav.Link
              as={Link}
              to="/Shopping-Cart"
              className="p-2"
              eventKey={2}
            >
              <span style={{ color: "white" }}>
                <i className="fas fa-shopping-cart">
                  <span>{props.basketProps.basketNumbers}</span>Cart
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

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(CMNavbar);
