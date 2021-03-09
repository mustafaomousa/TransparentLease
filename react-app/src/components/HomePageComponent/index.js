import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "@material-ui/lab/Pagination";
import { Button } from "@material-ui/core";
import { getAllLatestDeals } from '../../store/deals';
import LocateBar from "../LocateComponents/LocateBar";
import CalculatorBasicComponent from "../CalculatorComponents/CalculatorBasicComponent";
import './homepage.css'


const DealCard = ({ latestDeal }) => (
    <div style={{ height: "100%" }}>
        <div id="card">
            <div id="card-body">
                {latestDeal && (
                    <div>
                        <p>{latestDeal.lease_info.trim.make.name} {latestDeal.lease_info.trim.model.name}</p>
                        <p>{latestDeal.lease_info.trim.name}</p>
                        <p>{latestDeal.lease_info.months}/{latestDeal.lease_info.miles_yearly}</p>
                        <p>${latestDeal.lease_info.payment} per month</p>
                    </div>
                )}
            </div>
            <div background="light-5" id="card-footer">
                <p>Broker: {latestDeal && latestDeal.broker.username}</p>
            </div>
        </div>
        {latestDeal && (latestDeal.lease_info.msrp * 0.01) <= latestDeal.lease_info.payment && <p class="speech-bubble">Great deal!</p>}
    </div>

)

const HomePageComponent = () => {
    const dispatch = useDispatch();
    const [selectedMiles, setSelectedMiles] = useState();
    const [selectedMonths, setSelectedMonths] = useState();
    const [currDeal, setCurrDeal] = useState(1);
    const latestDeals = useSelector(state => state.deals.latest_deals)
    useEffect(() => dispatch(getAllLatestDeals()), [dispatch])

    return (
        <div className="home-body">
            <LocateBar />
            <div className="home-1-container">
                <div className="home-1">
                    <div className="advertised-header">
                        <div className="advertised-h4">
                            <h4>Checkout these latest deals</h4>
                        </div>
                        <div className="advertised-h4-underline" />
                    </div>
                    <div className="advertised-deal-container">
                        {latestDeals && (
                            <div>
                                {currDeal === 1 && (<div id="carousel-part">
                                    <DealCard latestDeal={latestDeals[1]} />
                                    <DealCard latestDeal={latestDeals[2]} />
                                    <DealCard latestDeal={latestDeals[3]} />
                                </div>)}
                                {currDeal === 2 && (<div id="carousel-part">
                                    <DealCard latestDeal={latestDeals[4]} />
                                    <DealCard latestDeal={latestDeals[5]} />
                                    <DealCard latestDeal={latestDeals[6]} />
                                </div>)}
                                {currDeal === 3 && (<div id="carousel-part">
                                    <DealCard latestDeal={latestDeals[7]} />
                                    <DealCard latestDeal={latestDeals[8]} />
                                    <DealCard latestDeal={latestDeals[9]} />
                                </div>)}
                            </div>
                        )}
                        <Pagination count={3} color="primary" size="large" page={currDeal} onChange={(e, page) => setCurrDeal(page)} />
                    </div>
                </div>

                <div className="mini-calculator-container">
                    <div className="basic-calculator-left">
                        <div className="basic-calculator">
                            <CalculatorBasicComponent />
                        </div>
                    </div>
                    <div className="basic-calculator-right">
                        <div className="calculator-header-container">
                            <div className="calculator-h4">
                                <h4>Simple auto lease calculator</h4>
                            </div>
                            <div className="calculator-h4-underline" />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
};

export default HomePageComponent

const blah = () => (
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