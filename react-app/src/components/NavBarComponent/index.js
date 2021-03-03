import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Menu, Dropdown, Icon, Button, Form, Input, Search, Grid, Sidebar, Segment, Header, Image } from "semantic-ui-react";

import LogoutButton from "../auth/LogoutButton"
import './navbar.css'

const NavBarComponent = ({ setAuthenticated, authenticated, setVisible, visible }) => {
    const history = useHistory();
    const [activeItem, setActiveItem] = useState("")

    const updateActiveItem = (e) => {
        setActiveItem(e.target.id)
        history.push(`/${e.target.id}`)
    }

    return (
        <div className='navbar'>
            <Menu className='menu-navbar' attached='top'>
                <Menu.Item position="left" onClick={() => setVisible(!visible)}>
                    <Icon name="bars" size="big" />
                </Menu.Item>
                <Menu.Item onClick={() => history.push('/')}>
                    <h1>TransparentLease</h1>
                </Menu.Item>
                <Menu.Menu position="right" id='nav-search'>
                    <div className='ui right aligned category search'>
                        <div className="ui transparent icon input">
                            <input className='prompt' type='text'>
                            </input>
                            <i className='search link icon' />
                        </div>
                        <div className="results">
                        </div>
                    </div>
                </Menu.Menu>
                {authenticated === true && (<LogoutButton setAuthenticated={setAuthenticated} />)}
            </Menu >
            <div className='nav-footer'>
                <div className='nav-footer-content'>
                    <p>Not a member? <Link to='/sign-up'>Click here!</Link></p>
                </div>
                <div className='nav-footer-content'>
                    <p>Already a member? <Link to='/login'>Click here!</Link></p>
                </div>
            </div>
            <div>

            </div>
        </div >

    )
};

export default NavBarComponent