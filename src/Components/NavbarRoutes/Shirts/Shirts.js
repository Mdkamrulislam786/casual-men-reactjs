import React, { Component } from "react";
import { Container } from "react-bootstrap";
import FeatureCard from "../../widgets/ShoppingCards/FeatureCard/FeatureCard";
import AllDressHeader from '../../widgets/AllDressHeader/AllDressHeader'
import Slider from "react-slick";

//Images
import ShirtHeader from '../../../assets/Shirts/header-new.jpg'
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
      rows:2
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
          <Slider {...settings}>
            <div>
              <FeatureCard image={img} title="Sky Blue" price="9$" linkTo="/ProductCard-add-to-cart"/>
            </div>
            <div>
              <FeatureCard image={img2} title="Beach Light" price="25.50$"/>
            </div>
            <div>
              <FeatureCard image={img3} title="Official Formal" price="9.99$"/>
            </div>
            <div>
              <FeatureCard image={img4} title="Denim" price="19$" />
            </div>
            <div>
              <FeatureCard image={img5} title="Red Black" price="12$"/>
            </div>
            <div>
              <FeatureCard image={img6} title="Blue White Denim" price="56$"/>
            </div>
            <div>
              <FeatureCard image={img7} title="White Long Sleeve" price="8$" />
            </div>
            <div>
              <FeatureCard image={img8} title="Blue Dotted" price="9.50$"/>
            </div>
            <div>
              <FeatureCard image={img9} title="Mens popover" price="30$"/>
            </div>
            <div>
              <FeatureCard image={img10} title="Strapped" price="21$"/>
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}

export default Shirts;
