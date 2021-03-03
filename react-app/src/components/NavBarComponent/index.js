import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Icon } from "semantic-ui-react";

import LogoutButton from "../auth/LogoutButton"

const NavBarComponent = ({ setAuthenticated }) => {
    return (
        <div>
            <Menu attached='top'>
                <Menu.Item position='right' name='deals'>
                    Deals
                </Menu.Item>
                <Menu.Item name="brokers">
                    Brokers
                </Menu.Item>
                <Menu.Item name="calculator">
                    Calculator
                </Menu.Item>
            </Menu >
            <div>
                Not a member? <Link to='/sign-up'>Click here!</Link>
                Already a member? <Link to='/login'>Click here!</Link>
                <LogoutButton setAuthenticated={setAuthenticated} />
            </div>
        </div>

    )
};

export default NavBarComponent