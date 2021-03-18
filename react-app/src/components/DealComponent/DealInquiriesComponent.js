import { Button, Checkbox } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { brokerDeleteInquiry } from "../../store/broker";
import { getCurrentUser } from "../../store/user";

import "./deal.css"

const DealInquiriesComponent = () => {
    const dispatch = useDispatch();

    const inquiries = useSelector(state => state.user.active_inquiries)

    useEffect(() => dispatch(getCurrentUser()), [dispatch])

    const declineUserInquiry = (e, inquiryId) => {
        e.preventDefault()
        dispatch(brokerDeleteInquiry(inquiryId));
    };

    return (
        <div className="broker-inquiries-body">
            <div className="broker-inquiries-header">

            </div>
            <div className="broker-inquiries-container">
                <div className="inquiry-header">
                    <p>Inquiry Dashboard</p>
                </div>
                {inquiries && Object.entries(inquiries).map(([inquiry_id, inquiry]) => (
                    <div className="inquiry-container">
                        <div className="inquiry">
                            <div className="inquiry-checkbox">
                                <Checkbox />
                            </div>
                            <div className="inquiry-information">
                                <p>{inquiry.user.username} inquired on Deal #{inquiry.broker_deal.id}</p>
                            </div>
                            <div className="inquiry-buttons">
                                <Button>Message</Button>
                                <Button>Approve</Button>
                                <Button onClick={e => declineUserInquiry(e, inquiry.id)}>Decline</Button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
};

export default DealInquiriesComponent;