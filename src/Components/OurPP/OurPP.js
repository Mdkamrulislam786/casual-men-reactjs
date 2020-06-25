import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Card } from "react-bootstrap";
import Buttons from "../widgets/Buttons/button";
import "./OurPP.css";
import img from "../../assets/Shirts/A-unsplash.jpg";

class OurPP extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: true,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };

    return (
      <div className="OurPP">
        <div>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            OUR MOST POPULAR PRODUCTS
          </h2>
        </div>
        <Container>
          <Slider {...settings}>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} className="ppImage" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text>
                  <span>
                      <Buttons cta="Add To Cart" /><span style={{marginLeft: '15px', fontSize:'24px'}} >9$</span>
                  </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} className="ppImage" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text>
                  <span>
                      <Buttons cta="Add To Cart" /><span style={{marginLeft: '15px', fontSize:'24px'}} >9$</span>
                  </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} className="ppImage" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text>
                  <span>
                      <Buttons cta="Add To Cart" /><span style={{marginLeft: '15px', fontSize:'24px'}} >9$</span>
                  </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} className="ppImage" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text>
                  <span>
                      <Buttons cta="Add To Cart" /><span style={{marginLeft: '15px', fontSize:'24px'}} >9$</span>
                  </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} className="ppImage" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text>
                  <span>
                      <Buttons cta="Add To Cart" /><span style={{marginLeft: '15px', fontSize:'24px'}} >9$</span>
                  </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}

export default OurPP;
