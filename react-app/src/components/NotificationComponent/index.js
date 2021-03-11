import React from "react";
import { Checkmark } from "grommet-icons";
import { useSelector } from "react-redux";

import "../NavBarComponent/navbar.css"

const NotificationComponent = () => {
    const notifications = useSelector(state => state.notifications.sucessful)

    return (
        <div className="notification-component-container">

            {notifications && notifications.map((notification, idx) => {
                return (
                    <div className="new-deal-notification-container">
                        <div className="new-deal-notification-icon-container">
                            <Checkmark color="white" size="medium" />
                        </div>
                        <div className="new-deal-notification-message-container">
                            <p>{notification}</p>
                            {/* <Close style={{ position: "relative", bottom: "15px", left: "15px" }} size="small" onClick={() => dispatch(deleteNotification(notification))} /> */}
                        </div>
                    </div>
                )
            })}

        </div>
    )


};

export default NotificationComponent;