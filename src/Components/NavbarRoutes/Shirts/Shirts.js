import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
//COMPONENTS
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import FeatureCard from "../../widgets/ShoppingCards/FeatureCard/FeatureCard";
import AllDressHeader from "../../widgets/AllDressHeader/AllDressHeader";
import ProductCard from "../../widgets/ShoppingCards/ProductCard/ProductCard";
import Slider from "react-slick";

//Images
import ShirtHeader from "../../../assets/Shirts/header-new.jpg";
import img from "../../../assets/Shirts/A-unsplash.jpg";
import img2 from "../../../assets/Shirts/ocean-shirt.jpg";
import img3 from "../../../assets/Shirts/L-unsplash.jpg";
import img4 from "../../../assets/Shirts/denim.jpg";
import img5 from "../../../assets/Shirts/R-unsplash.jpg";
import img6 from "../../../assets/Shirts/P-denim.jpg";
import img7 from "../../../assets/Shirts/Q-unsplash.jpg";
import img8 from "../../../assets/Shirts/Y-unsplash.jpg";
import img9 from "../../../assets/Shirts/Mens-Popover.jpg";
import img10 from "../../../assets/Shirts/blur-shirt.jpg";
import shirts from "../../../assets/Shirts/A-unsplash.jpg";

class Shirts extends Component {
  state = {
    whichComponentToShow: "FeatureCard",
    show: false,
    setShow: false,
  };

  onClick = () => {
    this.setState({ whichComponentToShow: "ProductCard", show: true });
  };

  handleClose = () => {this.setState({setShow:false})};
  handleShow = () =>{this.setState({setShow:true})};

  render() {
    const featureCard = (
      <FeatureCard
        OnClick={this.onClick}
        image={img}
        title="Sky Blue"
        price="9$"
      />
    );
    const productCard = (
      <ProductCard image={shirts} title="Sky Blue" price="9$" add="shirt" />
    );

    //WHICH COMPONENT TO SHOW
    const ShowComponent = () => {
      if (this.state.whichComponentToShow === "FeatureCard") {
        return <div>{featureCard}</div>;
      } else if (this.state.whichComponentToShow === "ProductCard") {
        return (
          <div>
            <Modal
              show={this.state.show}
              onHide={this.handleClose}
              centered
              size="xl"
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <Container fluid>
                  <Row>
                    <Col lg={12}> {productCard}</Col>
                  </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
    };

    // const settings = {
    //   accessibility: true,
    //   dots: true,
    //   infinite: true,
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   adaptiveHeight: true,
    //   autoplay: true,
    //   speed: 1000,
    //   autoplaySpeed: 3000,
    //   focusOnSelect: true,
    //   rows: 2,
    // };

    return (
      <div className="Shirts" style={{ margin: "3rem 0rem" }}>
        <div>
          <AllDressHeader
            Image={ShirtHeader}
            h1="SHIRTS FOR MEN"
            para="Id adipisicing elit adipisicing Lorem. Laborum deserunt laboris ex aliqua deserunt ipsum irure culpa pariatur in esse esse quis. Laboris incididunt enim velit reprehenderit irure. Do est deserunt sint."
            h2="CHOOSE YOUR FAVOURITE SHIRT NOW"
          />
        </div>
        <Container>
          <Row>
            <div>{ShowComponent()}</div>

            <Col>
              <FeatureCard image={img2} title="Beach Light" price="25.50$" />
            </Col>
            <Col>
              <div>
                <FeatureCard
                  image={img3}
                  title="Official Formal"
                  price="9.99$"
                />
              </div>
            </Col>
            <Col>
              <div>
                <FeatureCard image={img4} title="Denim" price="19$" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <FeatureCard image={img5} title="Red Black" price="12$" />
              </div>
            </Col>
            <Col>
              <div>
                <FeatureCard
                  image={img6}
                  title="Blue White Denim"
                  price="56$"
                />
              </div>
            </Col>
            <Col>
              <div>
                <FeatureCard
                  image={img7}
                  title="White Long Sleeve"
                  price="8$"
                />
              </div>
            </Col>
            <Col>
              <div>
                <FeatureCard image={img8} title="Blue Dotted" price="9.50$" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Shirts;

{
  /* <div>
              <FeatureCard image={img9} title="Mens popover" price="30$" />
            </div>
            <div>
              <FeatureCard image={img10} title="Strapped" price="21$" />
            </div> */
}
