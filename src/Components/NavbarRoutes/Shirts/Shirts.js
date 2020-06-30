import React, { Component } from "react";
import { Container } from "react-bootstrap";
import FeatureCard from "../../widgets/ShoppingCards/FeatureCard/FeatureCard";
import Slider from "react-slick";

//Images
import img from "../../../assets/Shirts/A-unsplash.jpg";
import img2 from "../../../assets/Shirts/ocean-shirt.jpg";
import img3 from "../../../assets/Shirts/L-unsplash.jpg";
import img4 from "../../../assets/Shirts/denim.jpg";
import img5 from "../../../assets/Shirts/R-unsplash.jpg";


class Shirts extends Component {
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
    };
    return (
      <div className="Shirts" style={{ margin: "3rem 0rem" }}>
        <div>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              marginTop: "2rem",
            }}
          >
            CHOOSE A CATAGORY OF SHIRTS
          </h2>
        </div>
        <Container>
          <Slider {...settings}>
            <div>
              <FeatureCard image={img} title="Short Sleeves" />
            </div>
            <div>
              <FeatureCard image={img2} title="Long Sleeves" />
            </div>
            <div>
              <FeatureCard image={img3} title="Formal" />
            </div>
            <div>
              <FeatureCard image={img4} title="Denim" />
            </div>
            <div>
              <FeatureCard image={img5} title="Stylish" />
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}

export default Shirts;
