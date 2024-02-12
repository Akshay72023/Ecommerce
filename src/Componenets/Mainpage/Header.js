import {useContext} from 'react';
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import CartContext from '../store/cart-context';

const Header = (props) => {
    const cartctx= useContext(CartContext);
    let quantity=cartctx.cartNumber;
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="mx-3 text-white" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="mx-3 text-white" href="/products">
                Store
              </Nav.Link>
              <Nav.Link className="mx-3 text-white" href="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Button
          variant="outline-info"
          style={{ marginRight: '10px' }}
          onClick={props.handleCartClick} 
        >
          Cart <span>{quantity}</span>
        </Button>{" "}
      </Navbar>
    </div>
  );
};



export default Header;
