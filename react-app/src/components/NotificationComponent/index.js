import React from "react";
import { Checkmark, Close } from "grommet-icons"
import "../NavBarComponent/navbar.css"
import { useDispatch, useSelector } from "react-redux";
import { deleteNotification } from "../../store/notifications";

const NotificationComponent = () => {
    const dispatch = useDispatch();
    const notifications = useSelector(state => state.notifications.notifications)



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
                                {/* <Close style={{ position: "relative", bottom: "15px", left: "15px" }} size="small" onClick={() => dispatch(deleteNotification(notification))} /> */}
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
};

export default NotificationComponent;