import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/reducers/products/actions";
import { fetchProduct } from "../store/reducers/cart/actions";
import { Link } from "react-router-dom";
import { Container, Card, Button, Row, Col, ListGroup } from "react-bootstrap";

class Categories extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts);
  }

  handleAddClick = product => {
    console.log("Stage 1: Initiate Add to Cart");

    this.props.dispatch(fetchProduct(product));
  };

  render() {
    const categoryId = this.props.match.params.id;
    const loading = !this.props.cases;
    const cases = this.props.cases;
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
              {loading ? (
                <p>Loading...</p>
              ) : (
                <div>
                  {categoryId == 1 ? (
                    <h1>Fitted Cases</h1>
                  ) : categoryId == 2 ? (
                    <h1>Flip Cases</h1>
                  ) : categoryId == 3 ? (
                    <h1>Wallet Cases</h1>
                  ) : categoryId == 4 ? (
                    <h1>Phone Pouches</h1>
                  ) : (
                    <h1>Phone Cases</h1>
                  )}
                  {cases.map(product => {
                    if (categoryId == 1 && product.categoryId == 1) {
                      return (
                        <Card
                          style={{ width: "18rem", display: "inline-block" }}
                        >
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
                    } else if (categoryId == 2 && product.categoryId == 2) {
                      return (
                        <Card
                          style={{ width: "18rem", display: "inline-block" }}
                        >
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
                    } else if (categoryId == 3 && product.categoryId == 3) {
                      return (
                        <Card
                          style={{ width: "18rem", display: "inline-block" }}
                        >
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
                    } else if (categoryId == 4 && product.categoryId == 4) {
                      return (
                        <Card
                          style={{ width: "18rem", display: "inline-block" }}
                        >
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
                    }
                  })}
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
  return {
    cases: reduxState.productsReducer
  };
}
export default connect(mapStateToProps)(Categories);
