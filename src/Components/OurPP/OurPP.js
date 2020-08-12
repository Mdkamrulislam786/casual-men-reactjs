import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "./OurPP.css";
import FeatureCard from "../widgets/ShoppingCards/FeatureCard/FeatureCard";
//Images
import img from "../../assets/T-Shirts/Short-Sleeves/VNSS.jpg";
import img2 from "../../assets/Jeans/J-unsplash.jpg";
import img3 from "../../assets/Shirts/ocean-shirt.jpg";
import img4 from "../../assets/Shirts/L-unsplash.jpg";
import img5 from "../../assets/Jeans/SDenim.jpg";

class OurPP extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      adaptiveHeight: true,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },

        {
          breakpoint: 425,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          },
        },
      ],
    };

    return (
      <div className="OurPP">
        <div>
          <h2
            style={{
              textAlign: "center",
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            OUR MOST POPULAR PRODUCTS
          </h2>
        </div>
        <Container>
          <Slider {...settings}>
            <div>
              <FeatureCard image={img} title="Blue" price="9$" />
            </div>
            <div>
              <FeatureCard
                image={img2}
                title="Grey Gaverting Formal Pants"
                price="19.50$"
              />
            </div>
            <div>
              <FeatureCard image={img3} title="Beach Light" price="25.50$" />
            </div>
            <div>
              <FeatureCard image={img4} title="Official Formal" price="9.99$" />
            </div>
            <div>
              <FeatureCard image={img5} title="Light Wieght Denim" price="10$" />
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}

export default OurPP;
