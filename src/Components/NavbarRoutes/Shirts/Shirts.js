import React, { Component} from "react";

//COMPONENTS
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import FeatureCard from "../../widgets/ShoppingCards/FeatureCard/FeatureCard";
import AllDressHeader from "../../widgets/AllDressHeader/AllDressHeader";
import ProductCard from "../../widgets/ShoppingCards/ProductCard/ProductCard";


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

class Shirts extends Component {
  state = {
    whichComponentToShow: "FeatureCard",
    show: false,
  };

  onClick = () => {
    this.setState({ whichComponentToShow: "ProductCard", show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    //FeatureCard components in array
    const featureCard = [
      <FeatureCard
        onClick={this.onClick}
        image={img}
        title="Sky Blue"
        price="9$"
      />,
      <FeatureCard
        onClick={this.onClick}
        image={img2}
        title="Beach Light"
        price="25.50$"
      />,
      <FeatureCard
        image={img3}
        onClick={this.onClick}
        title="Official Formal"
        price="9.99$"
      />,
      <FeatureCard
        onClick={this.onClick}
        image={img4}
        title="Denim"
        price="19$"
      />,
      <FeatureCard
        onClick={this.onClick}
        image={img5}
        title="Red Black"
        price="12$"
      />,
      <FeatureCard
        onClick={this.onClick}
        image={img6}
        title="Blue White Denim"
        price="56$"
      />,
      <FeatureCard
        onClick={this.onClick}
        image={img7}
        title="White Long Sleeve"
        price="8$"
      />,
      <FeatureCard
        onClick={this.onClick}
        image={img8}
        title="Blue Dotted"
        price="9.50$"
      />,
    ];
    //ProductCard Components in array 
    const productCard = [
      <ProductCard image={img} title="Sky Blue" price="9$" add="shirt" />,
      <ProductCard
        image={img2}
        title="Beach Light"
        price="25.50$"
        add="shirt"
      />,
      <ProductCard
        image={img3}
        title="Official Formal"
        price="9.99$"
        add="shirt"
      />,
      <ProductCard image={img4} title="Denim" price="19$" add="shirt" />,
      <ProductCard image={img5} title="Red Black" price="12$" add="shirt" />,
      <ProductCard
        image={img6}
        title="Blue White Denim"
        price="56$"
        add="shirt"
      />,
      <ProductCard
        image={img7}
        title="White Long Sleeve"
        price="8$"
        add="shirt"
      />,
      <ProductCard
        image={img8}
        title="Blue Dotted"
        price="9.50$"
        add="shirt"
      />
    ];
   
    featureCard.map((item,index)=>{
      
    })
    //Which modal to show on <FaetureCard> Click 
    let modalToShow = (modal) => {
      return (
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
                <Col lg={12}> {modal}</Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    };
    
    //WHICH COMPONENT TO SHOW
    const showComponent = (component, component2) => {
      console.log(component);
      console.log(component2);
      if (
        this.state.whichComponentToShow === "FeatureCard" &&
        component === featureCard[0]
      ) {
        return <div>{featureCard[0]}</div>;
      } else if (
        this.state.whichComponentToShow === "FeatureCard" &&
        component === featureCard[1]
      ) {
        return <div>{featureCard[1]}</div>;
      } else if (
        this.state.whichComponentToShow === "FeatureCard" &&
        component === featureCard[2]
      ) {
        return <div>{featureCard[2]}</div>;
      } else if (
        this.state.whichComponentToShow === "FeatureCard" &&
        component === featureCard[3]
      ) {
        return <div>{featureCard[3]}</div>;
      } else if (
        this.state.whichComponentToShow === "FeatureCard" &&
        component === featureCard[4]
      ) {
        return <div>{featureCard[4]}</div>;
      } else if (
        this.state.whichComponentToShow === "FeatureCard" &&
        component === featureCard[5]
      ) {
        return <div>{featureCard[5]}</div>;
      } else if (
        this.state.whichComponentToShow === "FeatureCard" &&
        component === featureCard[6]
      ) {
        return <div>{featureCard[6]}</div>;
      } else if (
        this.state.whichComponentToShow === "FeatureCard" &&
        component === featureCard[7]
      ) {
        return <div>{featureCard[7]}</div>;
      } else if (this.state.whichComponentToShow === "ProductCard" && component2 === productCard[0]) {
        return <div>{modalToShow(productCard[0])}</div>;
      }else if (this.state.whichComponentToShow === "ProductCard" && component2 === productCard[1]) {
        return <div>{modalToShow(productCard[1])}</div>;
      }
      else if (this.state.whichComponentToShow === "ProductCard" && component2 === productCard[2]) {
        return <div>{modalToShow(productCard[2])}</div>;
      }
      else if (this.state.whichComponentToShow === "ProductCard" && component2 === productCard[3]) {
        return <div>{modalToShow(productCard[3])}</div>;
      }
      else if (this.state.whichComponentToShow === "ProductCard" && component2 === productCard[4]) {
        return <div>{modalToShow(productCard[4])}</div>;
      }
      else if (this.state.whichComponentToShow === "ProductCard" && component2 === productCard[5]) {
        return <div>{modalToShow(productCard[5])}</div>;
      }
      else if (this.state.whichComponentToShow === "ProductCard" && component2 === productCard[6]) {
        return <div>{modalToShow(productCard[6])}</div>;
      }
      else if (this.state.whichComponentToShow === "ProductCard" && component2 === productCard[7]) {
        return <div>{modalToShow(productCard[7])}</div>;
      }
    };

     


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
            <Col>
              <div>{showComponent(featureCard[0],productCard[0])}</div>
            </Col>
            <Col>
              <div>{showComponent(featureCard[1],productCard[1])}</div>
            </Col>
            <Col>
              <div>{showComponent(featureCard[2],productCard[2])}</div>
            </Col>
            <Col>
              <div>{showComponent(featureCard[3],productCard[3])}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>{showComponent(featureCard[4],productCard[4])}</div>
            </Col>
            <Col>
              <div>{showComponent(featureCard[5],productCard[5])}</div>
            </Col>
            <Col>
              <div>{showComponent(featureCard[6],productCard[6])}</div>
            </Col>
            <Col>
              <div>{showComponent(featureCard[7],productCard[7])}</div>
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
