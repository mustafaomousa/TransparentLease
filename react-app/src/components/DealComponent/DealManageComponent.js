import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Collapse, IconButton } from "@material-ui/core";

import "./deal-manage.css";
import ManageDealRow from "./ManageDealRow";

const DealManageComponent = () => {
    const brokerDeals = useSelector(state => state.user.user_deals);

    return (
        <div className="deal-manage-body">
            <div className="deal-chart-container">
                <p id="deal-header">Manage your deals</p>
                <div className="deal-chart">
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell><p>Deal #</p></TableCell>
                                    <TableCell><p>Make</p></TableCell>
                                    <TableCell><p>Model</p></TableCell>
                                    <TableCell><p>Trim</p></TableCell>
                                    <TableCell><p>Msrp</p></TableCell>
                                    <TableCell><p>Selling price</p></TableCell>
                                    <TableCell><p>Payment</p></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {brokerDeals && brokerDeals.map((deal, idx) => (
                                    <ManageDealRow deal={deal} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div >
    )
};


export default DealManageComponent