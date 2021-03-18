import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "@material-ui/lab/Pagination";
import { CardMedia, Card, CardActionArea } from "@material-ui/core";
import { Avatar } from 'grommet';

import CarImage from "./3d-car-01.svg";
import { getAllLatestDeals } from '../../store/deals';
import LocateBar from "../LocateComponents/LocateBar";
import CalculatorBasicComponent from "../CalculatorComponents/CalculatorBasicComponent";


import './homepage.css';

const DealCard = ({ latestDeal }) => (
    <div style={{ height: "100%" }}>
        <Card id="card">
            <CardActionArea id="card-body">
                {latestDeal && (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <p>{latestDeal.lease_info.trim.make.name} {latestDeal.lease_info.trim.model.name} {latestDeal.lease_info.trim.name}</p>
                    </div>
                )}<CardMedia component="img" alt="" image={CarImage} height="110" />
            </CardActionArea>
            <div background="light-5" id="card-footer">
                <p>${latestDeal.lease_info.payment} per month</p>
                <p>{latestDeal.lease_info.months}/{latestDeal.lease_info.miles_yearly}</p>
                <p>Broker: {<a href={`/${latestDeal.lease_info.broker.username}`}>{latestDeal.lease_info.broker.username}</a>} </p>
            </div>
        </Card>
        {latestDeal && (latestDeal.lease_info.msrp * 0.01) <= latestDeal.lease_info.payment && <p className="speech-bubble">Great deal!</p>}
    </div>

)

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
                <div className="home-1">
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
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
                        {currentUser && (<div className="user-welcome-container">
                            <Avatar size="150px" src={currentUser.profile_image ? currentUser.profile_image : "https://www.vhv.rs/dpng/d/408-4087421_person-svg-circle-icon-picture-charing-cross-tube.png"} alt={currentUser.username} id="welcome-avatar" />
                            <p>Welcome {currentUser.name ? currentUser.name : "guest."}</p>
                        </div>)}
                    </div>
                    <div className="advertised-header">
                        <div className="mini-calculator-container">
                            <div className="basic-calculator-left">
                                <p id="deal-header">Basic lease calculator</p>
                                <div className="basic-calculator">
                                    <CalculatorBasicComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default HomePageComponent