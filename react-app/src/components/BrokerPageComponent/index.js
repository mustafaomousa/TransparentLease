import React from "react";
import { useParams } from "react-router-dom";
import { Avatar } from "grommet";
import "./brokerpage.css";

const src = 'https://c0.klipartz.com/pngpicture/124/934/gratis-png-iconos-de-computadora-persona-avatar.png';

const BrokerPageComponent = () => {
    const { brokerUsername } = useParams();
    console.log(brokerUsername);
    return (
        <div className="broker-page-body">
            <div className="broker-page-header-container">
                <div className="broker-image-name">
                    <Avatar size="120px" src={src} />
                    <h1>{brokerUsername}</h1>
                    <h5>username</h5>
                </div>

            </div>
        </div>
    )
};

export default BrokerPageComponent;