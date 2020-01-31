import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/reducers/products/actions";
import { fetchProduct } from "../store/reducers/cart/actions";
import { Card, Button, ListGroup, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class ProductList extends React.Component {
  componentDidMount() {
    console.log("Stage 1: componentDidMount");
    // Do the data fetch...
    this.props.dispatch(fetchProducts);
  }

  handleAddClick = product => {
    console.log("Stage 1: Initiate Add to Cart");

    this.props.dispatch(fetchProduct(product));
  };

  // handleAdd = id => {
  //   this.props.fetch
  // };

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
              <h1>All Cases</h1>
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
                        <Button
                          variant="success"
                          className="addToCartBtn"
                          onClick={() => {
                            this.handleAddClick(product);
                          }}
                        >
                          Add to Cart
                        </Button>
                      </Card.Body>
                    </Card>
                  );
                })
              )}
            </Col>
          </Row>
        </Container>
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
export default connect(mapStateToProps)(ProductList);
