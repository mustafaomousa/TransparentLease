import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Menu, Dropdown, Icon } from "semantic-ui-react";

import LogoutButton from "../auth/LogoutButton"
import './navbar.css'

const NavBarComponent = ({ setAuthenticated, authenticated }) => {
    const history = useHistory();
    const [activeItem, setActiveItem] = useState("")

    const updateActiveItem = (e) => {
        setActiveItem(e.target.id)
        history.push(`/${e.target.id}`)
    }

    return (
        <div className='navbar'>
            <Menu className='menu-navbar' attached='top'>
                <h1>TransparentLease</h1>
                <Menu.Item position='right' id='deals' active={activeItem === "deals"} onClick={updateActiveItem}>
                    Deals
                </Menu.Item>
                <Menu.Item name="brokers" id="brokers" active={activeItem === "brokers"} onClick={updateActiveItem}>
                    Brokers
                </Menu.Item>
                <Menu.Item name="calculator" id="calculator" active={activeItem === "calculator"} onClick={updateActiveItem}>
                    Calculator
                </Menu.Item>
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

        </div >

    )
};

export default NavBarComponent