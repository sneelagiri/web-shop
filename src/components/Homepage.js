// src/components/DevelopersList.js
import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/reducers/products/actions";
import { fetchProduct } from "../store/reducers/cart/actions";
import { Card, Button, Container, Row, Col, ListGroup } from "react-bootstrap";
import "./components.css";
import { Link } from "react-router-dom";

class Homepage extends React.Component {
  componentDidMount() {
    console.log("Stage 1: componentDidMount");
    // Do the data fetch...
    this.props.dispatch(fetchProducts);
  }

  handleAddClick = product => {
    console.log("Stage 1: Initiate Add to Cart");

    this.props.dispatch(fetchProduct(product));
  };

  render() {
    const loading = !this.props.products.productsReducer;
    return (
      <div>
        <Container fluid>
          <Row>
            <Col xs={1.5} className="sidebar">
              <ListGroup>
                <ListGroup.Item>
                  <Link to="/product-list">All Cases</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/category/1">Fitted Cases</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/category/2">Flip Cases</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/category/3">Wallet Cases</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/category/4">Phone Pouches</Link>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <h1 className="homepageTitle">Phone Cases</h1>
              <h2 className="featuredProducts">Featured Products</h2>
              <p>
                These are some of the best selling phone cases on the market
                right now! Buy one while supplies last!
              </p>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <div>
                  <Card style={{ width: "18rem", display: "inline-block" }}>
                    <Card.Img
                      variant="top"
                      className="cardImage"
                      src={this.props.products.productsReducer[19].imageUrl}
                    />
                    <Card.Body>
                      <Card.Title>
                        {this.props.products.productsReducer[19].name}
                      </Card.Title>
                      <Card.Text>{`€${this.props.products.productsReducer[19].price}`}</Card.Text>
                      <Button
                        variant="success"
                        className="addToCartBtn"
                        onClick={() => {
                          this.handleAddClick(
                            this.props.products.productsReducer[19]
                          );
                        }}
                      >
                        Add to cart
                      </Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: "18rem", display: "inline-block" }}>
                    <Card.Img
                      className="cardImage"
                      variant="top"
                      src={this.props.products.productsReducer[7].imageUrl}
                    />
                    <Card.Body>
                      <Card.Title>
                        {this.props.products.productsReducer[7].name}
                      </Card.Title>
                      <Card.Text>{`€${this.props.products.productsReducer[7].price}`}</Card.Text>
                      <Button
                        variant="success"
                        className="addToCartBtn"
                        onClick={() => {
                          this.handleAddClick(
                            this.props.products.productsReducer[7]
                          );
                        }}
                      >
                        Add to Cart
                      </Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: "18rem", display: "inline-block" }}>
                    <Card.Img
                      className="cardImage"
                      variant="top"
                      src={this.props.products.productsReducer[15].imageUrl}
                    />
                    <Card.Body>
                      <Card.Title>
                        {this.props.products.productsReducer[15].name}
                      </Card.Title>
                      <Card.Text>{`€${this.props.products.productsReducer[15].price}`}</Card.Text>
                      <Button
                        variant="success"
                        className="addToCartBtn"
                        onClick={() =>
                          this.handleAddClick(
                            this.props.products.productsReducer[15]
                          )
                        }
                      >
                        Add to Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log(reduxState);
  return {
    products: reduxState
  };
}

// ...which is what we export as the default (only) export
export default connect(mapStateToProps)(Homepage);
