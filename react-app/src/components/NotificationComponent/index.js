import React from "react";
import { Checkmark } from "grommet-icons"
import "../NavBarComponent/navbar.css"

const NotificationComponent = () => {
    const notifications = [{ "new_deal": { "message": "New deal created" } }]

    return (
        <div className="notification-component-container">
            {notifications && notifications.map((notification, idx) => {
                if (notification.new_deal) {
                    return (
                        <div className="new-deal-notification-container">
                            <div className="new-deal-notification-icon-container">
                                <Checkmark color="white" size="medium" />
                            </div>
                            <div className="new-deal-notification-message-container">
                                <p>{notification.new_deal.message}</p>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
};

export default NotificationComponent;