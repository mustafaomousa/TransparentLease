import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Send } from "grommet-icons"
import { Avatar, DataTable, Form, TextInput } from "grommet";
import "./brokerpage.css";
import { getCurrentUser, getUserByUserName, getUserByUsername } from "../../store/user";
import { getBrokerInformation } from "../../store/broker";

const src = 'https://c0.klipartz.com/pngpicture/124/934/gratis-png-iconos-de-computadora-persona-avatar.png';

const columns = [
    {
        property: 'make',
        header: <p>Make</p>,
        primary: true
    },
    {
        property: 'model',
        header: <p>Model</p>,
    },
    {
        property: 'trim',
        header: <p>Trim</p>
    },
    {
        property: 'msrp',
        header: <p>MSRP</p>
    },
    {
        property: 'discount',
        header: <p>Discount</p>
    },
    {
        property: 'months',
        header: <p>Months</p>
    },
    {
        property: 'miles',
        header: <p>Miles</p>
    },
    {
        property: 'residual',
        header: <p>Residual</p>
    },
    {
        property: 'moneyFactor',
        header: <p>MF</p>
    },
    {
        property: 'rebates',
        header: <p>Rebates</p>
    },
    {
        property: 'additionalFees',
        header: <p>Fees</p>
    },
    {
        property: 'payment',
        header: <p>Payment</p>
    },
];


const BrokerPageComponent = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { brokerUsername } = useParams();
    const broker = useSelector(state => state.broker.broker_information);
    const brokerDeals = useSelector(state => state.broker.broker_deals);
    const comments = useSelector(state => state.broker.broker_comments)

    let data = []
    if (brokerDeals) {
        brokerDeals.map(brokerDeal => data.push({
            make: brokerDeal.make.name,
            model: brokerDeal.lease_info.trim.model.name,
            trim: brokerDeal.lease_info.trim.name,
            msrp: brokerDeal.lease_info.msrp,
            discount: brokerDeal.lease_info.discount,
            months: brokerDeal.lease_info.months,
            miles: brokerDeal.lease_info.miles_yearly,
            residual: brokerDeal.lease_info.residual,
            moneyFactor: brokerDeal.lease_info.money_factor,
            rebates: brokerDeal.lease_info.lease_cash + brokerDeal.lease_info.loyalty + brokerDeal.lease_info.conquest,
            additionalFees: brokerDeal.fee + brokerDeal.lease_info.additional_fees,
            payment: brokerDeal.lease_info.payment

        }))
    }


    useEffect(() => {
        dispatch(getBrokerInformation(brokerUsername))
    }, [dispatch, brokerUsername]);

    if (brokerDeals && broker) return (
        <div className="broker-page-body">
            <div className="broker-right-body">
                <div className="broker-page-top-bar"></div>
                <div className="broker-page-header-container">
                    <div className="broker-image-name">
                        <Avatar size="120px" src={src} />

                    </div>
                    <div className="broker-info">
                        <div style={{ paddingLeft: "50px", textAlign: "center" }}>
                            <h1>{broker.name}</h1>
                        </div>
                        <div style={{ paddingLeft: "50px", paddingTop: "15px" }}>
                            <p>{broker.header}</p>
                            <p>{broker.bio}</p>
                        </div>
                    </div>
                </div>
                <div className="broker-table-container">
                    <DataTable
                        id="broker-table"
                        columns={columns}
                        data={data}
                        step={10}
                    />
                </div>
                <div className="broker-page-interactions-container">
                    <div className="broker-comments-container">
                        <div className="broker-comments">
                            <div className="broker-comments-top" >
                                <p>Comments</p>
                            </div>
                            <div className="pinned-comment-container">
                                <h5>Pinned comment:</h5>
                            </div>
                            <div className="broker-comments-holder">
                                {comments && comments.map((comment, idx) => (
                                    <div className="comment-container">
                                        <div className="comment-avatar-container">
                                            <Avatar src="https://www.angkorsingles.com/wp-content/uploads/2019/06/fake_profile.jpg" alt="" />
                                        </div>
                                        <div className="comment-body-container">
                                            <div className="comment-body-header">
                                                <p>{comment.comment}</p>
                                            </div>
                                            <div className="comment-body-footer">
                                                <p>{comment.user.username}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="broker-comments-bottom" >
                                <Form>
                                    <div className="broker-comment-input-container">
                                        <TextInput id="comment-input" placeholder="Ask a question or post a comment" />
                                        <Send color="green" />
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="broker-page-bottom-bar"></div>
            </div>

        </div >
    )

    return (
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ color: "whitesmoke", fontSize: "50px" }}>Loading...</p>
        </div>
    )
};

export default BrokerPageComponent;