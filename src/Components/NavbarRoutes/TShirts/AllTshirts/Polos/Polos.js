import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import FeatureCard from "../../../../widgets/ShoppingCards/FeatureCard/FeatureCard";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./Polos.css";

//Images
import PoloHeader from "../../../../../assets/T-Shirts/Polos/Polo-header.jpg";
import img from "../../../../../assets/T-Shirts/Polos/Black_Polo.jpg";
import img2 from "../../../../../assets/T-Shirts/Polos/RedBlackP.jpg";
import img3 from "../../../../../assets/T-Shirts/Polos/StylishP.jpg";
import img4 from "../../../../../assets/T-Shirts/Polos/black-polo.jpg";
import img5 from "../../../../../assets/T-Shirts/Polos/GP.jpg";
import img6 from "../../../../../assets/T-Shirts/Polos/Grey-Polo.jpg";
import img7 from "../../../../../assets/T-Shirts/Polos/PB.jpg";
import img8 from "../../../../../assets/T-Shirts/Polos/BlueAshP.jpg";
import img9 from "../../../../../assets/polo.jpg";

class Polos extends Component {
  render() {
    const settings = {
      accessibility: true,
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      focusOnSelect: true,
      rows: 2,
    };
    return (
      <div className="AllTshirts">
        <div className="AllTshirtsHaeder">
          <Image src={PoloHeader} className="TShirtsHeaderImg  parallax" />
          <div className="overlay"></div>
          <div className="TshirtHeaderTextBlock">
            <h1>POLO WILL NEVER GO OUT OF STYLE</h1>
            <p>
              Non incididunt eu duis qui enim deserunt sint qui et occaecat.
              Ipsum occaecat dolor cillum amet sunt. Magna laboris cupidatat
              aliquip culpa nostrud sint in qui eiusmod nisi ea deserunt. Aliqua
              sunt deserunt{" "}
            </p>
          </div>
        </div>
        <div>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              marginTop: "2rem",
            }}
          >
            CHOOSE YOUR FAVOURITE ONE NOW
          </h2>
        </div>
        <Container>
          <Slider {...settings}>
            <div>
              <Link
                to="/polos"
                style={{ textDecoration: "none", color: "black" }}
              >
                <FeatureCard image={img} title="Black" />
              </Link>
            </div>
            <div>
              <FeatureCard image={img2} title="RedBlack Polo" />
            </div>
            <div>
              <FeatureCard image={img3} title="Light Short Sleeve" />
            </div>
            <div>
              <FeatureCard image={img4} title="Black/Slim Fit" />
            </div>
            <div>
              <FeatureCard image={img5} title="Green" />
            </div>
            <div>
              <FeatureCard image={img6} title="Grey" />
            </div>
            <div>
              <FeatureCard image={img7} title="Dark Black" />
            </div>
            <div>
              <FeatureCard image={img8} title="Ash+Blue" />
            </div>
            <div>
              <FeatureCard image={img9} title="White" />
            </div>
            <div>
              <FeatureCard image={img3} title="Light Short Sleeve" />
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}

export default Polos;
