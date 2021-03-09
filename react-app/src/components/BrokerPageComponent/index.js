import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { Send } from "grommet-icons";
import { Avatar, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Collapse } from "@material-ui/core";
import { DataTable } from "grommet";
import { FormControl, Input, Button, withStyles, IconButton, Paper } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import "./brokerpage.css";
import { getCurrentUser, getUserByUserName, getUserByUsername } from "../../store/user";
import { createUserComment, getBrokerInformation } from "../../store/broker";
import { createNotification } from "../../store/notifications";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

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

const Row = ({ deal }) => {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>


            <TableRow>
                <TableCell>
                    <IconButton size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    <p>2021</p>
                </TableCell>
                <TableCell >
                    <p>{deal.make.name}</p>
                </TableCell>
                <TableCell >
                    <p>{deal.lease_info.trim.model.name}</p>
                </TableCell>
                <TableCell >
                    <p>${deal.lease_info.msrp}</p>
                </TableCell>
                <TableCell >
                    <p>{deal.lease_info.discount}</p>
                </TableCell>
                <TableCell >
                    <p>{deal.lease_info.months}/{deal.lease_info.miles_yearly}</p>
                </TableCell>
                <TableCell >
                    <p>{deal.lease_info.payment}</p>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <div>
                            <h5>{deal.make.name}</h5>
                        </div>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}


const BrokerPageComponent = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { brokerUsername } = useParams();
    const [newComment, setNewComment] = useState("");
    const [open, setOpen] = useState(false)
    const broker = useSelector(state => state.broker.broker_information);
    const brokerDeals = useSelector(state => state.broker.broker_deals);
    const comments = useSelector(state => state.broker.broker_comments)
    const currentUser = useSelector(state => state.user)


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

    const submitComment = async (e) => {
        await dispatch(createUserComment(broker.id, newComment, currentUser.id));
        await dispatch(createNotification("Comment posted!"));
        setNewComment(" ");
        return animateScroll.scrollToBottom({ containerId: "broker-comments-container" })
    };

    const StyledAvatar = withStyles({
        root: {
            width: "60px",
            height: "60px",
        },
    })(Avatar);

    animateScroll.scrollToBottom({ containerId: "broker-comments-container" })

    useEffect(() => {
        dispatch(getBrokerInformation(brokerUsername))
    }, [dispatch, brokerUsername]);

    if (brokerDeals && broker) return (
        <div className="broker-page-body">
            <div className="broker-right-body">
                <div className="broker-page-header-container">
                    <div className="broker-image-name">
                        <StyledAvatar src={src} alt="" />
                        <p style={{ color: "white" }}>{broker.name}</p>
                    </div>
                    <div className="broker-info">
                        <div style={{ paddingLeft: "50px" }}>
                            <p style={{ borderBottom: "2px black solid" }}>{broker.header}</p>
                            <p>{broker.bio}</p>
                            <p style={{ fontSize: "12px", paddingTop: "15px" }}>Joined {broker.created_at}</p>
                        </div>
                    </div>
                    <div className="broker-info-buttons-container">
                        <Button><QuestionAnswerIcon /></Button>
                        <Button><ThumbUpIcon /></Button>
                    </div>
                </div>
                <div className="broker-table-container">
                    <TableContainer id="broker-page-deal-table" component={Paper}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell>Year</TableCell>
                                    <TableCell>Make</TableCell>
                                    <TableCell>Model</TableCell>
                                    <TableCell>MSRP</TableCell>
                                    <TableCell>Discount</TableCell>
                                    <TableCell>Term</TableCell>
                                    <TableCell>Payment</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {brokerDeals && brokerDeals.map((deal, idx) => (
                                    <Row deal={deal} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <DataTable
                        id="broker-table"
                        columns={columns}
                        data={data}
                        step={10}
                    /> */}
                </div>

            </div>
            <div className="broker-left">
                <div className="broker-page-interactions-container">
                    <p>Pinned comments</p>
                    <div className="pinned-comments-container">
                    </div>
                    <p>Comments</p>
                    <div className="broker-comments-container" id="broker-comments-container">
                        {comments && Object.entries(comments).map(([comment_id, comment]) => (
                            <div className="comment-container">
                                <div className="comment-avatar-container">
                                    <Avatar src="https://www.angkorsingles.com/wp-content/uploads/2019/06/fake_profile.jpg" alt="" />
                                </div>
                                <div className="comment-body-container">
                                    <div className="comment-body-header">
                                        <p>{comment.comment}</p>
                                    </div>
                                    <div className="comment-body-footer">
                                        <p>{comment.user.username}</p>
                                    </div>
                                </div>
                                {currentUser.id === comment.user_id && (<div style={{ textAlign: "end", width: "100%" }}>
                                    <Button>Delete</Button>
                                </div>)}
                                {currentUser.broker === true && broker.id === currentUser.id && comment.user_id !== currentUser.id && (
                                    <div style={{ textAlign: "end", width: "100%" }}>
                                        <Button>Reply</Button>
                                    </div>
                                )}
                            </div>

                        ))}

                    </div>
                    <div className="broker-comments-bottom" >
                        {currentUser.broker === false && (
                            <FormControl >
                                <div className="broker-comment-input-container">
                                    <Input id="comment-input" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Ask a question or post a comment" />
                                    <Button type="submit" onClick={submitComment} ><Send color="white" /></Button>
                                </div>
                            </FormControl>)}
                    </div>
                </div>
            </div>
        </div >
    )

    return (
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ color: "whitesmoke", fontSize: "50px" }}>Loading...</p>
        </div>
    )
};

export default BrokerPageComponent;