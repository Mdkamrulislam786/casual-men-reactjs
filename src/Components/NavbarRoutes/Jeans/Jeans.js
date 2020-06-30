import React, { Component } from "react";
import { Container} from "react-bootstrap";
import FeatureCard from "../../widgets/ShoppingCards/FeatureCard/FeatureCard";


//Images
import img from '../../../assets/Jeans/Stylish-jeans.jpg';
import img2 from  '../../../assets/Jeans/Denim.jpg';
import img3 from "../../../assets/Jeans/GAsh.jpg";
import img4 from "../../../assets/Jeans/Trousers.jpg";


class Jeans extends Component {
  render() {
    
    return (
      <div className="Jeans" style={{ margin: "3rem 0rem" }}>
        <div>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              marginTop: "2rem",
            }}
          >
          CHOOSE A CATAGORY OF JEANS&PANTS 
          </h2>
        </div>
        <Container>
          <div  className="d-flex">
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
            </div>
        </Container>
      </div>
    );
  }
}

export default Jeans;
