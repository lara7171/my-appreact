import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "../App.css";


const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand> <Link to={'/'} id='ta'>Natural</Link> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link> 
              <Link to={'/'} id='ta'>
                Главная
              </Link> 
            </Nav.Link>
            <Nav.Link> 
              <Link to={'/favorites'} id='ta'>
                Избранное
              </Link> 
            </Nav.Link>
            <Nav.Link>
              <Link to={'/cart'} id='ta'>
                Корзина
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary" id='ta'>
              Войти
            </Button>  
          </Nav>
        </Container>
      </Navbar>  
    </div>
  )
}

export default Header;
