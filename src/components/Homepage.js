// src/components/DevelopersList.js
import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/reducers/products/actions";
import { fetchCart } from "../store/reducers/cart/actions";
import { Card, Button } from "react-bootstrap";

import "./components.css";
import { bindActionCreators } from "redux";

class Homepage extends React.Component {
  componentDidMount() {
    console.log("Stage 1: componentDidMount");
    // Do the data fetch...
    this.props.dispatch(fetchProducts);
  }

  handleAddClick = id => {
    this.props.fetchCart(this.props.products.productsReducer[19]);
  };

  render() {
    const loading = !this.props.products.productsReducer;
    return (
      <div>
        <h1 className="homepageTitle">Choose Your Smartphone.</h1>
        <h2 className="featuredProducts">Featured Products</h2>
        <p>
          These are some of the best selling phones on the market right now! Buy
          one while supplies last!
        </p>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <Card style={{ width: "18rem", display: "inline-block" }}>
              <Card.Img
                variant="top"
                src={this.props.products.productsReducer[19].imageUrl}
              />
              <Card.Body>
                <Card.Title>
                  {this.props.products.productsReducer[19].name}
                </Card.Title>
                <Card.Text>{`€${this.props.products.productsReducer[19].price}`}</Card.Text>
                <Button variant="primary">Read more</Button>
                <Button
                  variant="secondary"
                  className="addToCartBtn"
                  onClick={() => {
                    this.handleAddClick(
                      this.props.products.productsReducer[19].id
                    );
                  }}
                >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", display: "inline-block" }}>
              <Card.Img
                variant="top"
                src={this.props.products.productsReducer[7].imageUrl}
              />
              <Card.Body>
                <Card.Title>
                  {this.props.products.productsReducer[7].name}
                </Card.Title>
                <Card.Text>{`€${this.props.products.productsReducer[7].price}`}</Card.Text>
                <Button variant="primary">Read more</Button>
                <Button
                  variant="secondary"
                  className="addToCartBtn"
                  onClick={() => {
                    this.handleAddClick(this.props.products.productsReducer[7]);
                  }}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", display: "inline-block" }}>
              <Card.Img
                variant="top"
                src={this.props.products.productsReducer[15].imageUrl}
              />
              <Card.Body>
                <Card.Title>
                  {this.props.products.productsReducer[15].name}
                </Card.Title>
                <Card.Text>{`€${this.props.products.productsReducer[15].price}`}</Card.Text>
                <Button variant="primary">Read more</Button>
                <Button
                  variant="secondary"
                  className="addToCartBtn"
                  onClick={() =>
                    this.handleAddClick(this.props.products.productsReducer[15])
                  }
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
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
export default connect(mapStateToProps)(Homepage);
