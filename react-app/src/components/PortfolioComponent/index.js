import { Avatar, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-scroll";
import { getCurrentUser } from "../../store/user";

import "./portfolio.css"

const PortfiolioComponent = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const inquiries = user.user_inquiries;

    useEffect(() => dispatch(getCurrentUser()), [dispatch])

    return (
        <div className="portfolio-body">
            <div className="portfolio-container">
                <div className="portfolio-header">
                </div>
                <div className="portfolio">
                    <div className="portfolio-avatar-container">
                        <Avatar id="portfolio-avatar" src="" alt="" />
                        <div className="portfolio-avatar-header-container">
                            <div className="portfolio-avatar-header">
                                <p>{user.name}</p>
                            </div>
                            <div className="portfolio-avatar-footer">
                                <p>Edit portfolio</p>
                            </div>
                        </div>
                    </div>
                    <div className="purchases-container">
                        <p id="pending">Purchase history</p>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell>Inquiry #</TableCell>
                                        <TableCell>Vehicle</TableCell>
                                        <TableCell>Term</TableCell>
                                        <TableCell>Payment</TableCell>
                                        <TableCell>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {inquiries && Object.entries(inquiries).map(([inquiry_id, inquiry]) => (
                                        <TableRow>
                                            <TableCell>
                                                <p>Cancel</p>
                                            </TableCell>
                                            <TableCell>
                                                <p>{inquiry.id}</p>
                                            </TableCell>
                                            <TableCell>
                                                <p>{inquiry.broker_deal.make.name} {inquiry.broker_deal.lease_info.trim.model.name}</p>
                                            </TableCell>
                                            <TableCell>
                                                <p>{inquiry.broker_deal.lease_info.months}mo/{inquiry.broker_deal.lease_info.miles_yearly}mi</p>
                                            </TableCell>
                                            <TableCell>
                                                <p>{inquiry.broker_deal.lease_info.payment}</p>
                                            </TableCell>
                                            <TableCell>
                                                <p>Pending</p>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PortfiolioComponent