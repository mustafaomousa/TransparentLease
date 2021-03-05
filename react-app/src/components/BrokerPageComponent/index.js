import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Avatar, DataTable, CheckBox, Box } from "grommet";
import "./brokerpage.css";
import { getUserByUserName, getUserByUsername } from "../../store/user";

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

// const data = [
//     {
//         make: 'BMW'
//     }
// ];

const BrokerPageComponent = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { brokerUsername } = useParams();
    const user = useSelector(state => state.user.profile_user);
    const brokerDeals = useSelector(state => state.user.broker_deals)

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
        dispatch(getUserByUsername(brokerUsername))
    }, [dispatch]);

    if (user && user.broker === true) return (
        <div className="broker-page-body">
            <div className="broker-page-top-bar"></div>
            <div className="broker-page-header-container">
                <div className="broker-image-name">
                    <Avatar size="120px" src={src} />

                </div>
                <div className="broker-info">
                    <div style={{ paddingLeft: "50px", textAlign: "center" }}>
                        <h1>{user.name}</h1>
                    </div>
                    <div style={{ paddingLeft: "50px", paddingTop: "15px" }}>
                        <p>{user.header}</p>
                        <p>{user.bio}</p>
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
            <div className="broker-comments-container">
                <div className="broker-comments">
                    <div className="broker-comments-top" ><p>Comments</p></div>
                </div>
            </div>
            <div className="broker-page-bottom-bar"></div>
        </div >
    )

    if (user && user.broker === false) history.push('/');

    if (!user) setTimeout(() => history.push('/'), [5000])

    return (<h1>Loading</h1>)
};

export default BrokerPageComponent;