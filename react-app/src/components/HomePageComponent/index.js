import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "@material-ui/lab/Pagination";
import { Button, CardMedia, Card, CardActionArea } from "@material-ui/core";
import CarImage from "./3d-car-01.svg"
import { getAllLatestDeals } from '../../store/deals';
import LocateBar from "../LocateComponents/LocateBar";
import CalculatorBasicComponent from "../CalculatorComponents/CalculatorBasicComponent";
import './homepage.css'
import { Avatar } from 'grommet';


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
                <p>Broker: {<a href={`/${latestDeal.broker.username}`}>{latestDeal && latestDeal.broker.username}</a>} </p>
            </div>
        </Card>
        {latestDeal && (latestDeal.lease_info.msrp * 0.01) <= latestDeal.lease_info.payment && <p class="speech-bubble">Great deal!</p>}
    </div>

)

const HomePageComponent = () => {
    const dispatch = useDispatch();
    const [selectedMiles, setSelectedMiles] = useState();
    const [selectedMonths, setSelectedMonths] = useState();
    const [currDeal, setCurrDeal] = useState(1);
    const latestDeals = useSelector(state => state.deals.latest_deals);
    const currentUser = useSelector(state => state.user);
    useEffect(() => dispatch(getAllLatestDeals()), [dispatch])

    return (
        <div className="home-body">
            <LocateBar />
            <div className="home-1-container">
                <div className="home-1">
                    <div className="advertised-header">
                        <div className="mini-calculator-container">
                            <div className="basic-calculator-left">
                                <div className="basic-calculator">
                                    <CalculatorBasicComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <div className="advertised-deal-container">

                            <div className="advertised-h4">
                                <h4>Checkout these latest deals</h4>
                            </div>
                            <div id="carousel-part">
                                {latestDeals && Object.entries(latestDeals).reverse().map(([dealId, deal], idx) => {
                                    if (currDeal === 1) {
                                        if (idx <= 2) return <DealCard latestDeal={deal} />
                                    }
                                    if (currDeal === 2) {
                                        if (idx > 2 && idx <= 5) return <DealCard latestDeal={deal} />
                                    }
                                    if (currDeal === 3) {
                                        if (idx >= 6 && idx < 9) return <DealCard latestDeal={deal} />
                                    }
                                })}
                            </div>
                            <Pagination count={3} color="primary" size="large" page={currDeal} onChange={(e, page) => setCurrDeal(page)} />

                        </div>
                        {currentUser && (<div className="user-welcome-container">
                            <Avatar size="150px" src={currentUser.profile_image ? currentUser.profile_image : "https://www.vhv.rs/dpng/d/408-4087421_person-svg-circle-icon-picture-charing-cross-tube.png"} alt={currentUser.username} id="welcome-avatar" />
                            <p>Welcome {currentUser.name ? currentUser.name : "guest."}</p>
                        </div>)}
                    </div>
                </div>


            </div>
            {/* <Blah /> */}
        </div >
    )
};

export default HomePageComponent

const Blah = () => (
    <>
        <div className="how-it-works-container">
            <div className="how-it-works-1-container">
                <div className="how-it-works-1">
                    <h3 className="how-it-works-1-text">So... how does TransparentLease work?</h3>
                </div>
            </div>
            <div className="how-it-works-2-container">
                <div className="triangle-up" />
                <div className="how-it-works-2">
                    <p id="how-it-works-2-p">New car prices are skyrocketting and now that the average American keeps a vehicle for no longer than 4 years,
                        leasing has become extremely favorable. But you know what hasn't...? </p>
                    <h2 id="how-it-works-2-h2">Negotiating at the dealership for the fairest deal possible.</h2>
                </div>
            </div>
            <div className="how-it-works-3-container">
                <div className="triangle-up" id="dark" />
                <div className="how-it-works-3">
                    <div>
                        <h3>Brokers have connections.</h3>
                        <p>Thank goodness they exist. Brokers typically have access to
                        some of the greatest lease deals available through dealerships whether that be on a new or a demo vehicle. Brokers
                        list many of their deals on websites such as ours! TransparentLease.
                            </p>
                        <br />
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                            <p style={{ color: "whitesmoke" }}>  Browse </p>
                            {/* <Semantics size="large" color="#E0FBFC" style={{ transform: "rotate(90deg)" }} /> */}
                            <p style={{ color: "whitesmoke" }}> Inquire </p>
                            {/* <Semantics size="large" color="#E0FBFC" style={{ transform: "rotate(90deg)" }} /> */}
                            <p style={{ color: "whitesmoke" }}> Purchase </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="join-button-container">
            <Button>Join as a broker</Button>
            <Button>Join as a smart shopper</Button>
        </div>
        <div className="home-google-maps-container">
            <div className="broker-home-sign-up"></div>
            <div className="user-home-sign-up"></div>
            {/* <WorldMap alignSelf="center" fill={true}>

                </WorldMap> */}
        </div>

        <div className="simple-deal-alert-container">

        </div>
    </>
)