import React from "react";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { removeProduct } from "../store/reducers/cart/actions";

import "./components.css";

class Cart extends React.Component {
  componentDidMount() {
    console.log("Stage 1: componentDidMount");
    // Do the data fetch...
    // console.log(this.props.cart.cartItems);
  }

  handleRemoveClick = id => {
    console.log("Stage 1: Initiate Remove from Cart");
    this.props.dispatch(removeProduct(id));
  };

  render() {
    const cartItems = this.props.cart.cartItems;
    const empty = this.props.cart.cartItems.length === 0;
    return (
      <div>
        <h1>Cart</h1>
        {empty ? (
          <h2>Your cart is empty</h2>
        ) : (
          <div>
            {cartItems.map(cartItem => {
              return (
                <Card style={{ width: "18rem", display: "inline-block" }}>
                  <Card.Img
                    className="cartImage"
                    variant="top"
                    src={cartItem.imageUrl}
                  />
                  <Card.Body>
                    <Card.Title>{cartItem.name}</Card.Title>
                    <Card.Text>{`€${cartItem.price}`}</Card.Text>
                    <Button
                      variant="danger"
                      onClick={() => this.handleRemoveClick(cartItem.id)}
                    >
                      Remove from cart
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
            <h2>
              <br></br>
              Total: €{" "}
              {cartItems.reduce((total, cartItem) => {
                return total + cartItem.price;
              }, 0)}
            </h2>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("redux state?", reduxState);
  return {
    cart: reduxState.cartReducer
  };
}
// ...which is what we export as the default (only) export
export default connect(mapStateToProps)(Cart);
