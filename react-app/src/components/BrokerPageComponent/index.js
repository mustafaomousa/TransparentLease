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

const data = [
    {
        make: 'BMW'
    }
];

const BrokerPageComponent = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { brokerUsername } = useParams();
    const user = useSelector(state => state.user.profile_user);
    console.log(user)

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
                    <h1>{user.name}</h1>
                    {/* <button onClick={() => dispatch(getUserByUsername(brokerUsername))} /> */}
                    <h5>{user.username}</h5>
                    <p>{user.header}</p>
                    <p>{user.bio}</p>
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
            <div className="broker-page-bottom-bar"></div>
        </div >
    )

    if (user && user.broker === false) history.push('/');

    if (!user) setTimeout(() => history.push('/'), [5000])

    return (<h1>Loading</h1>)
};

export default BrokerPageComponent;