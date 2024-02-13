import React from 'react';
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'; 
import CartContext from '../store/cart-context';
import { useContext } from 'react';


const Header = (props) => {
    const cartctx = useContext(CartContext);
    const quantity = cartctx.cartNumber;
  
    return (
        <div>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto" variant="underline" defaultActiveKey="/">
                            <Nav.Link className="mx-3 text-white" as={Link} to="/" >
                                Home
                            </Nav.Link>
                            <Nav.Link className="mx-3 text-white" as={Link} to="/products" >
                                Store
                            </Nav.Link>
                            <Nav.Link className="mx-3 text-white" as={Link} to="/about" >
                                About
                            </Nav.Link>
                            <Nav.Link className="mx-3 text-white" as={Link} to="/contactus">
                                Contact Us
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
