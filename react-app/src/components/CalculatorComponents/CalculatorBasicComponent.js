import React, { useState } from "react";
import { FormControl, Input, Table, TableBody, TableCell, TableContainer, TableRow, TableHead, InputAdornment } from "@material-ui/core";

const CalculatorBasicComponent = () => {
    const [msrp, setMsrp] = useState(0);
    const [salesPrice, setSalesPrice] = useState(0);
    const [residual, setResidual] = useState(0);
    const [moneyFactor, setMoneyFactor] = useState(0);
    const [months, setMonths] = useState(0);
    const [downpayment, setDownpayment] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [total, setTotal] = useState(0);
    const [interest, setInterest] = useState(0);
    const [principal, setPrincipal] = useState(0);

    const updateMsrp = (e) => setMsrp(e.target.value);
    const updateSalesPrice = (e) => setSalesPrice(e.target.value);
    const updateResidual = (e) => setResidual(e.target.value);
    const updateMoneyFactor = (e) => {
        setMoneyFactor(e.target.value);
    };
    const updateMonths = (e) => setMonths(e.target.value);
    const updateDownpayment = (e) => setDownpayment(e.target.value);


    const calculateSmallLease = () => {
        const residualValue = msrp * (0.01 * residual);
        const depreciationAmount = ((salesPrice - downpayment) - residualValue);
        const monthlyDepreciationAmount = (depreciationAmount / months);
        const monthlyRentCharge = ((salesPrice - downpayment) * moneyFactor);

        if (residualValue && depreciationAmount && monthlyDepreciationAmount && monthlyRentCharge) {
            setPrincipal(monthlyDepreciationAmount);
            setInterest(monthlyRentCharge);
            setMonthlyPayment(monthlyRentCharge + monthlyDepreciationAmount);
            setTotal((monthlyDepreciationAmount + monthlyRentCharge) * months);
        }
    };


    return (
        <FormControl className="simple-calculator-form">
            <TableContainer>
                <Table>
                    <TableHead className="simple-calculator-header">
                        <TableRow>
                            <TableCell><p>Vehicle information</p></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th">
                                <p>Vehicle's MSRP</p>
                            </TableCell>
                            <TableCell>
                                <Input value={msrp} onChange={updateMsrp} startAdornment={
                                    <InputAdornment position="start">
                                        <p style={{ fontSize: "15px" }}>$</p>
                                    </InputAdornment>
                                } />
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <p>Vehicle sales price</p>
                            </TableCell>
                            <TableCell>
                                <Input value={salesPrice} onChange={updateSalesPrice} startAdornment={
                                    <InputAdornment position="start">
                                        <p style={{ fontSize: "15px" }}>$</p>
                                    </InputAdornment>
                                } />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <p>Residual</p>
                            </TableCell>
                            <TableCell>
                                <Input value={residual} onChange={updateResidual} startAdornment={
                                    <InputAdornment position="start">
                                        <p style={{ fontSize: "15px" }}>%</p>
                                    </InputAdornment>
                                } />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <p>Money factor</p>
                            </TableCell>
                            <TableCell>
                                <Input value={moneyFactor} onChange={updateMoneyFactor} />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    <TableHead className="simple-calculator-header">
                        <TableRow>
                            <TableCell><p>Lease information</p></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th">
                                <p>Months</p>
                            </TableCell>
                            <TableCell>
                                <Input value={months} onChange={updateMonths} />
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell component="th">
                                <p>Down payment</p>
                            </TableCell>
                            <TableCell>
                                <Input value={downpayment} onChange={updateDownpayment} startAdornment={
                                    <InputAdornment position="start">
                                        <p style={{ fontSize: "15px" }}>$</p>
                                    </InputAdornment>
                                } />
                            </TableCell>
                        </TableRow>
                    </TableBody>

                </Table>
            </TableContainer>
            <div className="simple-calculator-results-container">
                <div style={{ width: "100%", height: "100%" }}>
                    <div className="result-sect">
                        <p>Monthly</p>
                        <p>{monthlyPayment.toFixed(2)}$ for 36 months</p>
                    </div>
                    <div className="result-sect">
                        <p>Total</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                    <div className="result-sect">
                        <p>Principal per month</p>
                        <p>${principal.toFixed(2)}</p>
                    </div>
                    <div className="result-sect">
                        <p>Interest per month</p>
                        <p>${interest.toFixed(2)}</p>
                    </div>
                    <div style={{ textAlign: "end", marginRight: "20px", marginTop: "10px" }}>
                        <button onClick={calculateSmallLease}>Calculate</button>
                    </div>

                </div>
            </div>
        </FormControl>
    )
};

export default CalculatorBasicComponent