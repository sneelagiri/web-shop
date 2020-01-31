import React from "react";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";

import "./components.css";

class Cart extends React.Component {
  componentDidMount() {
    console.log("Stage 1: componentDidMount");
    // Do the data fetch...
    this.props.dispatch(fetchCart);
  }

  render() {
    const loading = !this.props.products.productsReducer;
    return (
      <div>
        <h1>Products</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          this.props.products.productsReducer.map(product => {
            return (
              <Card style={{ width: "18rem", display: "inline-block" }}>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{`€${product.price}`}</Card.Text>
                  <Button variant="primary">Read more</Button>
                </Card.Body>
              </Card>
            );
          })
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("redux state?", reduxState);
  return {
    products: reduxState
  };
}
// ...which is what we export as the default (only) export
export default connect(mapStateToProps)(Cart);
