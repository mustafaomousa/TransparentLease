import React, { useEffect } from "react";
import { Checkmark } from "grommet-icons";
import { useDispatch, useSelector } from "react-redux";

import { deleteNotifications } from "../../store/notifications";

import "../NavBarComponent/navbar.css";

const NotificationComponent = () => {
    const dispatch = useDispatch();

    const notifications = useSelector(state => state.notifications.sucessful)

    useEffect(() => {
        const notificationTimer = setTimeout(() => dispatch(deleteNotifications()), 2000);
        return () => clearTimeout(notificationTimer)
    }, [notifications.length, dispatch])

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
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default NotificationComponent;