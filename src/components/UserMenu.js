import React, {Fragment, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavLink , NavItem } from 'reactstrap';
import { logout } from '../redux/actions';



const UserMenu = () => {
    const currentUser = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    const dispatchLogout = () => {
        localStorage.clear();
        dispatch(logout({}));
        console.log('LocalStorage after logout',localStorage.getItem('token'));
    }
    return <Fragment>
    <NavItem>
        <NavLink
        style={linkStyle}
        tag={RRNavLink}
        exact to="/profile">
            <div className="d-flex align-items-center">
                <i className="fa fa-user-circle-o mr-2" aria-hidden="true"></i>
                <div>{currentUser.firstName} {currentUser.lastName }</div>
            </div>
        </NavLink>
    </NavItem>
    <li className="nav-item">
        <a className="nav-link" style={linkStyle} onClick={dispatchLogout} href="#">Изход</a>
    </li>
</Fragment>    

}

const linkStyle={
    color: 'white',
    fontSize: '20px',
    padding: '15px',
}


export default UserMenu;