import { Navbar, Container, Nav, Button } from "react-bootstrap";

const Header = (props) => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="mx-3 text-white" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="mx-3 text-white" href="#link">
                Link
              </Nav.Link>
              <Nav.Link className="mx-3 text-white" href="#about">
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
          Cart
        </Button>{" "}
      </Navbar>
      <div style={headerStyle}>
        <h1 style={{ color: 'white', fontSize: '2rem' }}>The Generics</h1>
      </div>
    </div>
  );
};

const headerStyle = {
  backgroundColor: 'gray',
  padding: '20px 0',
  textAlign: 'center',
  margin: '2px',
  height: "120px"
};

export default Header;
