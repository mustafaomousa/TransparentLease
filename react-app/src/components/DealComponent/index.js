import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./deal-manager.css";

const DealManagerComponent = () => {
    const history = useHistory();

    return (
        <div className="deal-manager-body">
            <div className="deal-manager-container">
                <div>
                    <Button onClick={() => history.push("/deal/create")}>I would like to list a new deal</Button>
                </div>
                <div>
                    <Button onClick={() => history.push("/deal/manage")}>I would like to manage my deals</Button>
                </div>
                <div>
                    <Button onClick={() => history.push("/deal/inquiries")}>I would like to view deal inquiries</Button>
                </div>
            </div>
        </div>
    )
};

export default DealManagerComponent;