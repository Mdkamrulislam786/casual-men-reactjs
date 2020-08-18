import React, { Fragment } from "react";
import { ProductConsumer } from "../context";
import EmptyCart from "./EmptyCart/EmptyCart";
import CartList from "./CartList/CartList";
import CartColumns from './CartColumns/CartColumns'
import CartTotals from './CartTotals/CartTotals'
import "./Cart.css";


const Cart = () => {
  return (
    <section>
      <ProductConsumer>
        {(value) => {
          const { cart } = value;

          if (cart.length > 0) {
            return (
              <Fragment>
                <div>
                  <h2
                    style={{
                      textAlign: "center",
                      marginTop: "30px",
                      marginBottom: "20px",
                      fontFamily: "Robotto"
                    }}
                  >
                    Your Cart
                  </h2>
                </div>
                    <CartColumns/>
                    <CartList value={value}/>
                    <CartTotals value={value}/>
              </Fragment>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    </section>
  );
};

export default Cart;
