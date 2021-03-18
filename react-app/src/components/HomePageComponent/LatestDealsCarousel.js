import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";

import DealCard from "../DealComponent/DealCard";
import { getAllLatestDeals } from '../../store/deals';

const LatestDealsCarousel = () => {
    const dispatch = useDispatch();

    const [currDeal, setCurrDeal] = useState(1);

    const latestDeals = useSelector(state => state.deals.latest_deals);

    useEffect(() => dispatch(getAllLatestDeals()), [dispatch])

    return (
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
    )
};

export default LatestDealsCarousel;