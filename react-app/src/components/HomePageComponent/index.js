import { Box, Button, Card, CardBody, CardFooter, CardHeader, Carousel, Footer, WorldMap, Select, RangeInput } from 'grommet';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Close as CloseIcon, Alert as AlertIcon, Search, Workshop, Semantics } from "grommet-icons"
import { getAllLatestDeals } from '../../store/deals';
import CalculatorBasicComponent from "../CalculatorComponents/CalculatorBasicComponent";
import './homepage.css'

const allMiles = [2500, 5000, 7500, 10000, 12000, 15000];
const allMonths = [12, 24, 36, 48];

const DealCard = ({ latestDeals }) => (
    <div>
        <Card background="light-1" id="card">
            <CardBody id="card-body">
                Body
        </CardBody>
            <CardFooter background="light-5" id="card-footer">
                <p>Broker: {latestDeals && latestDeals[1].broker.username}</p>
            </CardFooter>
        </Card>
        <p class="speech-bubble">Great deal!</p>
    </div>

)

const HomePageComponent = () => {
    const dispatch = useDispatch();
    const [hideAlert, setHideAlert] = useState(false);
    const [selectedMiles, setSelectedMiles] = useState();
    const [selectedMonths, setSelectedMonths] = useState();
    const latestDeals = useSelector(state => state.deals.latest_deals)
    useEffect(() => dispatch(getAllLatestDeals()), [dispatch])

    return (
        <div className="home-body">
            {/* <div className={hideAlert ? "hidden" : "home-header"}>
                <div>
                    <CloseIcon color="white" size="small" onClick={() => setHideAlert(!hideAlert)} />
                </div>
                <div>
                    <p style={{ fontSize: "13px", color: "white" }}>TransparentLease will be offline 03/10/2021 at 12:00PST for maintenance</p>
                </div>
                <div>
                    <AlertIcon color="white" size="small" />
                </div>
            </div> */}
            <div className="home-brands">
                <div className="locate-deal-search-container">
                    <Select id="locate-deal-select" options={allMiles} value={selectedMiles} placeholder="Miles per year" onChange={({ option }) => setSelectedMiles(option)} />
                    <Select id="locate-deal-select" options={allMonths} value={selectedMonths} placeholder="Months" onChange={({ option }) => setSelectedMonths(option)} />
                    <RangeInput id="locate-deal-range" plain="full" min="50" step="100" max="3000" />
                </div>
                <Search id="locate-deal-search-button" color="white" size="medium" />
            </div>
            <div className="home-1-container">
                <div className="advertised-deal-container">
                    {latestDeals && (
                        <Carousel fill="true" id="deal-carousel">
                            <Box direction="row" id="carousel-part">
                                <DealCard latestDeals={latestDeals} />
                                <DealCard latestDeals={latestDeals} />
                                <DealCard latestDeals={latestDeals} />
                            </Box>
                            <Box direction="row" id="carousel-part">
                                <DealCard latestDeals={latestDeals} />
                                <DealCard latestDeals={latestDeals} />
                                <DealCard latestDeals={latestDeals} />
                            </Box>
                            <Box id="carousel-part">
                                <DealCard latestDeals={latestDeals} />
                                <DealCard latestDeals={latestDeals} />
                                <DealCard latestDeals={latestDeals} />
                            </Box>
                        </Carousel>

                    )}
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
                    <div className="triangle-up" />
                    <div className="how-it-works-3">
                        <div>
                            <h3>Brokers have connections. <Workshop size="150px" color="whitesmoke" /></h3>
                            <p>Thank goodness they exist. Brokers typically have access to
                            some of the greatest lease deals available through dealerships whether that be on a new or a demo vehicle. Brokers
                            list many of their deals on websites such as ours! TransparentLease.
                            </p>
                            <br />
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                                <p style={{ color: "whitesmoke" }}>  Browse </p>
                                <Semantics size="large" color="#E0FBFC" style={{ transform: "rotate(90deg)" }} />
                                <p style={{ color: "whitesmoke" }}> Inquire </p>
                                <Semantics size="large" color="#E0FBFC" style={{ transform: "rotate(90deg)" }} />
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
                <WorldMap alignSelf="center" fill={true}>

                </WorldMap>
            </div>
            <div className="simple-deal-alert-container">

            </div>
        </div >
    )
};

export default HomePageComponent