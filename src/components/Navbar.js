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
    <Navbar color="dark" dark expand="md">
        <div className="container">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/">Начало</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/adopt">Осинови</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/contacts">Контакти</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </div>
    </Navbar>
  );
}

export default HeaderNavbar;