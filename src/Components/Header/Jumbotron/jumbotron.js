import React, { Component } from "react";
import { Jumbotron, Carousel } from "react-bootstrap";
import "./jumbotron.css";
import Buttons from "../../widgets/Buttons/button";


class CMJumbotron extends Component {
  render() {

    return (
      <header>
        <Carousel  interval={5000}>
        <Carousel.Item>
        <div className="jumboImg1 jumbo d-flex flex-column justify-content-center text-center">
        <div id="overlay"></div>
          <Jumbotron fluid>
            
            <h1>COMFORT COLLECTION</h1>
            <p>Shop soft, Wrinkle Free, lightweight options at home comfort</p>
            <p>
              <Buttons cta="SHOP NOW" />
              <Buttons cta="COLLECTIONS" />
            </p>
          </Jumbotron>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="jumboImg2 jumbo d-flex flex-column justify-content-center text-center">
          <Jumbotron fluid>
            <div id="overlay"></div>
            <h1>CASUAL MEN EXCLUSIVE</h1>
            <p>Shop soft, Wrinkle Free, lightweight options at home comfort</p>
            <p>
              <Buttons cta="SHOP NOW" />
              <Buttons cta="COLLECTIONS" />
            </p>
          </Jumbotron>
        </div>
        </Carousel.Item>
        </Carousel>
      </header>
    );
  }
}
export default CMJumbotron;
