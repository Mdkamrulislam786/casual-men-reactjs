import React, { Component, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { connect } from "react-redux";
import handleDetails from "../../../actions/handleDetails";
import Product from "./Product";
import AllDressHeader from "../../widgets/AllDressHeader/AllDressHeader";
import { setstate } from "../../../reducers/mobileReducer";

//Images
import ShirtHeader from "../../../assets/Shirts/header-new.jpg";
import shirt from "../../../assets/Shirts/A-unsplash.jpg";

class ProductList extends Component {
  state = {
    products: this.props.mobileProps.products,
    detailProduct: this.props.mobileProps.detailProduct,
  };



  render() {
    let products = this.state.products;
    let detailProduct = this.props.mobileProps.detailProduct;
    {
      console.log(this.props.mobileProps);
    }
    return (
      <div>
        <Container style={{ padding: "30px" }}>
          <AllDressHeader
            Image={ShirtHeader}
            h1="SHIRTS FOR MEN"
            para="Id adipisicing elit adipisicing Lorem. Laborum deserunt laboris ex aliqua deserunt ipsum irure culpa pariatur in esse esse quis. Laboris incididunt enim velit reprehenderit irure. Do est deserunt sint."
            h2="CHOOSE YOUR FAVOURITE SHIRT NOW"
          />
          <Row>
            {products.map((product) => {
              return <Product key={product.id} product={product} handleDetails={this.handleDetails} />;
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mobileProps: state.mobileState,
});
export default connect(mapStateToProps, { handleDetails })(ProductList);

{
  /* { mobileList.map((items)=>{
                    return console.log(items);
                })} 
                
                */
}
{
  /* <Image src={shirt} height="250px" width="300px" /> */
}

// getItem = (id) => {
//   const product = this.state.products.find((item) => item.id === id);
//   return product;
// };

// handleDetails = (id) => {
//   const product = this.getItem(id);
//   this.setState(() => {
//     return { detailProduct: product };
//   });
// };

// addToCart = (id) => {
//   console.log(`ID is ${id}`);
// };