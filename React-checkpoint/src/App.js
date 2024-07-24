// import './App.css';
import React from 'react'
import { Container, Row, Col, Navbar, NavDropdown, Nav, Button, Card, Form } from 'react-bootstrap'
//import Button from 'react-bootstrap/Button'
//import 'bootstrap/dist/css/bootstrap.min.css' 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="success" fixed="top" expand="lg">
          <Container >
            <Navbar.Brand href="#home" style={{fontSize: 35}}>RACING NEWS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Row className="justify-content-end">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" >
                  <Nav.Link href="#home">HOME</Nav.Link>
                  <Nav.Link href="#link">ABOUT US</Nav.Link>
                  <NavDropdown title="OTHERS" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Latest News</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Stars Gist</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Local News</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Other Contents</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Row>
          </Container>
        </Navbar>
        <br />
        <br />
        <Container >
        <Card className="mt-5" style={{ color: '#000'}}>
          <Card.Img src="https://picsum.photos/200/100" />
          <Card.Body>
            <Card.Title>
              The Other Story
            </Card.Title>
            <Card.Text>
              Trust the process Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque perspiciatis dolores nostrum distinctio consectetur odio sunt explicabo optio impedit eligendi vero ab quaerat assumenda accusantium beatae, incidunt totam facilis ducimus temporibus omnis hic maxime!
            </Card.Text>
            <Button variant='primary'> Read More </Button>
          </Card.Body>
        </Card>

        <Form className="mt-5">
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3"controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Save Email" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        </Container>
      </header>
    </div>
  );
}

export default App;
