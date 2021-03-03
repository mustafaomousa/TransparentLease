import { Button, Card, CardBody, CardFooter, CardHeader, Footer, WorldMap } from 'grommet';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Close as CloseIcon, Alert as AlertIcon } from "grommet-icons"
import { getAllLatestDeals } from '../../store/deals';
import CalculatorBasicComponent from "../CalculatorComponents/CalculatorBasicComponent";
import './homepage.css'


const HomePageComponent = () => {
    const dispatch = useDispatch();
    const [hideAlert, setHideAlert] = useState(false);
    const latestDeals = useSelector(state => state.deals.latest_deals)
    useEffect(() => dispatch(getAllLatestDeals()), [dispatch])

    return (
        <div className="home-body">
            <div className={hideAlert ? "hidden" : "home-header"}>
                <div>
                    <CloseIcon color="white" size="small" onClick={() => setHideAlert(!hideAlert)} />
                </div>
                <div>
                    <p style={{ fontSize: "13px", color: "white" }}>TransparentLease will be offline 03/10/2021 at 12:00PST for maintenance</p>
                </div>
                <div>
                    <AlertIcon color="white" size="small" />
                </div>
            </div>
            <div className="home-brands">
                <div className="brands">

                </div>
            </div>
            <div className="home-1-container">
                <div className="advertised-deal-container">
                    <div className="advertised-deal">
                        <div className="advertised-deal-header">
                            <h4>Check out this deal</h4>
                        </div>
                        <div className="advertised-deal-body">
                            {latestDeals && (
                                <Card width="95%" height="95%" background="light-1">
                                    <CardHeader background="light-5" height="40px" width="100%" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <h5>{latestDeals[1].make.name} {latestDeals[1].lease_info.trim.name}</h5>
                                    </CardHeader>
                                    <CardBody>
                                        Body
                                    </CardBody>
                                    <CardFooter background="light-5" height="40px" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <p>Broker: {latestDeals && latestDeals[1].broker.username}</p>
                                    </CardFooter>
                                </Card>)}
                        </div>
                    </div>
                </div>
                <div className="basic-calculator-container">
                    <div className="basic-calculator">
                        <CalculatorBasicComponent />
                    </div>
                </div>
            </div>
            <div className="how-it-works-container">
                <div className="how-it-works-1-container">
                    <div className="how-it-works-1">

                    </div>
                </div>
                <div className="how-it-works-2-container">
                    <div className="how-it-works-2">

                    </div>
                </div>
                <div className="how-it-works-3-container">
                    <div className="how-it-works-3">

                    </div>
                </div>
            </div>
            <div className="join-button-container">
                <Button>Join as a broker</Button>
                <Button>Join as a smart shopper</Button>
            </div>
            <div className="home-google-maps-container">
                <WorldMap alignSelf="center" fill={true}>

                </WorldMap>
            </div>
            <div className="simple-deal-alert-container">

            </div>
        </div>
    )
};

export default HomePageComponent