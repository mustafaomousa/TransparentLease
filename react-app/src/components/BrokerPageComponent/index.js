import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { Send } from "grommet-icons";
import { Avatar, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Collapse } from "@material-ui/core";
import { Input, Button, withStyles, IconButton, Paper } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

import { createUserComment, deleteUserComment, getBrokerInformation } from "../../store/broker";
import { createNotification } from "../../store/notifications";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import "./brokerpage.css";
import { createNewInquiry, loadUserInquiries } from "../../store/inquiries";

const src = 'https://c0.klipartz.com/pngpicture/124/934/gratis-png-iconos-de-computadora-persona-avatar.png';


const Row = ({ deal, userInquiries, submitUserInquiry }) => {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment >
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
                <TableCell>
                    <form onSubmit={(e) => submitUserInquiry(e, deal.id)} action="POST">
                        {!userInquiries && <Button type="submit">Inquire</Button>}
                        {userInquiries && <Button type="submit">Cancel</Button>}
                    </form>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <div className="specific-deal-container">
                            <h5>{deal.make.name}</h5>
                        </div>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}


const BrokerPageComponent = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { brokerUsername } = useParams();
    const [newComment, setNewComment] = useState("");
    const broker = useSelector(state => state.broker.broker_information);
    const brokerDeals = useSelector(state => state.broker.broker_deals);
    const comments = useSelector(state => state.broker.broker_comments)
    const currentUser = useSelector(state => state.user)
    const userInquiries = useSelector(state => state.inquiry.userInquiries);

    const submitComment = async (e) => {
        e.preventDefault();
        await dispatch(createUserComment(broker.id, newComment, currentUser.id));
        await dispatch(createNotification("Comment posted!"));
        setNewComment(" ");
        return animateScroll.scrollToBottom({ containerId: "broker-comments-container" })
    };

    const submitUserInquiry = async (e, broker_deal_id) => {
        e.preventDefault()
        await dispatch(createNewInquiry(broker_deal_id));
        await dispatch(createNotification("Inquiry submitted!"))
        return history.push('/')
    };

    const StyledAvatar = withStyles({
        root: {
            width: "60px",
            height: "60px",
        },
    })(Avatar);

    useEffect(() => dispatch(loadUserInquiries(currentUser.id)), [])

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
                        <Table aria-label="collapsible table" stickyHeader={true}>
                            <TableHead className="table-header">
                                <TableRow>
                                    <TableCell />
                                    <TableCell>Year</TableCell>
                                    <TableCell>Make</TableCell>
                                    <TableCell>Model</TableCell>
                                    <TableCell>MSRP</TableCell>
                                    <TableCell>Discount</TableCell>
                                    <TableCell>Term</TableCell>
                                    <TableCell>Payment</TableCell>
                                    <TableCell />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {brokerDeals && userInquiries && brokerDeals.map((deal, idx) => {
                                    if (deal.id in userInquiries) {
                                        return <Row key={idx} deal={deal} userInquiries={userInquiries} currentUser={currentUser} submitUserInquiry={submitUserInquiry} />
                                    }
                                    return <Row key={idx} deal={deal} currentUser={currentUser} submitUserInquiry={submitUserInquiry} />
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

            </div>
            <div className="broker-left">
                <div className="broker-page-interactions-container">
                    <div className="broker-comments-bottom" >
                        {currentUser.broker === false && (
                            <form >
                                <div className="broker-comment-input-container">
                                    <Input id="comment-input" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Ask a question or post a comment" />
                                    <Button type="submit" onClick={submitComment} ><Send color="white" /></Button>
                                </div>
                            </form>)}
                    </div>
                    <div className="broker-comments-container" >
                        {comments && Object.entries(comments).reverse().map(([comment_id, comment]) => (
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
                                <div>
                                    {currentUser.id === comment.user_id && (
                                        <Button onClick={() => dispatch(deleteUserComment(comment.id))}>Delete</Button>
                                    )}
                                    {currentUser.broker === true && broker.id === currentUser.id && comment.user_id !== currentUser.id && (
                                        <Button>Reply</Button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ color: "whitesmoke", fontSize: "50px" }}>Loading...</p>
        </div>
    )
};

export default BrokerPageComponent;