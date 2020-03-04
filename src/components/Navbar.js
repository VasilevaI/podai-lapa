import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const HeaderNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="md" style={navStyle}>
        <div className="container col-sm-10" >
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                <img src="images/logo.png"
                width="65"
                height="65"
                alt="logo"
                />
                </NavItem>
                <NavItem >
                    <NavLink href="/" style={linkStyle}>Начало</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink href="/add" style={linkStyle}>Осинови ме</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/contacts" style={linkStyle}>Контакти</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </div>
    </Navbar>
  );
}

const navStyle={
    background: '#b30000',        
}

const linkStyle={
    color: 'white',
    fontSize: '20px',
    padding: '15px',
}


export default HeaderNavbar;