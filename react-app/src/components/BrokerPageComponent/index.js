import React from "react";
import { useParams } from "react-router-dom";

const BrokerPageComponent = () => {
    const { brokerUsername } = userParams();
    console.log(brokerUsername);
    return (
        <div className="broker-page-body">
            <h1>{brokerUsername}</h1>
        </div>
    )
};

export default BrokerPageComponent;