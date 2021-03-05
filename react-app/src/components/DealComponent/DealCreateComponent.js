import { Box, Form, TextInput, Text, Button, DateInput, Select, RadioButton } from "grommet";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CircleQuestion } from "grommet-icons"
import React, { useEffect, useState } from "react";
import "./deal.css";
import { createNewDeal } from "../../store/deals";

const DealCreateComponent = ({ user }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [year, setYear] = useState(null);
    const [makeId, setMake] = useState(0);
    const [makeName, setMakeName] = useState("")
    const [model_name, setModel] = useState("");
    const [trim_name, setTrim] = useState("");
    const [months, setMonths] = useState(null);
    const [miles, setMiles] = useState(null);
    const [msrp, setMsrp] = useState(null);
    const [discount, setDiscount] = useState(null);
    const [residual, setResidual] = useState(null);
    const [money_factor, setMoneyFactor] = useState(null);
    const [loyalty, setLoyalty] = useState(0);
    const [lease_cash, setLeaseCash] = useState(0);
    const [conquest, setConquest] = useState(0);
    const [payment, setMonthlyPayment] = useState(null);
    const [broker_fee, setBrokerFee] = useState(null);
    const [listed_date, setActiveMonth] = useState(new Date());
    const [makeOptions, setMakeOptions] = useState([]);
    const [modelOptions, setModelOptions] = useState([]);
    const [additional_fees, setAdditionalFees] = useState(895)
    const [listed, setListed] = useState(false)
    const [advertise, setAdvertise] = useState(false)
    const [demo, setDemo] = useState(false)
    let progressPercentage = 0

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${makeName}?format=json`);
            const { Results } = await response.json()
            let currentMakeOptions = []
            if (Results) {
                Results.forEach(make => currentMakeOptions.push({ label: make.Model_Name, value: make.Model_Name }))
                setModelOptions(currentMakeOptions)
            }
        })();
    }, [makeId])

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${makeName}?format=json`);
            const { Results } = await response.json()
            let currentMakeOptions = []
            if (Results) {
                Results.forEach(make => currentMakeOptions.push({ label: make.Model_Name, value: make.Model_Name }))
                setModelOptions(currentMakeOptions)
            }
        })();
    }, [makeId])

    useEffect(() => {
        (async () => {
            const response = await fetch('/api/deals/make');
            const options = await response.json()
            if (!options.errors) {
                setMakeOptions(options.makes)
            }
        })();
    }, [])

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
            year: Number(year),
            makeId: makeId.value,
            model_name: model_name.value,
            trim_name,
            months: Number(months),
            miles: Number(miles),
            msrp: Number(msrp),
            discount: Number(discount),
            residual: Number(residual),
            money_factor: Number(money_factor),
            payment: Number(payment),
            broker_fee: Number(broker_fee),
            listed_date,
            lease_cash: Number(lease_cash),
            loyalty: Number(loyalty),
            conquest: Number(conquest),
            additional_fees: Number(additional_fees),
            listed,
            advertise,
            demo
        };
        dispatch(createNewDeal(newDeal));
        return history.push('/')
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
                                    <Select options={makeOptions}
                                        labelKey="label"
                                        valueKey={{ key: "value" }}
                                        value={makeId}
                                        onChange={({ value: newValue }) => {
                                            setMake(newValue)
                                            setMakeName(newValue.label)
                                            console.log(newValue.value)
                                        }} />
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div id="quad" style={{ display: "flex", flexDirection: "column" }}>
                                    <label>Model</label>
                                    <Select
                                        options={modelOptions}
                                        labelKey="label"
                                        valueKey={{ key: "value" }}
                                        value={model_name}
                                        onChange={({ value: newValue }) => setModel(newValue)} />
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
                            <div style={{ marginTop: "50px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <div style={{ width: "100px" }}>
                                    <RadioButton style={{ width: "0px", height: "0px" }} label="Listed" value={listed} checked={listed === true} onClick={e => setListed(!listed)} />
                                    <RadioButton style={{ width: "0px", height: "0px" }} label="Advertise" value={advertise} checked={advertise === true} onClick={e => setAdvertise(!advertise)} />
                                    <RadioButton style={{ width: "0px", height: "0px" }} label="Demo" value={demo} checked={demo === true} onClick={e => setDemo(!demo)} />
                                </div>
                                <DateInput placeholder="MM/YYYY active" value={listed_date} onChange={(e) => setActiveMonth(e.value)} /> <p>Active month</p>
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