import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import { NavLink as RRNavLink } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import UserMenu from './UserMenu';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    componentDidMount = () => {
        this.props.getCurrentUser();
    }

    render() {
        return <Navbar expand="md" style={navStyle}>
            <Container>
            <NavItem>
                <img src="images/logo.png"
                width="65"
                height="65"
                alt="logo"
                />
                </NavItem>
            <NavbarToggler onClick={this.toggleIsOpen} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink
                            style={linkStyle}
                            tag={RRNavLink}
                            exact to="/"
                            activeClassName="active">
                            Начало
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            style={linkStyle}
                            tag={RRNavLink}
                            exact to="/adopt"
                            activeClassName="active">
                            Осинови ме
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            style={linkStyle}
                            tag={RRNavLink}
                            exact to="/contacts"
                            activeClassName="active">
                            Контакти
                        </NavLink>
                    </NavItem>

                   {this.props.token ? (
                            <UserMenu/>
                    ) : (
                        <>
                            <Login buttonLabel="Влез"/>
                            <Register buttonLabel="Регистрирай се"/>
                            
                        </>
                    )} 
                </Nav>
            </Collapse>
            </Container>
        </Navbar>
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
    }
};

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        getCurrentUser: actions.getCurrentUser,
    }, dispatch)
};

const navStyle={
    background: '#b30000',
           
}

const linkStyle={
    color: 'white',
    fontSize: '20px',
    padding: '15px',
}


export default connect(mapStateToProps, mapStateToDispatch)(Header);