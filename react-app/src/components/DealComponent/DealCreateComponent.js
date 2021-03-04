import { Box, Form, TextInput, Text, Button, DateInput } from "grommet";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CircleQuestion } from "grommet-icons"
import React, { useEffect, useState } from "react";
import "./deal.css";
import { createNewDeal } from "../../store/deals";

const DealCreateComponent = ({ user }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [year, setYear] = useState(0);
    const [makeId, setMake] = useState();
    const [model_name, setModel] = useState();
    const [trim_name, setTrim] = useState();
    const [months, setMonths] = useState();
    const [miles, setMiles] = useState();
    const [msrp, setMsrp] = useState();
    const [discount, setDiscount] = useState();
    const [residual, setResidual] = useState();
    const [money_factor, setMoneyFactor] = useState();
    const [loyalty, setLoyalty] = useState(0);
    const [lease_cash, setLeaseCash] = useState(0);
    const [conquest, setConquest] = useState(0);
    const [payment, setMonthlyPayment] = useState();
    const [broker_fee, setBrokerFee] = useState();
    const [listed, setListed] = useState();
    const [advertise, setAdvertise] = useState();
    const [listed_date, setActiveMonth] = useState();
    let progressPercentage = 0

    useEffect(() => {
        if (year) progressPercentage += 7.69231
        if (makeId) progressPercentage += 7.69231
        if (model_name) progressPercentage += 7.69231
        if (trim_name) progressPercentage += 7.69231
        if (months) progressPercentage += 7.69231
        if (miles) progressPercentage += 7.69231
        if (msrp) progressPercentage += 7.69231
        if (discount) progressPercentage += 7.69231
        if (residual) progressPercentage += 7.69231
        if (money_factor) progressPercentage += 7.69231
        if (payment) progressPercentage += 7.69231
        if (broker_fee) progressPercentage += 7.69231
        if (listed_date) progressPercentage += 7.69231

        document.getElementById("progress-bar-filler").style.width = `${progressPercentage}%`
    }, [year, makeId, model_name, trim_name, months, miles, msrp, discount, residual, money_factor, payment, broker_fee, listed_date])

    const onSubmit = async () => {
        let newDeal = {
            year, makeId, model_name, trim_name, months, miles, msrp, discount, residual, money_factor, payment, broker_fee, listed_date, lease_cash, loyalty, conquest
        };
        dispatch(createNewDeal(newDeal));
        return history.push('/test')
    }

    return (
        <div className="deal-create-body">
            <Form onSubmit={onSubmit}>
                <div className="deal-create-container">
                    <div className="deal-create-header">
                        <div className="h4">
                            <h4>Create a deal</h4>
                        </div>
                        <div className="h4-underline" />
                    </div>
                    <div className="deal-create">
                        <div className="deal-create-1">
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div id="quad" style={{ display: "flex", flexDirection: "column" }}>
                                    <label>Year</label>
                                    <TextInput type="number" value={year} suggestions={[2019, 2020, 2021]} onSelect={(e) => setYear(e.suggestion)} onChange={(e) => setYear(e.target.value)} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <label>Make</label>
                                    <TextInput type="number" value={makeId} suggestions={['Audi', 'BMW', 'Mercedes'].filter(car => car.includes(makeId))} onSelect={(e) => setMake(e.suggestion)} onChange={(e) => setMake(e.target.value)} />
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div id="quad" style={{ display: "flex", flexDirection: "column" }}>
                                    <label>Model</label>
                                    <TextInput type="text" value={model_name} onChange={(e) => setModel(e.target.value)} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <label>Trim</label>
                                    <TextInput type="text" value={trim_name} onChange={(e) => setTrim(e.target.value)} />
                                </div>
                            </div>
                            <div id="horizontal-divider" />
                            <div>
                                <label>Months</label>
                                <TextInput type="number" value={months} onChange={(e) => setMonths(e.target.value)} />
                            </div>
                            <div>
                                <label>Miles per year</label>
                                <TextInput type="number" value={miles} onChange={(e) => setMiles(e.target.value)} />
                            </div>
                            <div id="horizontal-divider" />
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div id="quad" style={{ display: "flex", flexDirection: "column" }}>
                                    <label>Msrp</label>
                                    <TextInput type="number" value={msrp} onChange={(e) => setMsrp(e.target.value)} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <label>Discount</label>
                                    <TextInput type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="deal-create-2">
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div id="quad" style={{ display: "flex", flexDirection: "column" }}>
                                    <label>Residual</label>
                                    <TextInput type="number" value={residual} onChange={(e) => setResidual(e.target.value)} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <label>Money factor</label>
                                    <TextInput type="number" value={money_factor} onChange={(e) => setMoneyFactor(e.target.value)} />
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div id="quad" style={{ display: "flex", flexDirection: "column" }}>
                                    <label>Loyalty</label>
                                    <TextInput type="number" value={loyalty} onChange={(e) => setLoyalty(e.target.value)} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <label>Lease cash</label>
                                    <TextInput type="number" value={lease_cash} onChange={(e) => setLeaseCash(e.target.value)} />
                                </div>
                            </div>

                            <div>
                                <label>Conquest</label>
                                <TextInput type="number" value={conquest} onChange={(e) => setConquest(e.target.value)} />
                            </div>
                            <div id="horizontal-divider" />
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div id="quad" style={{ display: "flex", flexDirection: "column" }}>
                                    <label>Payment</label>
                                    <TextInput type="number" value={payment} onChange={(e) => setMonthlyPayment(e.target.value)} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <label>Broker fee</label>
                                    <TextInput type="number" value={broker_fee} onChange={(e) => setBrokerFee(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <label>Listed</label>
                                <label>Advertise</label>
                                <DateInput placeholder="MM/YYYY active" value={listed_date} onChange={(e) => setActiveMonth(e.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="deal-create-footer">
                        <div id="next-button" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <CircleQuestion color="white" size="medium" />
                        </div>
                        <div>
                            <Button id="next-button">Upload Google Sheets</Button>
                        </div>
                        <div>
                            <Button id="next-button" type="submit">Next</Button>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-bar-filler" id="progress-bar-filler" />
                    </div>
                </div>
            </Form>
        </div >
    )
};

export default DealCreateComponent;