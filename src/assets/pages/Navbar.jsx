import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

    

function BasicExample() {
  const { user, logout } = useAuth();
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark" >
    {/* <Navbar expand="lg" className="bg-dark border-bottom border-light" variant="dark" > */}
      <Container>
        <Navbar.Brand className='fw-bold sparkle-text' href="#home">Mii</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            
            {/* Dashboard: ONLY for admins */}
            {user?.role === "admin" && (
              <Nav.Link as={Link} to="/dashboard">DashBoard</Nav.Link>
            )}

            <Nav.Link as={Link} to="/cart">
              Cart {cartItemCount > 0 && <span className="badge bg-primary ms-1">{cartItemCount}</span>}
            </Nav.Link>
          </Nav>

          <Nav>
            {user ? (
              <>
                <Nav.Link onClick={() => navigate("/profile")}>Profile ({user.firstName})</Nav.Link>
                <Nav.Link onClick={() => { logout(); navigate("/login"); }}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

 
