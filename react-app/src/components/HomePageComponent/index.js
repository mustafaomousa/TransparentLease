import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from 'grommet';

import LocateBar from "../LocateComponents/LocateBar";
import LatestDealsCarousel from './LatestDealsCarousel';

import './homepage.css';

const HomePageComponent = () => {

    const currentUser = useSelector(state => state.user);

    return (
        <div className="home-body">
            <LocateBar />
            <div className="home-1-container">
                <LatestDealsCarousel />
                <div className="user-welcome-container">
                    <Avatar size="150px" src={currentUser.profile_image ? currentUser.profile_image : "https://www.vhv.rs/dpng/d/408-4087421_person-svg-circle-icon-picture-charing-cross-tube.png"} alt={currentUser.username} id="welcome-avatar" />
                    <p>Welcome {currentUser.name ? currentUser.name : "guest."}</p>
                </div>
            </div>
        </div >
    )
};

export default HomePageComponent