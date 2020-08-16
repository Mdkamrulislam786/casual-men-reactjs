import React, { Component, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { connect } from "react-redux";
import handleDetails from "../../../actions/handleDetails";
import Product from "./Product";
import AllDressHeader from "../../widgets/AllDressHeader/AllDressHeader";
import { setstate } from "../../../reducers/mobileReducer";

//CPNTCT API
import { ProductConsumer } from "../../../context";
//Images
import ShirtHeader from "../../../assets/Shirts/header-new.jpg";

class ProductList extends Component {
  render() {
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
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return (
                    <Product
                      key={product.id}
                      product={product}
                    />
                  );
                });
              }}
            </ProductConsumer>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mobileProps: state.mobileState,
});
export default ProductList;

{
  /* { mobileList.map((items)=>{
                    return console.log(items);
                })} 
                
                */
}
{
  /* <Image src={shirt} height="250px" width="300px" /> */
}
