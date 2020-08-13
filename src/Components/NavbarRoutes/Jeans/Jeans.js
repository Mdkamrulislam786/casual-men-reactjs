import React, { Component } from "react";
import { Container } from "react-bootstrap";
import FeatureCard from "../../widgets/ShoppingCards/FeatureCard/FeatureCard";
import AllDressHeader from "../../widgets/AllDressHeader/AllDressHeader";
import Slider from "react-slick";

//Images
import jeansHeader from "../../../assets/Jeans/jeans-collections.jpg";
import img from "../../../assets/Jeans/Stylish-jeans.jpg";
import img2 from "../../../assets/Jeans/Denim.jpg";
import img3 from "../../../assets/Jeans/GAsh.jpg";
import img4 from "../../../assets/Jeans/Black-jeans.jpg";
import img5 from "../../../assets/Jeans/GBrown.jpg";
import img6 from "../../../assets/Jeans/S-jeans.jpg";
import img7 from "../../../assets/Jeans/SDenim.jpg";
import img8 from "../../../assets/Jeans/Trousers.jpg";
import img9 from "../../../assets/Jeans/GS.jpg";
import img10 from "../../../assets/Jeans/J-unsplash.jpg";

class Jeans extends Component {
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
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
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
      ]
    };

    return (
      <div className="Jeans" style={{ margin: "3rem 0rem" }}>
        <div>
          <AllDressHeader
            Image={jeansHeader}
            h1="JEANS FOR MEN"
            para="Eiusmod laborum deserunt dolor sunt. Reprehenderit excepteur ad minim nostrud. Minim aliqua quis dolor sint do aliquip dolore esse esse non dolor aliqua eiusmod. Consequat eu minim commodo fugiat. Nulla ."
            h2="CHOOSE YOUR FAVOURITE JEANS NOW"
          />
        </div>
        <Container>
          <Slider {...settings}>
            <div>
              <FeatureCard image={img} title="Jeans" price="19.99$" />
            </div>
            <div>
              <FeatureCard image={img2} title="Denim" price="22.50$" />
            </div>
            <div>
              <FeatureCard image={img3} title="Gaberting" price="13.50$" />
            </div>
            <div>
              <FeatureCard image={img4} title="Black Jeans" price="19.50$" />
            </div>

            <div>
              <FeatureCard image={img5} title="Brown Gaberting" price="12$" />
            </div>
            <div>
              <FeatureCard image={img6} title="Torn T2" price="20.99$" />
            </div>
            <div>
              <FeatureCard image={img7} title="LightWieght Denim" price="10$" />
            </div>
            <div>
              <FeatureCard image={img8} title="Trousers" price="19$" />
            </div>
            <div>
              <FeatureCard image={img9} title="White Gaberting" price="9.50$" />
            </div>
            <div>
              <FeatureCard
                image={img10}
                title="Grey Gaverting Formal Pants"
                price="19.50$"
              />
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}

export default Jeans;
