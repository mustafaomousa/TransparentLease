import { Box, Form, TextInput, Text } from "grommet";
import React, { useEffect, useState } from "react";
import "./deal.css";

const DealCreateComponent = ({ user }) => {
    const [year, setYear] = useState(0);
    const [make, setMake] = useState();
    const [model, setModel] = useState();
    const [trim, setTrim] = useState();
    const [months, setMonths] = useState();
    const [miles, setMiles] = useState();
    const [msrp, setMsrp] = useState();
    const [discount, setDiscount] = useState();
    const [residual, setResidual] = useState();
    const [moneyFactor, setMoneyFactor] = useState();
    const [loyalty, setLoyalty] = useState();
    const [leaseCash, setLeaseCash] = useState();
    const [conquest, setConquest] = useState();
    const [monthlyPayment, setMonthlyPayment] = useState();
    const [brokerFee, setBrokerFee] = useState();
    const [listed, setListed] = useState();
    const [advertise, setAdvertise] = useState();
    const [activeMonth, setActiveMonth] = useState();
    let progressPercentage = 0

    useEffect(() => {
        if (year) progressPercentage += 7.69231
        if (make) progressPercentage += 7.69231
        if (model) progressPercentage += 7.69231
        if (trim) progressPercentage += 7.69231
        if (months) progressPercentage += 7.69231
        if (miles) progressPercentage += 7.69231
        if (msrp) progressPercentage += 7.69231
        if (discount) progressPercentage += 7.69231
        if (residual) progressPercentage += 7.69231
        if (moneyFactor) progressPercentage += 7.69231
        if (monthlyPayment) progressPercentage += 7.69231
        if (brokerFee) progressPercentage += 7.69231
        if (activeMonth) progressPercentage += 7.69231

        document.getElementById("progress-bar-filler").style.width = `${progressPercentage}%`
    }, [year, make, model, trim, months, miles, msrp, discount, residual, moneyFactor, monthlyPayment, brokerFee, activeMonth])


    const updateYear = (e) => {
        setYear(e.target.value);
    };
    return (
        <div className="deal-create-body">

            <Form>
                <div className="deal-create-container">
                    <div className="deal-create-header">
                        <div className="h4">
                            <h4>Create a deal</h4>

                        </div>
                        <div className="h4-underline" />
                    </div>
                    <div className="progress-bar">
                        <div className="progress-bar-filler" id="progress-bar-filler" />
                    </div>
                    <div className="deal-create">
                        <div className="deal-create-1">
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <label>Year</label>
                                    <TextInput type="number" value={year} suggestions={[2019, 2020, 2021]} onSelect={(e) => setYear(e.suggestion)} onChange={(e) => setYear(e.target.value)} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <label>Make</label>
                                    <TextInput type="text" value={make} suggestions={['Audi', 'BMW', 'Mercedes'].filter(car => car.includes(make))} onSelect={(e) => setMake(e.suggestion)} onChange={(e) => setMake(e.target.value)} />
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <label>Model</label>
                                    <TextInput type="text" value={model} onChange={(e) => setModel(e.target.value)} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <label>Trim</label>
                                    <TextInput type="text" value={trim} onChange={(e) => setTrim(e.target.value)} />
                                </div>
                            </div>
                            <div>

                            </div>
                            <div>
                                <label>Months</label>
                                <TextInput type="number" value={months} onChange={(e) => setMonths(e.target.value)} />
                            </div>
                            <div>
                                <label>Miles per year</label>
                                <TextInput type="number" value={miles} onChange={(e) => setMiles(e.target.value)} />
                            </div>
                            <div>
                                <label>Msrp</label>
                                <TextInput type="number" value={msrp} onChange={(e) => setMsrp(e.target.value)} />
                            </div>
                            <div>
                                <label>Discount</label>
                                <TextInput type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} />
                            </div>
                        </div>
                        <div className="deal-create-2">
                            <div>
                                <label>Residual</label>
                                <TextInput type="number" value={residual} onChange={(e) => setResidual(e.target.value)} />
                            </div>
                            <div>
                                <label>Money factor</label>
                                <TextInput type="number" value={moneyFactor} onChange={(e) => setMoneyFactor(e.target.value)} />
                            </div>
                            <div>
                                <label>Loyalty</label>
                                <TextInput type="number" value={loyalty} onChange={(e) => setLoyalty(e.target.value)} />
                            </div>
                            <div>
                                <label>Lease cash</label>
                                <TextInput type="number" value={leaseCash} onChange={(e) => setLeaseCash(e.target.value)} />
                            </div>
                            <div>
                                <label>Conquest</label>
                                <TextInput type="number" value={conquest} onChange={(e) => setConquest(e.target.value)} />
                            </div>
                            <div>
                                <label>Monthly payment</label>
                                <TextInput type="number" value={monthlyPayment} onChange={(e) => setMonthlyPayment(e.target.value)} />
                            </div>
                            <div>
                                <label>Broker fee</label>
                                <TextInput type="number" value={brokerFee} onChange={(e) => setBrokerFee(e.target.value)} />
                            </div>
                            <div>
                                <label>Listed</label>
                                <label>Advertise</label>
                                <TextInput type="text" placeholder="MM/YYYY active" value={activeMonth} onChange={(e) => setActiveMonth(e.target.value)} />
                            </div>
                        </div>

                    </div>
                </div>
            </Form>
        </div>
    )
};

export default DealCreateComponent;