import { Avatar, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Select, MenuItem } from "@material-ui/core";
import { TextInput } from "grommet";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserInquiries, deleteInquiry } from "../../store/inquiries";

import "./portfolio.css"

const PortfiolioComponent = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const inquiries = useSelector(state => state.inquiry.userInquiries);
    const makes = useSelector(state => state.utils.makes);

    const [alertYear, setAlertYear] = useState(2019);
    const [alertMake, setAlertMake] = useState(1);

    useEffect(() => dispatch(loadUserInquiries(user.id)), [dispatch])

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
                    <div className="deal-alerts-container">
                        <p id="pending">Deal alerts ⚠️</p>
                        <form>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Year</TableCell>
                                            <TableCell>Make</TableCell>
                                            <TableCell>Model</TableCell>
                                            <TableCell>Payment (max)</TableCell>
                                            <TableCell />
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                <Select onChange={(e) => setAlertYear(e.target.value)} value={alertYear}>
                                                    <MenuItem value={2019}>2019</MenuItem>
                                                    <MenuItem value={2020}>2020</MenuItem>
                                                    <MenuItem value={2021}>2021</MenuItem>
                                                    <MenuItem value={2022}>2022</MenuItem>
                                                </Select>
                                            </TableCell>
                                            <TableCell>
                                                <Select onChange={(e) => setAlertMake(e.target.value)} value={alertMake}>
                                                    {makes && makes.map((make, key) => <MenuItem value={make.id} id={make.name} key={key}>{make.name}</MenuItem>)}
                                                </Select>
                                            </TableCell>
                                            <TableCell>
                                                <TextInput placeholder="Desired model name" />
                                            </TableCell>
                                            <TableCell>
                                                <TextInput type="number" placeholder="Desired payment" />
                                            </TableCell>
                                            <TableCell>
                                                <Button>+</Button>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </form>
                    </div>
                    <div className="purchases-container">
                        <p id="pending">Purchase history 🚗</p>
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
                                                <Button onClick={() => dispatch(deleteInquiry(inquiry_id))}>Cancel</Button>
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