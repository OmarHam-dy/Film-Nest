import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

export default function MyNavbar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "rgb(19 20 22)" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img src="..\images\logo-white.png" width={170} height={50} alt="Logo" />
          </Navbar.Brand>

          {/* Toggle button only visible on small screens */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setShowOffcanvas(!showOffcanvas)}
            className="d-lg-none" // Hide on large screens
          />{/* Navigation links for normal screens (hidden on small screens) */}
          <Nav className="justify-content-end d-none d-lg-flex">
            <NavLink className="nav-link spaces button2" style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#0000004d" : "",
                      borderRadius:isActive?'0.3rem':"",
                      color:isActive?'white':""
                    };
                  }} to="/">
              Home
            </NavLink>
            <NavLink className="nav-link spaces button2" style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#0000004d" : "",
                      borderRadius:isActive?'0.3rem':"",
                      color:isActive?'white':""
                    };
                  }} to="/movie">
              Movies
            </NavLink>
            <NavLink className="nav-link spaces button2" style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#0000004d" : "",
                      borderRadius:isActive?'0.3rem':"",
                      color:isActive?'white':""
                    };
                  }} to="/tv">
              Tv shows
            </NavLink>
            <NavLink className="nav-link spaces button2" style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#0000004d" : "",
                      borderRadius:isActive?'0.3rem':"",
                      color:isActive?'white':""
                    };
                  }} to="/about">
              About us
            </NavLink>
            <NavLink className="nav-link spaces button2" style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#0000004d" : "",
                      borderRadius:isActive?'0.3rem':"",
                      color:isActive?'white':""
                    };
                  }} to="/join">
              Log in
            </NavLink>
            <NavLink className="nav-link spaces signupbtn" style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#0000004d" : "",
                      borderRadius:isActive?'0.3rem':"",
                      color:isActive?'white':""
                    };
                  }} to="/signup">
              Sign up
            </NavLink>
          </Nav>
        </Container>
      </Navbar>

      {/* Navigation links for normal screens (hidden on small screens) */}
      {/* <Nav className="justify-content-end d-none d-lg-flex">
        <NavLink className="nav-link spaces button2" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link spaces button2" to="/movie">
          Movies
        </NavLink>
        <NavLink className="nav-link spaces button2" to="/tv">
          Tv shows
        </NavLink>
        <NavLink className="nav-link spaces button2" to="/about">
          About us
        </NavLink>
        <NavLink className="nav-link spaces button2" to="/join">
          Log in
        </NavLink>
        <NavLink className="nav-link spaces signupbtn" to="/contact">
          Sign up
        </NavLink>
      </Nav> */}

      {/* Off-canvas menu for small screens (hidden on normal screens) */}
      <Offcanvas show={showOffcanvas} style={{ backgroundColor: "#333"}} onHide={() => setShowOffcanvas(false)} placement="end" className="d-lg-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{color:"white", margin:"auto"}}>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <NavLink className="nav-link spaces button2" style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#0000004d" : "",
                      borderRadius:isActive?'0.3rem':"",
                      color:isActive?'white':""
                    };
                  }} to="/">
              Home
            </NavLink>
            <NavLink className="nav-link spaces button2" style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#0000004d" : "",
                      borderRadius:isActive?'0.3rem':"",
                      color:isActive?'white':""
                    };
                  }} to="/movie">
              Movies
            </NavLink>
            <NavLink className="nav-link spaces button2" style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#0000004d" : "",
                      borderRadius:isActive?'0.3rem':"",
                      color:isActive?'white':""
                    };
                  }} to="/tv">
              Tv shows
            </NavLink>
            <NavLink className="nav-link spaces button2" style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#0000004d" : "",
                      borderRadius:isActive?'0.3rem':"",
                      color:isActive?'white':""
                    };
                  }} to="/about">
              About us
            </NavLink>
            <NavLink className="nav-link spaces button2" style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#0000004d" : "",
                      borderRadius:isActive?'0.3rem':"",
                      color:isActive?'white':""
                    };
                  }} to="/signup">
              Log in
            </NavLink>
            <NavLink className="nav-link spaces signupbtn" style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#0000004d" : "",
                      borderRadius:isActive?'0.3rem':"",
                      color:isActive?'white':""
                    };
                  }} to="/signup">
              Sign up
            </NavLink>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
