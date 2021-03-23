import { Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Select, MenuItem, Divider, InputLabel, Input } from "@material-ui/core";
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

    useEffect(() => dispatch(loadUserInquiries(user.id)), [dispatch, user.id])

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
                                <p>joined {user.created_at}</p>
                            </div>
                        </div>
                    </div>
                    <div className="deal-alerts-container">
                        <p id="pending">Deal alerts <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">⚠️</span></p>
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
                                                    {makes && Object.entries(makes).map(([makeId, makeObj], key) => <MenuItem value={makeObj.make.id} id={makeObj.make.name} key={key}>{makeObj.make.name}</MenuItem>)}
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
                        <p id="pending">Purchase history <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">🚗</span></p>
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
            <div className="account-container">
                <div className="account-information-container">
                    <p id="pending">Account information <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">🧍</span></p>
                    <div className="account-information-top">
                        <div className="account-info-av">
                            <Avatar id="av" src="" alt="" />
                        </div>
                        <div className="account-info">
                            <div className="account-info-header">
                                <p>{user.header}</p>
                            </div>
                            <div className="account-info-bio">
                                <p>{user.bio}</p>
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div className="edit-account-info">
                        <form className="user-account-grid">
                            <div className="user-account-grid-area">
                                <InputLabel>Name:</InputLabel>
                                <Input value={user.name}></Input>
                            </div>
                            <div className="user-account-grid-area">
                                <InputLabel>Username:</InputLabel>
                                <Input value={user.username}></Input>
                            </div>
                            <div className="user-account-grid-area">
                                <InputLabel>E-mail:</InputLabel>
                                <Input value={user.email}></Input>
                            </div>
                            <div className="user-account-grid-area">
                                <InputLabel>Address:</InputLabel>
                                <Input value={user.address}></Input>
                            </div>
                            <div className="user-account-grid-area">
                                <InputLabel>City:</InputLabel>
                                <Input value={user.city}></Input>
                            </div>
                            <div className="user-account-grid-area">
                                <InputLabel>State:</InputLabel>
                                <Input value={user.state}></Input>
                            </div>
                            <div className="user-account-grid-area">
                                <InputLabel>Zip:</InputLabel>
                                <Input value={user.zip}></Input>
                            </div>
                            <div className="user-account-grid-area">
                                <Button>Delete Account</Button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default PortfiolioComponent