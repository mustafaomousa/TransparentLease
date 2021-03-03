import { Button, Footer, WorldMap } from 'grommet';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllLatestDeals } from '../../store/deals';
import './homepage.css'
const HomePageComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => dispatch(getAllLatestDeals()), [dispatch])

    return (
        <div className="home-body">
            <h1>Home Page</h1>
            <div className="home-header">
                <Button href="/sign-up" color="blue">Join us!</Button>
                <Button href="/login" color="blue">Login</Button>
            </div>
            <div className="home-brands">
                <h3>Moving carousel of brand logos that link to specific brand deals</h3>
            </div>
            <div className="home-1-container">
                <div className="advertised-deal-container"></div>
                <div className="basic-calculator-container"></div>
            </div>
            <div className="how-it-works-container">
                <div className="how-it-works-1-container">
                    <h1>this is a h1</h1>
                    <h2>this is a h2</h2>
                    <h3>this is a h3</h3>
                    <h4>this is a h4</h4>
                    <p>this is a p</p>
                    <a>this is a a</a>
                </div>
                <div className="how-it-works-2-container"></div>
                <div className="how-it-works-3-container"></div>
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