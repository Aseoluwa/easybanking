/** @format */

import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nav.css";
import Logo from "./images/logo.svg";

const Navigate = () => {
  return (
    <div>
      <div className='Navg'>
        <Navbar collapseOnSelect expand='lg' bg='#fffffft' variant='light'>
          <Container>
            <Navbar.Brand href='#home'>
              <img src={Logo} alt='' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='#features'></Nav.Link>
                <Nav.Link href='#pricing'></Nav.Link>
              </Nav>
              <Nav className='Btt'>
                <Nav.Link href='#deets'>
                  <b>Home</b>
                </Nav.Link>
                <Nav.Link href='#deets'>
                  <b>About</b>
                </Nav.Link>
                <Nav.Link href='#deets'>
                  <b>Contact</b>
                </Nav.Link>
                <Nav.Link href='#deets'>
                  <b>Blog</b>
                </Nav.Link>
                <Nav.Link eventKey={2} href='#memes'>
                  <b>Contact</b>
                </Nav.Link>
              </Nav>
              <div className='Btndiv'>
                <button className='Btn'>
                  <b>Request Invite</b>
                </button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <Navbar collapseOnSelect expand='lg' bg='' variant='dark'>
          <Container>
            <Navbar.Brand href='#home'>
              <img src={trad} alt='' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'></Nav>

              <Nav>
                <div className='Navtext'>
                  <Nav.Link>Instant Buy/Sell</Nav.Link>
                </div>
                <div className='Navtext'>
                  <Nav.Link className='text' eventKey={2} href='#memes'>
                    learn
                  </Nav.Link>
                </div>
                <div>
                  <Nav.Link>
                    <button className='Btn'>Login</button>
                  </Nav.Link>
                </div>
                <div>
                  <Nav.Link>
                    <button className='Btn2'>Get Started</button>
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
      </div>
    </div>
  );
};

export default Navigate;
