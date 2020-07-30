import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
        <header>
             <Navbar color="light" light expand="lg">
                    <NavbarBrand><h1>Anywhere Fitness</h1></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                      <Nav className="ml-auto" navbar>
                        <NavItem>
                         <Link className="nav-links" to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                          <Link className="nav-item-style nav-links" to="/about">About</Link>
                        </NavItem>
                        <NavItem>
                            <button><Link className="nav-links" to="/login/">Login/Sign Up</Link></button>
                        </NavItem>
                    </Nav>
                    </Collapse>
                  </Navbar>
              </header>
    )
}

export default Header;
