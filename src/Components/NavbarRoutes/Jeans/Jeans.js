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
import img4 from "../../../assets/Jeans/Trousers.jpg";

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
    };

    return (
      <div className="Jeans" style={{ margin: "3rem 0rem" }}>
        <div>
          <AllDressHeader
            Image={jeansHeader}
            h1="JEANS FOR MEN"
            para="Eiusmod laborum deserunt dolor sunt. Reprehenderit excepteur ad minim nostrud. Minim aliqua quis dolor sint do aliquip dolore esse esse non dolor aliqua eiusmod. Consequat eu minim commodo fugiat. Nulla ."
            h2="CHOOSE YOUR FAVVOURITE JEANS NOW"
          />
        </div>
        <Container>
          <Slider {...settings}>
            <div>
              <FeatureCard image={img} title="Jeans" />
            </div>
            <div>
              <FeatureCard image={img2} title="Denim" />
            </div>
            <div>
              <FeatureCard image={img3} title="Gaberting" />
            </div>
            <div>
              <FeatureCard image={img4} title="Trousers" />
            </div>

            <div>
              <FeatureCard image={img} title="Jeans" />
            </div>
            <div>
              <FeatureCard image={img2} title="Denim" />
            </div>
            <div>
              <FeatureCard image={img3} title="Gaberting" />
            </div>
            <div>
              <FeatureCard image={img4} title="Trousers" />
            </div>
            <div>
              <FeatureCard image={img3} title="Gaberting" />
            </div>
            <div>
              <FeatureCard image={img4} title="Trousers" />
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}

export default Jeans;
