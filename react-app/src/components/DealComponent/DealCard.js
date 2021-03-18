import React from "react";
import { Card, CardActionArea, CardMedia } from "@material-ui/core";

import CarImage from "./3d-car-01.svg";

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
);

export default DealCard;