import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { showProductDetails } from "../../../actions/addAction";
import { storeProducts, detailProduct } from "../../../data";

import shirt from "../../../assets/Shirts/A-unsplash.jpg";

class MobileList extends Component {
  render() {
    return (
      <div>
        <Container style={{ padding: "30px" }}>
          <div
            onClick={() =>
              console.log(
                this.props.showProductDetails(this.props.mobileProps.mobiles)
              )
            }
          >
            <Image src={shirt} height="250px" width="300px" />
          </div>

          {/* { mobileList.map((items)=>{
                    return console.log(items);
                })} */}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
  mobileProps: state.mobileState,
});
export default connect(mapStateToProps, { showProductDetails })(MobileList);
