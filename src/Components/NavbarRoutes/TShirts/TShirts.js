import React, { Component } from "react";
import { Container } from "react-bootstrap";
import FeatureCard from "../../widgets/ShoppingCards/FeatureCard/FeatureCard";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./TShirts.css";

//Images
import img from "../../../assets/T-Shirts/Black_Polo.jpg";
import img2 from "../../../assets/T-Shirts/v-neck-long.jpg";
import img3 from "../../../assets/T-Shirts/v-neck-t-shirt.jpg";
import img4 from "../../../assets/T-Shirts/grey-v-neck.jpg";
import img5 from "../../../assets/T-Shirts/C-unsplash.jpg";

class TShirts extends Component {
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
      <div className="MainCatagory">
        <div>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              marginTop: "2rem",
            }}
          >
            CHOOSE A CATAGORY OF T-SHIRTS
          </h2>
        </div>
        <Container>
          <Slider {...settings}>
            <div>
              <Link
                to="/polos"
                style={{ textDecoration: "none", color: "black" }}
              >
                <FeatureCard image={img} title="Polos" />
              </Link>
            </div>
            <div>
              <FeatureCard image={img2} title="Long Sleeves" />
            </div>
            <div>
              <FeatureCard image={img3} title="Short Sleeve" />
            </div>
            <div>
              <FeatureCard image={img4} title="V-Neck" />
            </div>
            <div>
              <FeatureCard image={img5} title="Circle Neck" />
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}

export default TShirts;
