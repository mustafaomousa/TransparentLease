import React from "react";
import { Form } from "grommet";

import "./deal.css";

const DealManageComponent = () => {
    return (
        <div className="deal-manage-body">
            <Form>
                <div className="deal-manage-container">
                    <div className="deal-manage-header">
                        <div className="h4">
                            <h4>Manage your deals</h4>
                            <div className="h4-underline" style={{ width: "288px" }} />
                        </div>
                    </div>
                    <div className="deal-manage">

                    </div>
                    <div className="deal-create-footer">
                    </div>
                </div>
            </Form>
        </div>
    )
};

export default DealManageComponent