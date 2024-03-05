import React from 'react';
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'; 
import CartContext from '../store/cart-context';
import AuthContext from '../store/auth-context';
import { useContext } from 'react';

const Header = (props) => {
    const cartctx = useContext(CartContext);
    const authCtx = useContext(AuthContext);
    const quantity = cartctx.cartNumber;
    const isLoggedIn = authCtx.isLoggedIn;
    const navigate = useNavigate(); 

    const logoutHandler = () => {
        authCtx.logout();
        navigate('/login'); 
    }

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
                            <Nav.Link className="mx-3 text-white" as={Link} to="/store" >
                                Store
                            </Nav.Link>
                            <Nav.Link className="mx-3 text-white" as={Link} to="/about" >
                                About
                            </Nav.Link>
                            <Nav.Link className="mx-3 text-white" as={Link} to="/contactus">
                                Contact Us
                            </Nav.Link>
                            {!isLoggedIn && 
                                <Nav.Link className="mx-3 text-white" as={Link} to="/login">
                                    Login
                                </Nav.Link>
                            }
                            {isLoggedIn && 
                                <Button onClick={logoutHandler}>Logout</Button>
                            }
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
