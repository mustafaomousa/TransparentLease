import { Button, Footer, WorldMap } from 'grommet';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Close as CloseIcon, Alert as AlertIcon } from "grommet-icons"
import { getAllLatestDeals } from '../../store/deals';
import './homepage.css'
const HomePageComponent = () => {
    const dispatch = useDispatch();
    const [hideAlert, setHideAlert] = useState(false);

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

                    </div>
                </div>
                <div className="basic-calculator-container">
                    <div className="basic-calculator">
                        <div className="basic-calculator-button-container">
                            <Button>Advanced</Button>
                        </div>
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