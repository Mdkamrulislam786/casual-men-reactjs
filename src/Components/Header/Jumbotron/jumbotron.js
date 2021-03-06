import React, { Component } from "react";
import { Jumbotron, Carousel } from "react-bootstrap";
import "./jumbotron.css";
import Buttons from "../../widgets/Buttons/button";
import { motion } from "framer-motion";

class CMJumbotron extends Component {
  render() {
    return (
      <header>
        <Carousel interval={5000}>
          <Carousel.Item>
            <motion.div
              initial={{ opacity: 0.5, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeIn", duration: 1 }}
              className="jumboImg1 jumbo d-flex flex-column justify-content-center text-center"
            >
              <div id="overlay"></div>
              <Jumbotron fluid>
                <h1>COMFORT COLLECTION</h1>
                <p>
                  Shop soft, Wrinkle Free, lightweight options at home comfort
                </p>
                <p>
                  <Buttons
                    cta="SHOP NOW"
                    linkTo="/online-shop&all-collections"
                  />
                  <Buttons
                    cta="COLLECTIONS"
                    linkTo="/online-shop&all-collections"
                  />
                </p>
              </Jumbotron>
            </motion.div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="jumboImg2 jumbo d-flex flex-column justify-content-center text-center">
              <Jumbotron fluid>
                <div id="overlay"></div>
                <h1>CASUAL MEN EXCLUSIVE</h1>
                <p>
                  Shop soft, Wrinkle Free, lightweight options at home comfort
                </p>
                <p>
                  <Buttons
                    cta="SHOP NOW"
                    linkTo="/online-shop&all-collections"
                  />
                  <Buttons cta="COLLECTIONS" linkTo="" />
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
