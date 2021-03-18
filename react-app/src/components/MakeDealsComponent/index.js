import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getMakeDeals } from "../../store/deals";

const MakeDealsComponent = () => {
    const dispatch = useDispatch();

    const { makeName } = useParams();

    const makeDeals = useSelector(state => state.deals.make_deals)

    useEffect(() => dispatch(getMakeDeals(makeName.toUpperCase())), [dispatch, makeName])

    if (!makeDeals) return (<h1>Uh oh!</h1>)

    return (
        <div>
            {makeDeals && makeDeals.map((deal, idx) => {
                return (
                    <div key={idx}>
                        <h1>{deal.make.name}</h1>
                    </div>
                )
            })}
        </div>
    )
};

export default MakeDealsComponent