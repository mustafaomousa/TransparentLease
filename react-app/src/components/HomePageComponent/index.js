import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "@material-ui/lab/Pagination";
import { CardMedia, Card, CardActionArea } from "@material-ui/core";
import { Avatar } from 'grommet';

import { getAllLatestDeals } from '../../store/deals';
import LocateBar from "../LocateComponents/LocateBar";
import CalculatorBasicComponent from "../CalculatorComponents/CalculatorBasicComponent";
import DealCard from "../DealComponent/DealCard";

import './homepage.css';

const HomePageComponent = () => {
    const dispatch = useDispatch();

    const [currDeal, setCurrDeal] = useState(1);

    const latestDeals = useSelector(state => state.deals.latest_deals);
    const currentUser = useSelector(state => state.user);

    useEffect(() => dispatch(getAllLatestDeals()), [dispatch])

    return (
        <div className="home-body">
            <LocateBar />
            <div className="home-1-container">
                <div className="advertised-deal-container">
                    <div className="advertised-h4">
                        <p id="deal-header">Checkout these latest deals</p>
                    </div>
                    <div id="carousel-part">
                        {latestDeals && Object.entries(latestDeals).reverse().map(([dealId, deal], idx) => (
                            <div style={{ height: "100%" }} key={idx}>
                                {currDeal === 1 && idx <= 2 && (<DealCard latestDeal={deal} />)}
                                {currDeal === 2 && idx > 2 && idx <= 5 && (<DealCard latestDeal={deal} />)}
                                {currDeal === 3 && idx >= 6 && idx < 9 && (<DealCard latestDeal={deal} />)}
                            </div>
                        ))}
                    </div>
                    <Pagination count={3} color="primary" size="large" page={currDeal} onChange={(e, page) => setCurrDeal(page)} />
                </div>
                {currentUser && (
                    <div className="user-welcome-container">
                        <Avatar size="150px" src={currentUser.profile_image ? currentUser.profile_image : "https://www.vhv.rs/dpng/d/408-4087421_person-svg-circle-icon-picture-charing-cross-tube.png"} alt={currentUser.username} id="welcome-avatar" />
                        <p>Welcome {currentUser.name ? currentUser.name : "guest."}</p>
                    </div>
                )}
            </div>
        </div >
    )
};

export default HomePageComponent