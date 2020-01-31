import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  // NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

const Toolbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="toolbar">
        <Navbar.Brand href="/">
          <img
            src="https://image.flaticon.com/icons/svg/754/754117.svg"
            className="smartphone"
            alt="smartphone"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="navbar-dark navbar-nav nav-link" to="/">
            Home
          </Link>
          <Link className="navbar-dark navbar-nav nav-link" to="/product-list">
            Products
          </Link>
          {/* <Nav.Link href="/AboutUs">About Us</Nav.Link> */}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Link to="/cart">
          <img
            src="https://cdn.pixabay.com/photo/2015/12/23/01/14/edit-1105049_960_720.png"
            className="cart"
            alt="cart"
          />
        </Link>
      </Navbar>
    </div>
  );
};

export default Toolbar;
